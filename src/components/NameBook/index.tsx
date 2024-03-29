import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Caver from 'caver-js';

import { contractAddr, gateway } from 'contracts/addrBook';
import { Donator } from 'contracts/donation';
import { getKlayTopDonators, getPalaTopDonators, getNamingFee } from 'contracts/viewer';
import { setName } from 'contracts/nameBook';
import { approve, getAllowance } from 'contracts/erc20';
import { RootState } from 'state';
import * as TxActions from 'state/transaction';
import * as WalletActions from 'state/wallet';
import { BN, getNumberFromBN } from 'utils/number';

import * as S from './style';

const NameBook = () => {
  const dispatch = useDispatch();
  const klaytnCaver = new Caver(window.klaytn);
  const caver = new Caver(gateway.cypress);
  const walletType = useSelector((state: RootState) => state.wallet.walletType);
  const address = useSelector((state: RootState) => state.wallet.address);
  const alapId = useSelector((state: RootState) => state.wallet.alapId);
  const txFlag = useSelector((state: RootState) => state.tx.txFlag);

  const [fee, setFeeValue] = useState(0);
  const [palaAllowance, setPalaAllowance] = useState<typeof BN>(new BN(0));
  const [nickName, setAddressNickName] = useState('');
  const [klayDonators, setKlayDonators] = useState<Donator[]>([]);
  const [palaDonators, setPalaDonators] = useState<Donator[]>([]);

  const isFreeUser = (account: string): boolean => {
    const userAccount = account.toLowerCase();
    for (const donator of klayDonators) {
      if (donator.addr.toLowerCase() === userAccount) return true;
    }
    for (const donator of palaDonators) {
      if (donator.addr.toLowerCase() === userAccount) return true;
    }
    return false;
  };

  useEffect(() => {
    const GetTopDonators = async () => {
      const klayResult = await getKlayTopDonators(caver);
      setKlayDonators(klayResult);
      const palaResult = await getPalaTopDonators(caver);
      setPalaDonators(palaResult);
    };
    const GetFee = async () => {
      const fee = getNumberFromBN(await getNamingFee(caver), 18);
      setFeeValue(fee);
    };
    const setAllowance = async () => {
      const allowance = await getAllowance(contractAddr.pala, contractAddr.ProxyNameBook, address, caver);
      setPalaAllowance(allowance);
    };
    GetTopDonators();
    GetFee();
    if (address !== '') setAllowance();
  }, [address, txFlag]);

  const successTx = async (txHash: any) => {
    dispatch(TxActions.toggleFlag());
    dispatch(WalletActions.setWallet(walletType, address, nickName, alapId));
  };

  const onChangeName = (event: any) => setAddressNickName(event.target.value);
  const onSubmitName = async (event: any) => {
    event.preventDefault();
    if (walletType !== '' && address !== '') {
      console.log(`allowance: ${getNumberFromBN(palaAllowance, 18)}`);
      if (!isFreeUser(address) && getNumberFromBN(palaAllowance, 18) < fee) {
        await approve(
          address,
          contractAddr.pala,
          contractAddr.ProxyNameBook,
          fee * 1e18,
          walletType,
          klaytnCaver,
          successTx,
        );
      }
      await setName(address, contractAddr.ProxyNameBook, nickName, walletType, klaytnCaver, successTx);
    } else {
      alert('지갑을 연결해 주세요.');
    }
  };

  return (
    <>
      <S.ContentText>
        이름을 생성하기 위해선 <S.Purple>{fee} PALA</S.Purple>가 필요하다. <br />
        (TOP 10 서포터들은 무료로 사용 가능) <br />
        <br />
      </S.ContentText>
      <S.NamingForm onSubmit={onSubmitName}>
        <S.NamingInput type="text" placeholder="이름 입력" maxLength={10} onChange={onChangeName} />
        <S.NamingButton type="submit">
          {!isFreeUser(address) && getNumberFromBN(palaAllowance, 18) < fee
            ? `${fee} PALA 사용\n승인하기`
            : `이름 생성하기\n(${getNumberFromBN(palaAllowance, 18)} PALA 승인됨)`}
        </S.NamingButton>
      </S.NamingForm>
    </>
  );
};

export default NameBook;

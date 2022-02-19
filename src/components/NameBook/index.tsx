import React, { useEffect, useState } from 'react';
import Caver from 'caver-js';
import { useSelector } from 'react-redux';

import { RootState } from 'state';
import { Donator, getKlayTopDonators, getPalaTopDonators } from 'contracts/donation';
import { contractAddr, gateway } from 'contracts/addrBook';
import { approve, getAllowance } from 'contracts/erc20';
import { getNumberFromBN } from 'utils/number';

import * as S from './style';
import { setName, getFee } from 'contracts/nameBook';

const NameBook = () => {
  const klaytnCaver = new Caver(window.klaytn);
  const caver = new Caver(gateway.cypress);
  const walletType = useSelector((state: RootState) => state.wallet.walletType);
  const address = useSelector((state: RootState) => state.wallet.address);

  const [fee, setFeeValue] = useState(0);
  const [name, setAddressName] = useState('');
  const [klayDonators, setKlayDonators] = useState<Donator[]>([]);
  const [palaDonators, setPalaDonators] = useState<Donator[]>([]);

  const isFreeUser = (account: string): boolean => {
    for (const donator of klayDonators) {
      if (donator.addr.toLowerCase() === account) return true;
    }
    for (const donator of palaDonators) {
      if (donator.addr.toLowerCase() === account) return true;
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
      const fee = getNumberFromBN(await getFee(caver), 18);
      setFeeValue(fee);
    };
    GetTopDonators();
    GetFee();
  }, []);

  const onChangeName = (event: any) => setAddressName(event.target.value);
  const onSubmitName = async (event: any) => {
    event.preventDefault();
    if (walletType !== '' && address !== '') {
      if (isFreeUser(address)) {
        await setName(klaytnCaver, address, contractAddr.ProxyNameBook, name);
      } else {
        const allowance = getNumberFromBN(await getAllowance(caver, address), 18);
        if (allowance < fee) {
          await approve(klaytnCaver, address, contractAddr.pala, contractAddr.ProxyNameBook, fee * 1e18);
        }
        await setName(klaytnCaver, address, contractAddr.ProxyNameBook, name);
      }
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
      <S.DonationForm onSubmit={onSubmitName}>
        <S.DonationInput type="text" placeholder="이름 입력" onChange={onChangeName} />
        <S.DonationButton type="submit">이름 생성하기</S.DonationButton>
      </S.DonationForm>
    </>
  );
};

export default NameBook;

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Caver from 'caver-js';

import { RootState } from 'state';
import { contractAddr, gateway } from 'contracts/addrBook';

import * as Image from 'constants/images';
import * as S from './style';
import { userAlapIds } from 'contracts/viewer';
import { getBalanceOf } from 'contracts/erc20';
import { BN } from 'utils/number';

const MyPage = () => {
  const caver = new Caver(gateway.cypress);
  const walletType = useSelector((state: RootState) => state.wallet.walletType);
  const address = useSelector((state: RootState) => state.wallet.address);
  const name = useSelector((state: RootState) => state.wallet.name);
  const alapId = useSelector((state: RootState) => state.wallet.alapId);
  const txFlag = useSelector((state: RootState) => state.tx.txFlag);

  const [imageUrl, setImageUrl] = useState<string>(Image.defaultAlap);
  const [ownedAlapIds, setOwnedAlapIds] = useState<string[]>([]);
  const [palaBalance, setPalaBalance] = useState<string>('0');
  const [spalaBalance, setsPalaBalance] = useState<string>('0');
  const [klayBalance, setKlayBalance] = useState<string>('0');

  const isLoggedIn = (): boolean => {
    return walletType !== '' && address !== '';
  };

  const isWalletConnected = (): boolean => {
    return walletType !== '' && address !== '';
  };

  useEffect(() => {
    const displayAlap = async () => {
      if (isWalletConnected()) {
        setOwnedAlapIds(await userAlapIds(caver, address, 0, 20));
        const palaBal = await getBalanceOf(contractAddr.pala, address, caver);
        const spalaBal = await getBalanceOf(contractAddr.spala, address, caver);
        const klayBal = parseInt(await caver.rpc.klay.getBalance(address));
        setPalaBalance(palaBal.div(new BN(10).pow(new BN(18))).toString());
        setsPalaBalance(spalaBal.div(new BN(10).pow(new BN(18))).toString());
        setKlayBalance((klayBal / 1e18).toFixed(2).toString());
        if (Number(alapId) != 0) {
          setImageUrl('https://alap.s3.ap-northeast-2.amazonaws.com/alap-' + alapId + '.png');
        } else {
          setImageUrl(Image.defaultAlap);
        }
      }
    };
    displayAlap();
  }, [address, txFlag]);

  const alapIds = (ids: string[]) => {
    return ids.map((id: string) => {
      return <S.NFTImage src={'https://alap.s3.ap-northeast-2.amazonaws.com/alap-' + id + '.png'} />;
    });
  };

  return (
    <S.MyPage>
      {isLoggedIn() ? (
        <>
          <S.TitleText>마이 페이지</S.TitleText>
          <S.ContentText>
            <br />
            <S.ProfileImage src={imageUrl} />
            <br />
            <br />
            <S.ContentText>Account</S.ContentText>
            <S.EmphasisText>
              {address.substring(0, 7) + '...' + address.substring(address.length - 6, address.length)}
            </S.EmphasisText>
            <br />
            <br />
            <S.ContentText>NickName</S.ContentText>
            <S.EmphasisText>{name}</S.EmphasisText>
            <br />
            <br />
            <S.ContentText>KLAY Balance</S.ContentText>
            <S.EmphasisText>{Number(klayBalance).toLocaleString() + ' KLAY'}</S.EmphasisText>
            <br />
            <br />
            <S.ContentText>PALA Balance</S.ContentText>
            <S.EmphasisText>{(Number(palaBalance) + Number(spalaBalance)).toLocaleString() + ' PALA'}</S.EmphasisText>
            <br />
            <br />
            <S.ContentText>My ALAP List</S.ContentText>
            {ownedAlapIds.length !== 0 ? alapIds(ownedAlapIds) : <S.ContentText>NONE</S.ContentText>}
          </S.ContentText>
          <br />
        </>
      ) : (
        <S.ContentText>
          <br />
          <br />
          <br />
          지갑 연결이 필요합니다.
        </S.ContentText>
      )}
    </S.MyPage>
  );
};

export default MyPage;

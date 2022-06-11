import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Caver from 'caver-js';

import { RootState } from 'state';
import { erc20TokenAddr, erc721TokenAddr, gateway } from 'contracts/addrBook';

import * as Image from 'constants/images';
import * as S from './style';
import { getAllPalaBalance, getTokenPrice, userAlapIds } from 'contracts/viewer';
import { getBalanceOf } from 'contracts/erc20';
import { AllPalaInfo } from 'utils/types';

const MyPage = () => {
  const caver = new Caver(gateway.cypress);
  const walletType = useSelector((state: RootState) => state.wallet.walletType);
  const address = useSelector((state: RootState) => state.wallet.address);
  const name = useSelector((state: RootState) => state.wallet.name);
  const alapId = useSelector((state: RootState) => state.wallet.alapId);
  const txFlag = useSelector((state: RootState) => state.tx.txFlag);

  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>(Image.defaultAlap);
  const [ownedAlapIds, setOwnedAlapIds] = useState<string[]>([]);
  const [mokshaBalance, setMokshaBalance] = useState<string>('0');
  const [klayBalance, setKlayBalance] = useState<string>('0');
  const [klayPrice, setKlayPrice] = useState<Number>(0);
  const [allPala, setAllPala] = useState<AllPalaInfo>({} as AllPalaInfo);

  const toggling = () => setIsOpen(!isOpen);

  const isLoggedIn = (): boolean => {
    return walletType !== '' && address !== '';
  };

  const isWalletConnected = (): boolean => {
    return walletType !== '' && address !== '';
  };

  useEffect(() => {
    const displayAlap = async () => {
      if (isWalletConnected()) {
        const klayBal = Number(await caver.rpc.klay.getBalance(address));
        const mokshaBal = await getBalanceOf(erc721TokenAddr.moksha, address, caver);
        const price = await getTokenPrice(caver, erc20TokenAddr.wklay);
        setKlayPrice(Number(price) / 1e18);
        setKlayBalance((klayBal / 1e18).toFixed(2).toString());
        setMokshaBalance(mokshaBal.toString());
        setOwnedAlapIds(await userAlapIds(caver, address, 0, 20));
        setAllPala((await getAllPalaBalance(caver, address)) as AllPalaInfo);

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
          <S.ProfileImage src={imageUrl} />
          <br />
          <br />
          <S.EmphasisText>Account</S.EmphasisText>
          <S.ContentText>
            {address.substring(0, 7) + '...' + address.substring(address.length - 6, address.length)}
          </S.ContentText>
          <br />
          <br />
          <S.EmphasisText>닉네임</S.EmphasisText>
          <S.ContentText>{name}</S.ContentText>
          <br />
          <br />
          <S.EmphasisText>KLAY 자산</S.EmphasisText>
          <S.ContentText>
            {'$ ' +
              (Number(klayBalance) * Number(klayPrice)).toFixed(1).toLocaleString() +
              ' ( ' +
              Number(klayBalance).toFixed(1).toLocaleString() +
              ' KLAY )'}
          </S.ContentText>
          <br />
          <br />
          <S.EmphasisText>PALA 자산</S.EmphasisText>
          <S.DropDownContainer>
            <S.DropDownHeader onClick={toggling}>
              <S.ContentText>
                {'> $ ' +
                  (
                    (((Number(allPala.inWallet) +
                      Number(allPala.inLP) +
                      Number(allPala.inStaked) +
                      Number(allPala.pending)) /
                      1e18) *
                      Number(allPala.price)) /
                    1e18
                  )
                    .toFixed(1)
                    .toLocaleString() +
                  ' ( ' +
                  (
                    (Number(allPala.inWallet) +
                      Number(allPala.inLP) +
                      Number(allPala.inStaked) +
                      Number(allPala.pending)) /
                    1e18
                  )
                    .toFixed(1)
                    .toLocaleString() +
                  ' PALA )'}
              </S.ContentText>
            </S.DropDownHeader>
            {isOpen && (
              <S.DropDownListContainer>
                <S.DropDownList>
                  <S.ListItem>
                    <S.TopicText>보유 PALA</S.TopicText>
                    <S.NormalText>
                      {'$ ' + (((Number(allPala.inWallet) / 1e18) * Number(allPala.price)) / 1e18).toLocaleString()}
                    </S.NormalText>
                    <S.NormalText>{(Number(allPala.inWallet) / 1e18).toLocaleString() + ' 개'}</S.NormalText>
                  </S.ListItem>
                  <S.ListItem>
                    <S.TopicText>스테이킹된 PALA</S.TopicText>
                    <S.NormalText>
                      {'$ ' + (((Number(allPala.inStaked) / 1e18) * Number(allPala.price)) / 1e18).toLocaleString()}
                    </S.NormalText>
                    <S.NormalText>{(Number(allPala.inStaked) / 1e18).toLocaleString() + ' 개'}</S.NormalText>
                  </S.ListItem>
                  <S.ListItem>
                    <S.TopicText>LP로된 PALA</S.TopicText>
                    <S.NormalText>
                      {'$ ' + (((Number(allPala.inLP) / 1e18) * Number(allPala.price)) / 1e18).toLocaleString()}
                    </S.NormalText>
                    <S.NormalText>{(Number(allPala.inLP) / 1e18).toLocaleString() + ' 개'}</S.NormalText>
                  </S.ListItem>
                  <S.ListItem>
                    <S.TopicText>수령 가능한 PALA</S.TopicText>
                    <S.NormalText>
                      {'$ ' + (((Number(allPala.pending) / 1e18) * Number(allPala.price)) / 1e18).toLocaleString()}
                    </S.NormalText>
                    <S.NormalText>{(Number(allPala.pending) / 1e18).toLocaleString() + ' 개'}</S.NormalText>
                  </S.ListItem>
                </S.DropDownList>
              </S.DropDownListContainer>
            )}
          </S.DropDownContainer>
          <br />
          <br />
          <S.EmphasisText>모크샤 수량</S.EmphasisText>
          <S.ContentText>{Number(mokshaBalance).toLocaleString() + ' MOKSHA'}</S.ContentText>
          <br />
          <br />
          <S.EmphasisText>알랍 수량</S.EmphasisText>
          <S.ContentText>{Number(ownedAlapIds.length).toLocaleString() + ' ALAP'}</S.ContentText>
          {ownedAlapIds.length !== 0 ? alapIds(ownedAlapIds) : <S.ContentText>NONE</S.ContentText>}
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

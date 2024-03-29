import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Caver from 'caver-js';

import { RootState } from 'state';
import { erc20TokenAddr, erc721TokenAddr, gateway } from 'contracts/addrBook';

import * as Image from 'constants/images';
import * as S from './style';
import { allPalaNFTInfo, allPalaTokneInfo, getTokenPrice, userAlapIds } from 'contracts/viewer';
import { AllPalaNFTInfo, AllPalaTokenInfo } from 'utils/types';

const MyPage = () => {
  const caver = new Caver(gateway.cypress);
  const walletType = useSelector((state: RootState) => state.wallet.walletType);
  const address = useSelector((state: RootState) => state.wallet.address);
  const name = useSelector((state: RootState) => state.wallet.name);
  const alapId = useSelector((state: RootState) => state.wallet.alapId);
  const txFlag = useSelector((state: RootState) => state.tx.txFlag);

  const [isOpen, setIsOpen] = useState(true);
  const [exchageRate, setExchangeRate] = useState<Number>(0);
  const [imageUrl, setImageUrl] = useState<string>(Image.defaultAlap);
  const [ownedAlapIds, setOwnedAlapIds] = useState<string[]>([]);
  const [klayBalance, setKlayBalance] = useState<string>('0');
  const [klayPrice, setKlayPrice] = useState<Number>(0);
  const [allPala, setAllPala] = useState<AllPalaTokenInfo>({} as AllPalaTokenInfo);
  const [allPalaNFT, setAllPalaNFT] = useState<AllPalaNFTInfo>({} as AllPalaNFTInfo);
  const [alapFloorPrice, setAlapFloorPrice] = useState<string>('0');
  const [mokshaFloorPrice, setMokshaFloorPrice] = useState<string>('0');

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
        const price = await getTokenPrice(caver, erc20TokenAddr.wklay);
        setKlayPrice(Number(price) / 1e18);
        setKlayBalance((klayBal / 1e18).toFixed(2).toString());
        setOwnedAlapIds(await userAlapIds(caver, address, 0, 20));
        setAllPala((await allPalaTokneInfo(caver, address)) as AllPalaTokenInfo);
        setAllPalaNFT((await allPalaNFTInfo(caver, address)) as AllPalaNFTInfo);

        let res = await fetch('https://v1.clink.money/v1/util/currency', {
          headers: {
            Origin: 'https://v1.clink.money',
            Referer: 'https://v1.clink.money',
          },
        });
        setExchangeRate((await res.json()).result);

        res = await fetch(`https://api.pala.world/projects/${erc721TokenAddr.alap}`);
        setAlapFloorPrice((await res.json()).floorPriceInKlay);

        res = await fetch(`https://api.pala.world/projects/${erc721TokenAddr.moksha}`);
        setMokshaFloorPrice((await res.json()).floorPriceInKlay);

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
      return (
        <S.ColumnContainer>
          <S.NFTImage src={'https://alap.s3.ap-northeast-2.amazonaws.com/alap-' + id + '.png'} />
          <S.ContentText>{id}</S.ContentText>
        </S.ColumnContainer>
      );
    });
  };

  return (
    <S.MyPage>
      {isLoggedIn() ? (
        <>
          <br />
          <br />
          <S.ProfileImage src={imageUrl} />
          <S.ContentText>{name ? name : '-'}</S.ContentText>
          <br />
          <S.ContentText
            size="13px"
            onClick={() => window.open(`https://scope.klaytn.com/account/${address}?tabId=txList`)}
          >
            {address.substring(0, 7) + '...' + address.substring(address.length - 6, address.length)}
          </S.ContentText>
          <S.ContentLink onClick={() => window.open(`https://scope.klaytn.com/account/${address}?tabId=txList`)}>
            klaytnScope
          </S.ContentLink>
          <br />
          <br />
          <S.ColumnBoxContainer>
            <S.SubTitleText>총 자산평가</S.SubTitleText>
            <S.ContentText>
              {(
                Number(klayBalance) * Number(klayPrice) * Number(exchageRate) +
                (((Number(allPala.inWallet) +
                  Number(allPala.inLP) +
                  Number(allPala.inSingleStaking) +
                  Number(allPala.inPairStaking) +
                  Number(allPala.pending)) /
                  1e18) *
                  Number(allPala.price) *
                  Number(exchageRate)) /
                  1e18 +
                (Number(allPalaNFT.mokshaBalance) * Number(allPalaNFT.smokshaPrice) * Number(exchageRate)) / 1e18 +
                (Number(allPalaNFT.alapBalance) * Number(allPalaNFT.salapPrice) * Number(exchageRate)) / 1e18
              )
                .toLocaleString()
                .split('.')[0] + '원'}
            </S.ContentText>
          </S.ColumnBoxContainer>
          <br />
          <br />
          <S.RowContainer>
            <S.SubTitleText>KLAY 자산</S.SubTitleText>
            <S.TokenPriceBox>
              <S.TokenImage src={Image.klayTicker} />
              <S.PriceText>
                {(Number(klayPrice) * Number(exchageRate)).toLocaleString().split('.')[0] + '원'}
              </S.PriceText>
            </S.TokenPriceBox>
          </S.RowContainer>
          <S.ContentText>
            {(Number(klayBalance) * Number(klayPrice) * Number(exchageRate)).toLocaleString().split('.')[0] + '원'}
          </S.ContentText>
          <S.SubContentText>
            {Number(klayBalance).toLocaleString(undefined, { maximumFractionDigits: 2 }) + '개'}
          </S.SubContentText>
          <br />
          <br />
          <S.RowContainer>
            <S.SubTitleText>PALA 자산</S.SubTitleText>
            <S.TokenPriceBox>
              <S.TokenImage src={Image.palaTicker} />
              <S.PriceText>
                {((Number(allPala.price) * Number(exchageRate)) / 1e18).toLocaleString().split('.')[0] + '원'}
              </S.PriceText>
            </S.TokenPriceBox>
          </S.RowContainer>
          <S.DropDownContainer>
            <S.DropDownHeader>
              <S.ContentText>
                {(
                  (((Number(allPala.inWallet) +
                    Number(allPala.inLP) +
                    Number(allPala.inSingleStaking) +
                    Number(allPala.inPairStaking) +
                    Number(allPala.pending)) /
                    1e18) *
                    Number(allPala.price) *
                    Number(exchageRate)) /
                  1e18
                )
                  .toLocaleString()
                  .split('.')[0] + '원'}
                {!isOpen ? (
                  <S.ContentLink onClick={toggling}>상세보기</S.ContentLink>
                ) : (
                  <S.ContentLink onClick={toggling}>접기</S.ContentLink>
                )}
              </S.ContentText>
            </S.DropDownHeader>
            {isOpen && (
              <S.DropDownListContainer>
                <S.ListItem>
                  <S.TopicText>지갑</S.TopicText>
                  <S.CountText>
                    {(Number(allPala.inWallet) / 1e18).toLocaleString(undefined, { maximumFractionDigits: 2 }) + '개'}
                  </S.CountText>
                  <S.AssetText>
                    {((((Number(allPala.inWallet) / 1e18) * Number(allPala.price)) / 1e18) * Number(exchageRate))
                      .toLocaleString()
                      .split('.')[0] + '원'}
                  </S.AssetText>
                </S.ListItem>
                <S.ListItem>
                  <S.TopicText>단일 스테이킹</S.TopicText>
                  <S.CountText>
                    {(Number(allPala.inSingleStaking) / 1e18).toLocaleString(undefined, { maximumFractionDigits: 2 }) +
                      '개'}
                  </S.CountText>
                  <S.AssetText>
                    {((((Number(allPala.inSingleStaking) / 1e18) * Number(allPala.price)) / 1e18) * Number(exchageRate))
                      .toLocaleString()
                      .split('.')[0] + '원'}
                  </S.AssetText>
                </S.ListItem>
                <S.ListItem>
                  <S.TopicText>페어 스테이킹</S.TopicText>
                  <S.CountText>
                    {(Number(allPala.inPairStaking) / 1e18).toLocaleString(undefined, { maximumFractionDigits: 2 }) +
                      '개'}
                  </S.CountText>
                  <S.AssetText>
                    {((((Number(allPala.inPairStaking) / 1e18) * Number(allPala.price)) / 1e18) * Number(exchageRate))
                      .toLocaleString()
                      .split('.')[0] + '원'}
                  </S.AssetText>
                </S.ListItem>
                <S.ListItem>
                  <S.TopicText>LP 토큰</S.TopicText>
                  <S.CountText>
                    {(Number(allPala.inLP) / 1e18).toLocaleString(undefined, { maximumFractionDigits: 2 }) + '개'}
                  </S.CountText>
                  <S.AssetText>
                    {((((Number(allPala.inLP) / 1e18) * Number(allPala.price)) / 1e18) * Number(exchageRate))
                      .toLocaleString()
                      .split('.')[0] + '원'}
                  </S.AssetText>
                </S.ListItem>
                <S.ListItem>
                  <S.TopicText>보상</S.TopicText>
                  <S.CountText>
                    {(Number(allPala.pending) / 1e18).toLocaleString(undefined, { maximumFractionDigits: 2 }) + '개'}
                  </S.CountText>
                  <S.AssetText>
                    {((((Number(allPala.pending) / 1e18) * Number(allPala.price)) / 1e18) * Number(exchageRate))
                      .toLocaleString()
                      .split('.')[0] + '원'}
                  </S.AssetText>
                </S.ListItem>
                <S.ListMainItem>
                  <S.TopicText>총 합계</S.TopicText>
                  <S.CountText>
                    {(
                      (Number(allPala.inWallet) +
                        Number(allPala.inLP) +
                        Number(allPala.inSingleStaking) +
                        Number(allPala.inPairStaking) +
                        Number(allPala.pending)) /
                      1e18
                    ).toLocaleString(undefined, { maximumFractionDigits: 2 }) + '개'}
                  </S.CountText>
                  <S.AssetText>
                    {(
                      (((Number(allPala.inWallet) +
                        Number(allPala.inLP) +
                        Number(allPala.inSingleStaking) +
                        Number(allPala.inPairStaking) +
                        Number(allPala.pending)) /
                        1e18) *
                        Number(allPala.price) *
                        Number(exchageRate)) /
                      1e18
                    )
                      .toLocaleString()
                      .split('.')[0] + '원'}
                  </S.AssetText>
                </S.ListMainItem>
              </S.DropDownListContainer>
            )}
          </S.DropDownContainer>
          <br />
          <br />
          <S.RowContainer>
            <S.SubTitleText>모크샤 자산</S.SubTitleText>
            <S.TokenPriceBox>
              <S.TokenImage src={Image.vaultTicker} />
              <S.PriceText>
                {((Number(allPalaNFT.smokshaPrice) * Number(exchageRate)) / 1e18).toLocaleString().split('.')[0] + '원'}
              </S.PriceText>
            </S.TokenPriceBox>
          </S.RowContainer>
          <S.SubContentText>{'FP ' + (Number(mokshaFloorPrice) / 1e18).toLocaleString() + ' KLAY'}</S.SubContentText>
          <S.ContentText>
            {((Number(allPalaNFT.mokshaBalance) * (Number(allPalaNFT.smokshaPrice) * Number(exchageRate))) / 1e18)
              .toLocaleString()
              .split('.')[0] + '원'}
          </S.ContentText>
          <S.SubContentText>{Number(allPalaNFT.mokshaBalance).toLocaleString() + '개'}</S.SubContentText>
          <br />
          <br />
          <S.RowContainer>
            <S.SubTitleText>알랍 자산</S.SubTitleText>
            <S.TokenPriceBox>
              <S.TokenImage src={Image.vaultTicker} />
              <S.PriceText>
                {((Number(allPalaNFT.salapPrice) * Number(exchageRate)) / 1e18).toLocaleString().split('.')[0] + '원'}
              </S.PriceText>
            </S.TokenPriceBox>
          </S.RowContainer>
          <S.SubContentText>{'FP ' + (Number(alapFloorPrice) / 1e18).toLocaleString() + ' KLAY'}</S.SubContentText>
          <S.ContentText>
            {((Number(allPalaNFT.alapBalance) * (Number(allPalaNFT.salapPrice) * Number(exchageRate))) / 1e18)
              .toLocaleString()
              .split('.')[0] + '원'}
          </S.ContentText>
          <S.SubContentText>{Number(allPalaNFT.alapBalance).toLocaleString() + '개'}</S.SubContentText>

          <S.AlapGrid>{alapIds(ownedAlapIds)}</S.AlapGrid>
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

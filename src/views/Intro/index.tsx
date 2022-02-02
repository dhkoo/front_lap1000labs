import React, { useEffect, useState } from 'react';
import Caver from 'caver-js';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { getKlayTopDonators } from 'contracts/donation';
import { gateway } from 'contracts/addrBook';
import * as S from './style';

const Intro = () => {
  const caver = new Caver(gateway.cypress);

  const walletName = useSelector((state: RootState) => state.wallet.name);
  const address = useSelector((state: RootState) => state.wallet.address);

  const Donation = () => {
    const [donationAmount, setDonationAmount] = useState(0);

    const handleChange = (event: any) => setDonationAmount(event.target.value);
    const handleSubmit = (event:any) => {
      event.preventDefault();
      if (walletName !== '' && address !== '') {
        alert("[Not work yet] Donate " + donationAmount);
        //donateKlay(caver, address, contractAddr.Donation, donationAmount);
      } else {
        alert("Need to Login");
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min={0}
          placeholder='후원할 KLAY 수량 입력'
          onChange={handleChange} />
        <button type="submit">Donate</button>
      </form>
    );
  }

  const [donators, setDonators] = useState([]);
  const [tokenIds, setTokenIds] = useState([]);

  useEffect(() => {
    const klayTopDonators = async () => {
      const res = await getKlayTopDonators(caver);
      setDonators(res.donatorList);
      setTokenIds(res.tokenList);
    }
    klayTopDonators();
  }, [])

  return (
    <S.Intro>
      <S.TitleText>INTRO</S.TitleText>
      <S.ContentText>팔라 생태계 커뮤니티 기반 서비스 만들 예정</S.ContentText>
      <S.ContentText>사이드로 진행하는거라 시간있을 때만 진행</S.ContentText>
      <S.TitleText>PLAN</S.TitleText>
      <S.ContentText>
        1. <s>Hall of Lapgend NFT 및 전시관</s> (완료)
      </S.ContentText>
      <S.ContentText>
        <br />
        2. <s>지갑 연결시 소유 Alap 표시</s> (완료)
      </S.ContentText>
      <S.ContentText>
        <br />
        3. 알랍 메신저
      </S.ContentText>
      <S.ContentText>
        <br />
        4. 만물상
      </S.ContentText>
      <S.ContentText>
        <br />
        5. 레전드, 네임드 대사 등록 컨트랙트
      </S.ContentText>
      <S.ContentText>
        <br />
        6. 알랍 투표 기능
      </S.ContentText>
      <S.IntroContainer>
        <S.TitleText>DONATION</S.TitleText>
        <S.ContentText></S.ContentText>
        <S.ContentText>
          0x2eE778B760F1fB93c24c48B9B2992Cd8F3f0c75A
        </S.ContentText>
      <br />
      <Donation />
      <br />
      <br />
      <br />
      </S.IntroContainer>
    </S.Intro>
  );
};

export default Intro;

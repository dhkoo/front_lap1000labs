import React, { useEffect, useState } from 'react';
import Caver from 'caver-js';
import { useSelector } from 'react-redux';

import { RootState } from 'state';
import { donateKlay, getKlayTopDonators } from 'contracts/donation';
import { contractAddr, gateway } from 'contracts/addrBook';

import * as S from './style';

const Intro = () => {
  const caver = new Caver(window.klaytn);

  const walletName = useSelector((state: RootState) => state.wallet.name);
  const address = useSelector((state: RootState) => state.wallet.address);

  const Donation = () => {
    const [donationAmount, setDonationAmount] = useState(0);

    const handleChange = (event: any) => setDonationAmount(event.target.value);
    const handleSubmit = (event: any) => {
      event.preventDefault();
      if (walletName !== '' && address !== '') {
        donateKlay(caver, address, contractAddr.Donation, donationAmount * 10 ** 18);
      } else {
        alert('Need to Login');
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <S.DonationInput type="number" min={0} step={0.01} placeholder="후원할 KLAY 수량" onChange={handleChange} />
        <button type="submit">Donate</button>
      </form>
    );
  };

  const [donators, setDonators] = useState([]);
  const [tokenIds, setTokenIds] = useState([]);

  useEffect(() => {
    const klayTopDonators = async () => {
      const res = await getKlayTopDonators(caver);
      setDonators(res.donatorList);
      setTokenIds(res.tokenList);
    };
    klayTopDonators();
  }, []);

  return (
    <S.Intro>
      <S.TitleText>연구일지</S.TitleText>
      <br />
      <S.ContentText>여행 중 배가 침몰했다.</S.ContentText>
      <S.ContentText>눈을 떠보니 어디선가 이상한 소리가 들린다.</S.ContentText>
      <br />
      <S.ContentText>
        <b>Attention! Attention!</b>
      </S.ContentText>
      <br />
      <S.ContentText>팔라섬이다.</S.ContentText>
      <S.ContentText>여기는 기존의 세계와는 무언가 다르다.</S.ContentText>
      <br />
      <S.ContentText>
        <b>이곳이 궁금하다.</b>
      </S.ContentText>
      <S.IntroContainer>
        <S.TitleText>DONATION</S.TitleText>
        <S.ContentText>후원금은 연구소 발전에 사용될 것입니다.</S.ContentText>
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

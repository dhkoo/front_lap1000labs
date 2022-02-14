import React, { useEffect, useState } from 'react';
import Caver from 'caver-js';
import { useSelector } from 'react-redux';

import { RootState } from 'state';
import { Donator, donateKlay, getKlayTopDonators, getPalaTopDonators, donatePala } from 'contracts/donation';
import { contractAddr, gateway } from 'contracts/addrBook';
import { approve } from 'contracts/erc20';
import { getNumberFromInt256 } from 'utils/number';
import { defaultAlap } from 'constants/images';

import * as S from './style';

const Donation = () => {
  const klaytnCaver = new Caver(window.klaytn);
  const caver = new Caver(gateway.cypress);
  const walletType = useSelector((state: RootState) => state.wallet.walletType);
  const address = useSelector((state: RootState) => state.wallet.address);

  const [klayAmount, setKlayAmount] = useState(0);
  const [klayDonators, setKlayDonators] = useState<Donator[]>([]);
  const [palaAmount, setPalaAmount] = useState(0);
  const [PalaDonators, setPalaDonators] = useState<Donator[]>([]);

  useEffect(() => {
    const GetTopDonators = async () => {
      const klayResult = await getKlayTopDonators(caver);
      setKlayDonators(klayResult);
      const palaResult = await getPalaTopDonators(caver);
      setPalaDonators(palaResult);
    };
    GetTopDonators();
  }, []);

  const onChangeKlayAmount = (event: any) => setKlayAmount(event.target.value);
  const onSubmitKlayDonation = async (event: any) => {
    event.preventDefault();
    if (walletType !== '' && address !== '') {
      await donateKlay(klaytnCaver, address, contractAddr.Donation, klayAmount * 10 ** 18);
    } else {
      alert('지갑을 연결해 주세요.');
    }
  };

  const onChangePalaAmount = (event: any) => setPalaAmount(event.target.value);
  const onSubmitPalaDonation = async (event: any) => {
    event.preventDefault();
    if (walletType !== '' && address !== '') {
      await approve(klaytnCaver, address, contractAddr.pala, contractAddr.Donation, palaAmount * 10 ** 18);
      await donatePala(klaytnCaver, address, contractAddr.Donation, palaAmount * 10 ** 18);
    } else {
      alert('지갑을 연결해 주세요.');
    }
  };

  const viewRank = (donators: Donator[], unit: string) => {
    if (donators.length !== 0) {
      donators.sort((a, b) => {
        return parseInt(b.amount) - parseInt(a.amount);
      });
      return donators.map((donator: Donator, index: number) => {
        return (
          <S.DonationRankItem key={donator.alapId}>
            <S.DonationRankProfile>
              <S.Mint>
                <b>#{index + 1}</b>
              </S.Mint>
              <S.DonationRankAlapImage
                src={
                  donator.alapId === 0
                    ? defaultAlap
                    : 'https://alap.s3.ap-northeast-2.amazonaws.com/alap-'
                        .concat(donator.alapId.toString())
                        .concat('.png')
                }
              />
              {donator.addr.substring(0, 6)}...{donator.addr.substring(donator.addr.length - 4, donator.addr.length)}
            </S.DonationRankProfile>
            <S.Purple>
              {getNumberFromInt256(donator.amount, 18).toLocaleString()}
              {' '.concat(unit)}
            </S.Purple>
          </S.DonationRankItem>
        );
      });
    }
  };

  return (
    <>
      <S.TitleText>DONATION</S.TitleText>
      <S.ContentText>
        <br />
        바닥부터 하나씩 만들어나가야 한다. <br />
        <br />
        팔라랜드의 무궁한 발전을 위해 <br />
        많은 사랑과 후원이 필요해 보인다. <br />
        <br />
      </S.ContentText>
      <S.DonationForm onSubmit={onSubmitKlayDonation}>
        <S.DonationInput type="number" min={0} step={0.01} placeholder="후원 수량" onChange={onChangeKlayAmount} />
        <S.DonationButton type="submit">KLAY 후원하기</S.DonationButton>
      </S.DonationForm>
      {viewRank(klayDonators, 'KLAY')}
      <S.DonationForm onSubmit={onSubmitPalaDonation}>
        <S.DonationInput type="number" min={0} step={0.01} placeholder="후원 수량" onChange={onChangePalaAmount} />
        <S.DonationButton type="submit">PALA 후원하기</S.DonationButton>
      </S.DonationForm>
      {viewRank(PalaDonators, 'PALA')}
    </>
  );
};

export default Donation;

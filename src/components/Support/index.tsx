import React, { useEffect, useState } from 'react';
import Caver from 'caver-js';
import { useSelector } from 'react-redux';

import { RootState } from 'state';
import { Donator, donateKlay, getKlayTopDonators, getPalaTopDonators, donatePala } from 'contracts/donation';
import { getNames, NameInfo } from 'contracts/nameBook';
import { contractAddr, gateway } from 'contracts/addrBook';
import { approve } from 'contracts/erc20';
import { getNumberFromInt256 } from 'utils/number';
import { defaultAlap } from 'constants/images';

import * as S from './style';

const Support = () => {
  const klaytnCaver = new Caver(window.klaytn);
  const caver = new Caver(gateway.cypress);
  const walletType = useSelector((state: RootState) => state.wallet.walletType);
  const address = useSelector((state: RootState) => state.wallet.address);

  const [klayAmount, setKlayAmount] = useState(0);
  const [klayDonators, setKlayDonators] = useState<Donator[]>([]);
  const [palaAmount, setPalaAmount] = useState(0);
  const [PalaDonators, setPalaDonators] = useState<Donator[]>([]);
  const [klayDonatorsName, setKlayDonatorsName] = useState<NameInfo[]>([]);
  const [palaDonatorsName, setPalaDonatorsName] = useState<NameInfo[]>([]);

  useEffect(() => {
    const GetTopDonatorsInfo = async () => {
      const klayResult = await getKlayTopDonators(caver);
      const palaResult = await getPalaTopDonators(caver);

      klayResult.sort((a: { amount: string }, b: { amount: string }) => {
        return parseInt(b.amount) - parseInt(a.amount);
      });
      palaResult.sort((a: { amount: string }, b: { amount: string }) => {
        return parseInt(b.amount) - parseInt(a.amount);
      });
      const list: string[] = [];
      klayResult.forEach((donator: Donator) => {
        list.push(donator.addr);
      });
      palaResult.forEach((donator: Donator) => {
        list.push(donator.addr);
      });
      const nameInfos = await getNames(caver, list);
      setKlayDonatorsName(nameInfos.slice(0, klayResult.length));
      setPalaDonatorsName(nameInfos.slice(klayResult.length, klayResult.length + palaResult.length));

      setKlayDonators(klayResult);
      setPalaDonators(palaResult);
    };
    GetTopDonatorsInfo();
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
      await approve(klaytnCaver, address, contractAddr.pala, contractAddr.Support, palaAmount * 10 ** 18);
      await donatePala(klaytnCaver, address, contractAddr.Donation, palaAmount * 10 ** 18);
    } else {
      alert('지갑을 연결해 주세요.');
    }
  };

  const viewRank = (donators: Donator[], nameInfos: NameInfo[], unit: string) => {
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
                  donator.alapId == 0
                    ? defaultAlap
                    : 'https://alap.s3.ap-northeast-2.amazonaws.com/alap-'
                        .concat(donator.alapId.toString())
                        .concat('.png')
                }
              />
              {nameInfos[index].name === ''
                ? donator.addr.substring(0, 6) +
                  '...' +
                  donator.addr.substring(donator.addr.length - 4, donator.addr.length)
                : nameInfos[index].name}
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
    <S.DonationFrame>
      <S.DonationBundle>
        <S.SubTitleText>KLAY TOP 10</S.SubTitleText>
        <S.DonationForm onSubmit={onSubmitKlayDonation}>
          <S.DonationInput type="number" min={0} step={0.01} placeholder="후원 수량" onChange={onChangeKlayAmount} />
          <S.DonationButton type="submit">KLAY 후원하기</S.DonationButton>
        </S.DonationForm>
        {viewRank(klayDonators, klayDonatorsName, 'KLAY')}
      </S.DonationBundle>
      <S.DonationBundle>
        <S.SubTitleText>PALA TOP 10</S.SubTitleText>
        <S.DonationForm onSubmit={onSubmitPalaDonation}>
          <S.DonationInput type="number" min={0} step={0.01} placeholder="후원 수량" onChange={onChangePalaAmount} />
          <S.DonationButton type="submit">PALA 후원하기</S.DonationButton>
        </S.DonationForm>
        {viewRank(PalaDonators, palaDonatorsName, 'PALA')}
      </S.DonationBundle>
    </S.DonationFrame>
  );
};

export default Support;

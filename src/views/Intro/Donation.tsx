import React, { useEffect, useState } from 'react';
import Caver from 'caver-js';
import { useSelector } from 'react-redux';

import { RootState } from 'state';
import { donateKlay, getKlayTopDonators } from 'contracts/donation';
import { contractAddr, gateway } from 'contracts/addrBook';

import * as S from './style';

const Donation = () => {
  const caver = new Caver(window.klaytn);
  const walletName = useSelector((state: RootState) => state.wallet.name);
  const address = useSelector((state: RootState) => state.wallet.address);

  const [donationAmount, setDonationAmount] = useState(0);
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

export default Donation;

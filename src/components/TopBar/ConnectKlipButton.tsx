import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Caver from 'caver-js';
import { prepare } from 'klip-sdk';

import { gateway } from 'contracts/addrBook';
import * as walletActions from 'state/wallet';
import KlipRequestListener from 'components/KlipRequestListner';
import { getNames } from 'contracts/nameBook';

import * as Image from 'constants/images';
import * as S from './style';

const ConnectKlipButton: React.FC<{ setImageUrl: (url: string) => void }> = ({ setImageUrl }) => {
  const dispatch = useDispatch();
  const caver = new Caver(gateway.cypress);

  const [klipRequestKey, setKlipRequestKey] = useState('');

  const onClickKlip = async () => {
    try {
      const bappName = '랍천 연구소';
      const res = await prepare.auth({ bappName });
      if (res.err) {
        // console.log('error auth');
        return;
      }
      if (res.request_key) {
        setKlipRequestKey(res.request_key);
      }
    } catch (error) {
      // console.error('error', error);
    }
  };

  const connectSuccess = async (klipResult: any) => {
    const address = klipResult.klaytn_address;
    const names = await getNames(caver, [address]);
    if (address) dispatch(walletActions.setWallet('klip', address, names[0].name));
  };

  const connectFailed = () => {
    dispatch(walletActions.setWallet('', '', ''));
  };

  return (
    <S.ConnectWalletButton onClick={onClickKlip}>
      <S.KlipButtonImage src={Image.klipLogo} />
      <KlipRequestListener
        requestKey={klipRequestKey}
        duration={150}
        completeCallback={connectSuccess}
        cancelCallback={connectFailed}
      />
    </S.ConnectWalletButton>
  );
};

export default ConnectKlipButton;

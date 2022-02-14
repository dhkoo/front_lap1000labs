import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { prepare } from 'klip-sdk';

import * as walletAction from 'state/wallet';

import * as S from './style';

declare global {
  interface Window {
    klaytn: any;
  }
}

const ConnectWalletButton = () => {
  const dispath = useDispatch();
  const [klipRequestKey, setKlipRequestKey] = useState('');

  const onClickKaikas = async () => {
    try {
      const bappName = process.env.REACT_APP_PROJECT;
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

  return <S.WalletButton onClick={onClickKaikas}>클립 연결</S.WalletButton>;
};

export default ConnectWalletButton;

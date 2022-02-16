import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { prepare } from 'klip-sdk';

import * as walletAction from 'state/wallet';

import * as Image from 'constants/images';
import * as S from './style';

declare global {
  interface Window {
    klaytn: any;
  }
}

const ConnectKlipButton = () => {
  const dispath = useDispatch();
  const [klipRequestKey, setKlipRequestKey] = useState('');

  const onClickKaikas = async () => {
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

  return (
    <S.ConnectWalletButton onClick={onClickKaikas}>
      <S.KlipButtonImage src={Image.klipLogo} />
    </S.ConnectWalletButton>
  );
};

export default ConnectKlipButton;

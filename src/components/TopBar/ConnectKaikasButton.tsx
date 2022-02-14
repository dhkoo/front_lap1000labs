import React from 'react';
import { useDispatch } from 'react-redux';

import * as walletAction from 'state/wallet';

import * as S from './style';

declare global {
  interface Window {
    klaytn: any;
  }
}

const ConnectWalletButton = () => {
  const dispath = useDispatch();

  const onClickKaikas = async () => {
    const { klaytn } = window;
    try {
      if (!klaytn) {
        console.log(`Need to install Kaikas`);
      } else {
        const accounts = await klaytn.enable();
        const address = accounts[0];
        if (address) dispath(walletAction.setWallet('kaikas', address));
      }
    } catch (err) {
      console.log(`Kaikas connection Error ${err}`);
    }
  };

  return <S.WalletButton onClick={onClickKaikas}>카이카스 연결</S.WalletButton>;
};

export default ConnectWalletButton;

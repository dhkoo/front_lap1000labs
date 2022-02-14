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

  const DcentDeepLinkBaseUrl = 'https://link.dcentwallet.com/DAppBrowser/?url=';
  const linkUrl = encodeURIComponent('https://lap1000.xyz');

  const onClickKaikas = async () => {
    const { klaytn } = window;
    try {
      if (!klaytn) {
        window.location.href = DcentDeepLinkBaseUrl.concat(linkUrl).concat('&network=').concat('klaytn-mainnet');
      } else if (klaytn?.isDcentWallet === true) {
        const accounts = await klaytn.enable();
        const address = accounts[0];
        if (address) dispath(walletAction.setWallet('dcent', address));
      }
    } catch (err) {
      console.log(`dcent connection Error: ${err}`);
    }
  };

  return <S.WalletButton onClick={onClickKaikas}>디센트 연결</S.WalletButton>;
};

export default ConnectWalletButton;

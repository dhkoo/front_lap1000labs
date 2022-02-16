import React from 'react';
import { useDispatch } from 'react-redux';

import * as walletAction from 'state/wallet';

import * as Image from 'constants/images';
import * as S from './style';

declare global {
  interface Window {
    klaytn: any;
  }
}

const ConnectDcentButton: React.FC<{ setImageUrl: (url: string) => void }> = ({ setImageUrl }) => {
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

  return (
    <S.ConnectWalletButton onClick={onClickKaikas}>
      <S.ButtonImage src={Image.dcentLogo} />
    </S.ConnectWalletButton>
  );
};

export default ConnectDcentButton;

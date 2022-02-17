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

const ConnectKaikasButton: React.FC<{ setImageUrl: (url: string) => void }> = ({ setImageUrl }) => {
  const dispath = useDispatch();

  const onClickKaikas = async () => {
    const { klaytn } = window;
    try {
      if (!klaytn) {
        console.log(`Need to install Kaikas`);
      } else {
        setImageUrl(Image.kaikasLogo);
        const accounts = await klaytn.enable();
        const address = accounts[0];
        if (address) dispath(walletAction.setWallet('kaikas', address));
      }
    } catch (err) {
      console.log(`Kaikas connection Error ${err}`);
    }
  };

  return (
    <S.ConnectWalletButton onClick={onClickKaikas}>
      <S.ButtonImage src={Image.kaikasLogo} />
    </S.ConnectWalletButton>
  );
};

export default ConnectKaikasButton;

import React from 'react';
import Caver from 'caver-js';
import { useDispatch } from 'react-redux';

import { getDcentDeepLink } from 'constants/wallet';
import { gateway } from 'contracts/addrBook';
import * as walletActions from 'state/wallet';
import * as TxActions from 'state/transaction';
import { getNamesOf, representativeAlapIdOf } from 'contracts/viewer';

import * as Image from 'constants/images';
import * as S from './style';

declare global {
  interface Window {
    klaytn: any;
  }
}

const ConnectDcentButton: React.FC<{ setImageUrl: (url: string) => void }> = ({ setImageUrl }) => {
  const caver = new Caver(gateway.cypress);
  const dispatch = useDispatch();

  const onClickDcent = async () => {
    const { klaytn } = window;
    try {
      if (!klaytn) {
        window.location.href = getDcentDeepLink();
      } else if (klaytn?.isDcentWallet === true) {
        const accounts = await klaytn.enable();
        const address = accounts[0];
        const names = await getNamesOf(caver, [address]);
        const id = await representativeAlapIdOf(caver, address);
        if (address) {
          dispatch(walletActions.setWallet('dcent', address, names[0].name, id));
          dispatch(TxActions.toggleFlag());
        }
      }
    } catch (err) {
      console.log(`dcent connection Error: ${err}`);
    }
  };

  return (
    <S.ConnectWalletButton onClick={onClickDcent}>
      <S.ButtonImage src={Image.dcentLogo} />
    </S.ConnectWalletButton>
  );
};

export default ConnectDcentButton;

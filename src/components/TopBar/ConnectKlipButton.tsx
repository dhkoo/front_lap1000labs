import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Caver from 'caver-js';
import { prepare } from 'klip-sdk';

import * as Wallet from 'constants/wallet';
import { gateway } from 'contracts/addrBook';
import * as walletActions from 'state/wallet';
import { getNamesOf } from 'contracts/viewer';
import { pollingKlipRequest } from 'utils/pollingKlipRequest';

import * as Image from 'constants/images';
import * as S from './style';

const ConnectKlipButton: React.FC<{ setImageUrl: (url: string) => void }> = ({ setImageUrl }) => {
  const dispatch = useDispatch();
  const caver = new Caver(gateway.cypress);

  const onClickKlip = async () => {
    try {
      const bappName = Wallet.AppName;
      const res = await prepare.auth({ bappName });
      if (res.err) {
        // console.log('error auth');
        return;
      }
      if (res.request_key) {
        await pollingKlipRequest(res.request_key, 150, connectSuccess, connectFailed);
      }
    } catch (error) {
      // console.error('error', error);
    }
  };

  const connectSuccess = async (klipResult: any) => {
    const address = klipResult.klaytn_address;
    const names = await getNamesOf(caver, [address]);
    if (address) dispatch(walletActions.setWallet('klip', address, names[0].name));
  };

  const connectFailed = () => {
    dispatch(walletActions.setWallet('', '', ''));
  };

  return (
    <S.ConnectWalletButton onClick={onClickKlip}>
      <S.KlipButtonImage src={Image.klipLogo} />
    </S.ConnectWalletButton>
  );
};

export default ConnectKlipButton;

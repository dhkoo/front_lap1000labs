import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ConnectWalletButton from './ConnectWalletButton';
import ConnectedWalletButton from './ConnectedWalletButton';
import { getUserAlapIds } from 'contracts/nft';
import * as S from './style';
import { Lap1000Logo } from 'constants/images';
import Caver from 'caver-js';

import { RootState } from 'state';

const TopBar = () => {
  //const caver = new Caver('https://klaytn-en.sixnetwork.io:8651/');
  const walletName = useSelector((state: RootState) => state.wallet.name);
  const address = useSelector((state: RootState) => state.wallet.address);
  const [test, setTest] = useState<String>();

  const isLoggedIn = (): boolean => {
    return walletName !== '' && address !== '';
  };

  useEffect(() => {
    const getAlapId = async () => {
      setTest(address);
    };
    getAlapId();
  }, [address]);

  return (
    <>
      <S.TopBar>
        <S.Lap1000Logo src={Lap1000Logo} />
        {isLoggedIn() ? <ConnectedWalletButton name={walletName} address={address} /> : <ConnectWalletButton />}
      </S.TopBar>
    </>
  );
};

export default TopBar;

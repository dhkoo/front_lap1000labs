import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ConnectWalletButton from './ConnectWalletButton';
import ConnectedWalletButton from './ConnectedWalletButton';
import * as S from './style';
import { Lap1000Logo } from 'constants/images';
import Caver from 'caver-js';
import { getUserAlapIds } from 'contracts/nft';

import { RootState } from 'state';

const TopBar = () => {
  const caver = new Caver('https://public-node-api.klaytnapi.com/v1/cypress');
  const walletName = useSelector((state: RootState) => state.wallet.name);
  const address = useSelector((state: RootState) => state.wallet.address);
  const [imageURL, setImageURL] = useState<string>();

  const isLoggedIn = (): boolean => {
    return walletName !== '' && address !== '';
  };

  useEffect(() => {
    const getAlapId = async () => {
      let ids = [];
      if (isLoggedIn()) {
        ids = await getUserAlapIds(caver, address, 0, 10);
        if (ids.length > 0) {
          setImageURL("https://alap.s3.ap-northeast-2.amazonaws.com/alap-"+ids[0]+".png");
        }
      }
    };
    getAlapId();
  }, [address]);

  return (
    <>
      <S.TopBar>
        <S.Lap1000Logo src={Lap1000Logo} />
        <S.ProfileWrapper>
          {isLoggedIn() ? <S.AlapImage src={imageURL} /> : <></>}
          {isLoggedIn() ? <ConnectedWalletButton name={walletName} address={address} /> : <ConnectWalletButton />}
        </S.ProfileWrapper>
      </S.TopBar>
    </>
  );
};

export default TopBar;

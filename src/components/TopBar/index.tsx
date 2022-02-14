import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Caver from 'caver-js';

import { RootState } from 'state';
import { getUserAlapIds } from 'contracts/nft';
import { gateway } from 'contracts/addrBook';
import ConnectKaikasButton from './ConnectKaikasButton';
import ConnectDcentButton from './ConnectDcentButton';
import ConnectedWalletButton from './ConnectedWalletButton';

import { Lap1000Logo } from 'constants/images';
import { defaultAlap } from 'constants/images';
import * as S from './style';

const TopBar = () => {
  const caver = new Caver(gateway.cypress);
  const walletName = useSelector((state: RootState) => state.wallet.walletType);
  const address = useSelector((state: RootState) => state.wallet.address);
  const [imageURL, setImageURL] = useState<string>();

  const isLoggedIn = (): boolean => {
    return walletName !== '' && address !== '';
  };

  useEffect(() => {
    const displayAlap = async () => {
      let ids = [];
      if (isLoggedIn()) {
        ids = await getUserAlapIds(caver, address, 0, 10);
        if (ids.length > 0) {
          setImageURL('https://alap.s3.ap-northeast-2.amazonaws.com/alap-' + ids[0] + '.png');
        } else {
          setImageURL(defaultAlap);
        }
      }
    };
    displayAlap();
  }, [address]);

  return (
    <>
      <S.TopBar>
        <S.LogoButton to="/">
          <S.Lap1000Logo src={Lap1000Logo} />
        </S.LogoButton>
        <S.ProfileWrapper>
          {isLoggedIn() ? (
            <>
              <S.AlapImage src={imageURL} />
              <ConnectedWalletButton />
            </>
          ) : (
            <>
              <ConnectKaikasButton />
              <ConnectDcentButton />
              {/* <ConnectKlipButton /> */}
            </>
          )}
        </S.ProfileWrapper>
      </S.TopBar>
    </>
  );
};

export default TopBar;

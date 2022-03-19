import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Caver from 'caver-js';
import { isMobile } from 'react-device-detect';

import { RootState } from 'state';
import { representativeAlapIdOf } from 'contracts/viewer';
import { gateway } from 'contracts/addrBook';
import ConnectKaikasButton from './ConnectKaikasButton';
import ConnectDcentButton from './ConnectDcentButton';
import ConnectKlipButton from './ConnectKlipButton';
import ConnectedWalletButton from './ConnectedWalletButton';

import * as Image from 'constants/images';
import * as S from './style';

const Profile = () => {
  const caver = new Caver(gateway.cypress);
  const walletType = useSelector((state: RootState) => state.wallet.walletType);
  const address = useSelector((state: RootState) => state.wallet.address);
  const [imageUrl, setImageUrl] = useState<string>(Image.maina);

  const isLoggedIn = (): boolean => {
    return walletType !== '' && address !== '';
  };

  useEffect(() => {
    const displayAlap = async () => {
      let id;
      if (isLoggedIn()) {
        id = await representativeAlapIdOf(caver, address);
        if (id != 0) {
          setImageUrl('https://alap.s3.ap-northeast-2.amazonaws.com/alap-' + id + '.png');
        } else {
          setImageUrl(Image.defaultAlap);
        }
      }
    };
    displayAlap();
  }, [address]);

  return (
    <S.Profile>
      {isLoggedIn() ? (
        <>
          <S.ProfileImage src={imageUrl} />
          <ConnectedWalletButton />
        </>
      ) : (
        <>
          <S.ProfileImage src={imageUrl} />
          <S.ConnectWalletButtonWrapper>
            <ConnectKaikasButton setImageUrl={setImageUrl} />
            {isMobile && <ConnectDcentButton setImageUrl={setImageUrl} />}
            {isMobile && <ConnectKlipButton setImageUrl={setImageUrl} />}
          </S.ConnectWalletButtonWrapper>
        </>
      )}
    </S.Profile>
  );
};

export default Profile;

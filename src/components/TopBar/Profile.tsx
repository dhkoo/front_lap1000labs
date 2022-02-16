import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Caver from 'caver-js';

import { RootState } from 'state';
import { getUserAlapIds } from 'contracts/nft';
import { gateway } from 'contracts/addrBook';
import ConnectKaikasButton from './ConnectKaikasButton';
import ConnectDcentButton from './ConnectDcentButton';
import ConnectKlipButton from './ConnectKlipButton';
import ConnectedWalletButton from './ConnectedWalletButton';

import { defaultAlap } from 'constants/images';
import * as S from './style';

const Profile = () => {
  const caver = new Caver(gateway.cypress);
  const walletName = useSelector((state: RootState) => state.wallet.walletType);
  const address = useSelector((state: RootState) => state.wallet.address);
  const [imageUrl, setImageUrl] = useState<string>();

  const isLoggedIn = (): boolean => {
    return walletName !== '' && address !== '';
  };

  useEffect(() => {
    const displayAlap = async () => {
      let ids = [];
      if (isLoggedIn()) {
        ids = await getUserAlapIds(caver, address, 0, 10);
        if (ids.length > 0) {
          setImageUrl('https://alap.s3.ap-northeast-2.amazonaws.com/alap-' + ids[0] + '.png');
        } else {
          setImageUrl(defaultAlap);
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
            <ConnectDcentButton setImageUrl={setImageUrl} />
            {/* <ConnectKlipButton /> */}
          </S.ConnectWalletButtonWrapper>
        </>
      )}
    </S.Profile>
  );
};

export default Profile;

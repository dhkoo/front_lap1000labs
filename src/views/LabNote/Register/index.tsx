import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'state';
import NameBook from 'components/NameBook';
import AlapRegister from 'components/AlapRegistration';

import * as S from './style';

const MyPage = () => {
  const walletType = useSelector((state: RootState) => state.wallet.walletType);
  const address = useSelector((state: RootState) => state.wallet.address);

  const isLoggedIn = (): boolean => {
    return walletType !== '' && address !== '';
  };

  return (
    <S.MyPage>
      {isLoggedIn() ? (
        <>
          <S.TitleText>이름 등록</S.TitleText>
          <NameBook />
          <S.TitleText>대표 ALAP 등록</S.TitleText>
          <br />
          <AlapRegister />
        </>
      ) : (
        <S.ContentText>
          <br />
          <br />
          <br />
          지갑 연결이 필요합니다.
        </S.ContentText>
      )}
    </S.MyPage>
  );
};

export default MyPage;

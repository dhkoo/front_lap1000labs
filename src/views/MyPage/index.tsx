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
          <S.TitleText>Naming</S.TitleText>
          <S.ContentText>
            <br />
            "내가 그의 이름을 불러주었을 때, <br />
            그는 나에게로 와서 <br />
            꽃이 되었다." <br />
            <br />
          </S.ContentText>
          <NameBook />
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

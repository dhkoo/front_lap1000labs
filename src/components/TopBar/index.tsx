import React from 'react';
import { useSelector } from 'react-redux';

import Profile from './Profile';

import { Lap1000Logo } from 'constants/images';
import { RootState } from 'state';
import MenuBar from 'components/MenuBar';

import * as S from './style';

const TopBar = () => {
  const widthLevel = useSelector((state: RootState) => state.window.widthLevel);

  const scrollToTop = () => {
    document.getElementById('body')?.scrollTo(0, 0);
  };

  return (
    <S.TopBar>
      <S.LogoButton to="/" onClick={scrollToTop}>
        <S.Lap1000Logo src={Lap1000Logo} />
        랍천 연구소
      </S.LogoButton>
      {widthLevel >= 720 && <MenuBar />}
      <Profile />
    </S.TopBar>
  );
};

export default TopBar;

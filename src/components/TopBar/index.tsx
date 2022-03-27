import React from 'react';
import { useSelector } from 'react-redux';

import Profile from './Profile';

import { Lap1000Logo } from 'constants/images';
import { RootState } from 'state';
import MenuBar from 'components/MenuBar';

import * as S from './style';

const TopBar = () => {
  const widthLevel = useSelector((state: RootState) => state.window.widthLevel);

  return (
    <S.TopBar>
      <S.LogoButton to="/">
        <S.Lap1000Logo src={Lap1000Logo} />
      </S.LogoButton>
      {widthLevel >= 720 && <MenuBar />}
      <Profile />
    </S.TopBar>
  );
};

export default TopBar;

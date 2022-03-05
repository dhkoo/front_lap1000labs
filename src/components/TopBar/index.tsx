import React from 'react';

import Profile from './Profile';

import { Lap1000Logo } from 'constants/images';
import * as S from './style';

const TopBar = () => {
  return (
    <S.TopBar>
      <S.LogoButton to="/">
        <S.Lap1000Logo src={Lap1000Logo} />
      </S.LogoButton>
      <Profile />
    </S.TopBar>
  );
};

export default TopBar;

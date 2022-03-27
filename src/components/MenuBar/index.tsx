import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'state';

import * as S from './style';

const MenuBar = () => {
  const widthLevel = useSelector((state: RootState) => state.window.widthLevel);

  const scrollToTop = () => {
    document.getElementById('body')?.scrollTo(0, 0);
  };

  return (
    <S.MenuBar>
      {widthLevel < 720 && (
        <S.MenuItem to="" onClick={scrollToTop}>
          홈
        </S.MenuItem>
      )}
      <S.MenuItem to="LabNote/1" onClick={scrollToTop}>
        전당
      </S.MenuItem>
      {/* <S.MenuItem to="2">방명록</S.MenuItem> */}
      <S.MenuItem to="LabNote/3" onClick={scrollToTop}>
        통신 보안
      </S.MenuItem>
      <S.MenuItem to="LabNote/" onClick={scrollToTop}>
        연구 노트
      </S.MenuItem>
      <S.MenuItem to="MyPage" onClick={scrollToTop}>
        마이 페이지
      </S.MenuItem>
    </S.MenuBar>
  );
};

export default MenuBar;

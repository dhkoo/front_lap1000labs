import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';

import TopBar from 'components/TopBar';
import Intro from 'views/Intro';
import Hall from 'views/Hall';
import Messenger from 'views/Messenger';
import Store from 'views/Store';

import * as S from './style';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <S.Main>
        <TopBar />
        <BrowserRouter>
          <S.MenuContainer>
            <S.MenuItem to="/">소개</S.MenuItem>
            <S.MenuItem to="/hall">전시관</S.MenuItem>
            <S.MenuItem to="/messenger">메신저</S.MenuItem>
            <S.MenuItem to="/store">만물상</S.MenuItem>
          </S.MenuContainer>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/hall" element={<Hall />} />
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </BrowserRouter>
      </S.Main>
    </>
  );
};

export default App;

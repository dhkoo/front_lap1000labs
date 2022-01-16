import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as S from './style';

import TopBar from 'components/TopBar';
import Intro from 'views/Intro';
import Hall from 'views/Hall';

const Main = () => {
  return (
    <S.Main>
      <TopBar />
      <BrowserRouter>
        <Link to="/">
          <S.ContentText>소개</S.ContentText>
        </Link>
        <Link to="/hall">
          <S.ContentText>전시관</S.ContentText>
        </Link>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/hall" element={<Hall />} />
        </Routes>
      </BrowserRouter>
    </S.Main>
  );
};

export default Main;

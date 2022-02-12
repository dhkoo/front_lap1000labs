import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';

import TopBar from 'components/TopBar';
import Intro from 'views/Intro';
import LabNote from 'views/LabNote';

import * as S from './style';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <S.Main>
          <TopBar />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/LabNote/*" element={<LabNote />} />
          </Routes>
        </S.Main>
      </BrowserRouter>
    </>
  );
};

export default App;

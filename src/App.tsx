import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'GlobalStyle';

import TopBar from 'components/TopBar';
import Intro from 'views/Intro';
import LabNote from 'views/LabNote';

import theme from './theme';
import * as S from './style';

const App = () => {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;

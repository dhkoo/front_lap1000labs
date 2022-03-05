import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'GlobalStyle';

import TopBar from 'components/TopBar';
import Intro from 'views/Intro';
import LabNote from 'views/LabNote';

import theme from './theme';
import * as S from './style';

const App = () => {
  useEffect(() => {
    ReactGA.initialize("G-WMNB5FJNMF");
    ReactGA.set({page: window.location.pathname});
    ReactGA.pageview(window.location.pathname + window.location.search);
   }, []);

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

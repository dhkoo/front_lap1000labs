import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { GlobalStyle } from 'GlobalStyle';
import ReactGA from 'react-ga';

import { RootState } from 'state';
import ResizeHandler from 'components/ResizeHandler';
import TopBar from 'components/TopBar';
import MenuBar from 'components/MenuBar';
import Intro from 'views/Intro';
import LabNote from 'views/LabNote';
import MyPage from 'views/MyPage';

import theme from './theme';
import * as S from './style';

const App = () => {
  const widthLevel = useSelector((state: RootState) => state.window.widthLevel);

  useEffect(() => {
    ReactGA.initialize('G-WMNB5FJNMF');
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ResizeHandler print={process.env.NODE_ENV !== 'production'} />
      <BrowserRouter>
        <S.TopBarSection>
          <TopBar />
        </S.TopBarSection>
        <S.Body>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/LabNote/*" element={<LabNote />} />
            <Route path="/MyPage/*" element={<MyPage />} />
          </Routes>
        </S.Body>
        {widthLevel < 720 && (
          <S.BottomBarSection>
            <MenuBar />
          </S.BottomBarSection>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

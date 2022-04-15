import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    position: relative;
    box-sizing: border-box;
    margin: 0;

    font-family: Pretendard, NotoSans KR, apple-system, BlinkMacSystemFont, 나눔스퀘어, 'Helvetica Neue', Helvetica, Arial, sans-serif, 'East Sea Dokdo';

    overflow-x: hidden;
    overflow-y: overlay;

      // for webkit
  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 2px solid transparent;
    box-shadow: inset 0 0 5px 5px #FFFFFF60;
  }
  // for firefox
  scrollbar-width: thin;
  scrollbar-color: #FFFFFF60 transparent;

    background: black;
  }
`;

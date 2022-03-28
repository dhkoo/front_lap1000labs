import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Root = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScrollableDiv = styled.div`
  overflow-y: overlay;
  overflow-x: hidden;
  // for webkit
  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 2px solid transparent;
    box-shadow: inset 0 0 5px 5px ${(props) => props.theme.color.dimmedFont};
  }
  // for firefox
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.color.dimmedFont} transparent;
`;

export const TopBarSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 -1px inset ${(props) => props.theme.color.dimmedFont};

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Body = styled(ScrollableDiv)`
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  padding: 10px 0;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BottomBarSection = styled(ScrollableDiv)`
  box-sizing: border-box;
  height: 50px;
  padding: 5px 0;
  width: 100%;

  display: flex;
`;

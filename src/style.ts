import styled from 'styled-components';

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
  position: fixed;
  top: 0;
  box-sizing: border-box;
  width: 100%;
  heigth: 70px;
  box-shadow: 0 -1px inset ${(props) => props.theme.color.dimmedFont};

  display: flex;
  flex-direction: row;
  justify-content: center;

  background: black;
`;

export const Body = styled(ScrollableDiv)`
  box-sizing: border-box;
  width: 100%;
  margin: 70px 0 50px 0;
  padding: 10px 0;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BottomBarSection = styled(ScrollableDiv)`
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
  height: 50px;
  padding: 5px 0;
  width: 100%;

  display: flex;

  background: #0000009f;
`;

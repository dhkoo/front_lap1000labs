import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 10px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;
  overflow-y: auto;
  background: black;
`;

export const MenuContainer = styled.div`
  box-sizing: border-box;
  margin-top: 10px;
  width: 300px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const MenuItem = styled(NavLink)`
  box-sizing: border-box;
  flex: 1;
  border-radius: 5px;

  font-family: Pretendard;
  font-style: oblique;
  font-weight: 500;
  font-size: 20px;
  color: white;
  text-align: center;
  text-decoration: none;

  &.active {
    background: #222222;
  }
`;

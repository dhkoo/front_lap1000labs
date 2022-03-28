import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuBar = styled.div`
  box-sizing: border-box;
  height: 100%;

  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`;

export const MenuItem = styled(NavLink)`
  box-sizing: border-box;
  height: calc(100% - 4px);
  margin: 2px;
  border-radius: 10px;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'East Sea Dokdo';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: white;
  text-align: center;
  text-decoration: none;
  word-break: keep-all;

  background: #222222;
  &.active {
    color: black;
    background: ${(props) => props.theme.color.main};
  }
`;

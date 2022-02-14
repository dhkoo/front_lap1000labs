import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TopBar = styled.div`
  box-sizing: border-box;
  width: 330px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  box-sizing: border-box;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const LogoButton = styled(NavLink)`
  box-sizing: border-box;
  border-radius: 5px;
`;

export const Lap1000Logo = styled.img`
  box-sizing: border-box;
  height: 120px;
  border: double #74ecd2;
  border-radius: 10px;
`;

export const AlapImage = styled.img`
  box-sizing: border-box;
  height: 85px;
  border-radius: 10px;
  border: 1px solid #74ecd2;
`;

export const WalletButton = styled.button`
  box-sizing: border-box;
  height: 25px;
  width: 110px;
  border-radius: 10px;
  border: 1px solid #74ecd2;

  color: #74ecd2;

  background: black;
  cursor: pointer;
`;

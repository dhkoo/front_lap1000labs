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

// Profile

export const Profile = styled.div`
  box-sizing: border-box;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImage = styled.img`
  box-sizing: border-box;
  height: 100px;
  width: 100px;
  border-radius: 10px;
  border: 1px solid #74ecd2;
`;

export const ConnectedWalletButton = styled.button`
  box-sizing: border-box;
  height: 25px;
  width: 100px;
  border-radius: 10px;
  border: 1px solid #74ecd2;

  color: #74ecd2;

  background: black;
  cursor: pointer;
`;

export const ConnectWalletButtonWrapper = styled.div`
  box-sizing: border-box;
  height: 25px;
  width: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ConnectWalletButton = styled.button`
  box-sizing: border-box;
  height: 25px;
  width: 33px;
  border-radius: 10px;
  border: 1px solid #74ecd2;

  display: flex;
  justify-content: center;
  align-items: center;

  background: black;
  cursor: pointer;
`;

export const ButtonImage = styled.img`
  box-sizing: border-box;
  height: 15px;
`;

export const KlipButtonImage = styled.img`
  box-sizing: border-box;
  width: 22px;
  filter: invert(1);
`;

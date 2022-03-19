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
  height: 100%;
  border-radius: 10px;
  border: double ${(props) => props.theme.color.main};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Lap1000Logo = styled.img`
  box-sizing: border-box;
  height: 120px;
  border-radius: 10px;
`;

// Profile

export const Profile = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImage = styled.img`
  box-sizing: border-box;
  height: 100px;
  width: 100px;
  border-radius: 10px 10px 0 0;
  border: 1.5px solid ${(props) => props.theme.color.sub};
`;

export const ConnectedWalletButton = styled.button`
  box-sizing: border-box;
  height: 25px;
  width: 100px;
  border-radius: 0 0 10px 10px;
  border: 1.5px solid ${(props) => props.theme.color.sub};

  white-space: pre;
  color: ${(props) => props.theme.color.sub};

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
  border-radius: 0 0 10px 10px;
  border: 1.5px solid ${(props) => props.theme.color.sub};

  flex: 1;
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

export const Mint = styled.span`
  color: ${(props) => props.theme.color.main};
`;

export const Purple = styled.span`
  color: ${(props) => props.theme.color.sub};
`;
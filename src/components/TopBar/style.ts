import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TopBar = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  padding: 10px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoButton = styled(NavLink)`
  box-sizing: border-box;
  height: 100%;
  border-radius: 10px;
  margin: 0 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'East Sea Dokdo';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  color: white;
  text-align: center;
  text-decoration: none;
  word-break: keep-all;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Lap1000Logo = styled.img`
  box-sizing: border-box;
  height: 50px;
  margin-right: 10px;
`;

// Profile

export const ProfileWrapper = styled.div`
  box-sizing: border-box;
  height: 50px;
  margin: 0 5px;
  border-radius: 10px;
  border: 1.5px solid ${(props) => props.theme.color.sub};

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  overflow: hidden;
`;

export const ProfileButton = styled(NavLink)`
  box-sizing: border-box;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ProfileImage = styled.img`
  box-sizing: border-box;
  height: 50px;
`;

export const ConnectedWalletButton = styled.div`
  box-sizing: border-box;
  height: 50px;
  max-width: 100px;
  padding: 0 5px;
  border-left: 1.5px solid ${(props) => props.theme.color.sub};

  white-space: pre;
  line-height: 47px;
  color: ${(props) => props.theme.color.sub};

  background: black;
`;

export const ConnectWalletButton = styled.div`
  box-sizing: border-box;
  height: 50px;
  border-left: 1.5px solid ${(props) => props.theme.color.sub};
  padding: 0 5px;

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  background: black;
  cursor: pointer;
`;

export const ButtonImage = styled.img`
  box-sizing: border-box;
  height: 25px;
`;

export const KlipButtonImage = styled.img`
  box-sizing: border-box;
  width: 25px;
  filter: invert(1);
`;

export const Mint = styled.span`
  color: ${(props) => props.theme.color.main};
`;

export const Purple = styled.span`
  color: ${(props) => props.theme.color.sub};
`;

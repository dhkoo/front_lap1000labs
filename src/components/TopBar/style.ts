import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoButton = styled(NavLink)`
  box-sizing: border-box;
  border-radius: 5px;
`;

export const Lap1000Logo = styled.img`
  width: 250px;
  border: double #74ecd2;
  border-radius: 10px;
`;

export const AlapImage = styled.img`
  width: 90px;
`;

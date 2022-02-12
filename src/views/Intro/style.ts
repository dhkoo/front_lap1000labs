import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Purple = styled.span`
  color: #82a3f9;
`;

export const Mint = styled.span`
  color: #74ecd2;
`;

export const TitleText = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  padding-top: 50px;
  color: white;
`;

export const ContentText = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: white;
  text-align: center;
`;

export const EnterButton = styled(NavLink)`
  box-sizing: border-box;
  width: 200px;
  height: 40px;
  border-radius: 5px;

  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 40px;
  color: black;
  text-align: center;
  text-decoration: none;

  background: #74ecd2;
`;

export const DonationInput = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

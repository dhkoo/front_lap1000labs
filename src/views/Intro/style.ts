import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Purple = styled.span`
  color: ${(props) => props.theme.color.sub};
`;

export const Mint = styled.span`
  color: ${(props) => props.theme.color.main};
`;

export const DarkCheon = styled.span`
  color: ${(props) => props.theme.color.darkCheon};
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

export const FeatureFrame = styled.div`
  box-sizing: border-box;
  width: 700px;
  margin: 5px 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 700px) {
    width: 330px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
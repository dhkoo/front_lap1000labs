import styled from 'styled-components';

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

export const TitleText = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  padding-top: 50px;
  color: white;
`;

export const ContentText = styled.div<{ fontSize?: number }>`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: white;
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

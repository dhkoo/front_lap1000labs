import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Intro = styled.div`
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

export const DonationForm = styled.form`
  box-sizing: border-box;
  width: 330px;
  margin: 5px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DonationInput = styled.input`
  box-sizing: border-box;
  height: 40px;
  width: 200px;
  border-radius: 10px;
  padding-right: 10px;

  text-align: right;

  background: #eeeeee;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const DonationButton = styled.button`
  box-sizing: border-box;
  height: 40px;
  width: 120px;
  border-radius: 10px;

  background: #74ecd2;
  cursor: pointer;
`;

export const DonationRankItem = styled.div`
  box-sizing: border-box;
  width: 330px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: white;
`;

export const DonationRankProfile = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DonationRankAlapImage = styled.img`
  box-sizing: border-box;
  height: 50px;
  margin: 0 5px;
  border: 1px solid #74ecd2;
  border-radius: 5px;
`;

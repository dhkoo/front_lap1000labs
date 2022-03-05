import styled from 'styled-components';

export const Mint = styled.span`
  color: ${(props) => props.theme.color.main};
`;

export const Purple = styled.span`
  color: ${(props) => props.theme.color.sub};
`;

export const ContentText = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: white;
  text-align: center;
`;

export const DonationFrame = styled.div`
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

export const DonationBundle = styled.div`
  box-sizing: border-box;
  width: 330px;
  margin: 5px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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

  background: ${(props) => props.theme.color.main};
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
  border: 1px solid ${(props) => props.theme.color.main};
  border-radius: 5px;
`;

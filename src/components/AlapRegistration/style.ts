import styled from 'styled-components';

export const Mint = styled.span`
  color: ${(props) => props.theme.color.main};
`;

export const Purple = styled.span`
  color: ${(props) => props.theme.color.sub};
`;

export const AlapRegistration = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 10px 10px;
  border: 1.5px solid ${(props) => props.theme.color.sub};
  width: 330px;
`;

export const Record = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 330px;
  margin: 0 0 1px 0;
`;

export const ContentText = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: white;
  text-align: center;
`;

export const AlapRegisterForm = styled.form`
  box-sizing: border-box;
  width: 330px;
  margin: 1px 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AlapRegisterInput = styled.input`
  box-sizing: border-box;
  height: 30px;
  width: 130px;
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

export const AlapRegisterButton = styled.button`
  box-sizing: border-box;
  height: 30px;
  width: 200px;
  border-radius: 10px;

  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  white-space: pre;

  background: ${(props) => props.theme.color.main};
  cursor: pointer;
`;

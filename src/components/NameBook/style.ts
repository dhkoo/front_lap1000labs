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

export const NamingForm = styled.form`
  box-sizing: border-box;
  width: 330px;
  margin: 5px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NamingInput = styled.input`
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

export const NamingButton = styled.button`
  box-sizing: border-box;
  height: 40px;
  width: 120px;
  border-radius: 10px;

  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  white-space: pre;

  background: ${(props) => props.theme.color.main};
  cursor: pointer;
`;

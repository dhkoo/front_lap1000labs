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

export const CommentText = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 340;
  font-size: 16px;
  color: white;
`;

export const DateText = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 320;
  font-size: 13px;
  color: white;
  text-align: end;
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 8px;
  background-color: #353535;
  border-radius: 5px;
`;

export const Record = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex-wrap: wrap;
  width: 330px;
`;

export const CommentForm = styled.form`
  box-sizing: border-box;
  width: 330px;
  margin: 5px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CommentInput = styled.input`
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

export const CommentButton = styled.button`
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

export const CommentAlapImage = styled.img`
  box-sizing: border-box;
  height: 22px;
  margin: 0 2px;
  border-radius: 5px;
`;

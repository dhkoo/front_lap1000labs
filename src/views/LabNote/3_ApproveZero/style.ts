import styled from 'styled-components';

export const ApproveZero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
`;

export const AddrCheckWrapper = styled.div`
  box-sizing: border-box;
  width: 330px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.color.sub};
`;

export const ContractInput = styled.input`
  box-sizing: border-box;
  height: 40px;
  border-radius: 10px;
  margin-top: 5px;
  padding-left: 10px;
`;

export const ViewScopeButton = styled.div`
  box-sizing: border-box;
  height: 30px;
  margin-top: 5px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: black;

  background: ${(props) => props.theme.color.main};
  cursor: pointer;
`;

export const ResultBox = styled.div`
  box-sizing: border-box;
  height: 40px;
  border-radius: 10px;
  margin-top: 5px;
  padding-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background: #222222;
`;

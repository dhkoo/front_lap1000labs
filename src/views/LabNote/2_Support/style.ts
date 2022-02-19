import styled from 'styled-components';

export const Event = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainLogWrapper = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: white;
  text-align: center;
`;

export const DarkCheon = styled.span`
  color: ${(props) => props.theme.color.darkCheon};
`;

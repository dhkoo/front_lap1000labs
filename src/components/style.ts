import styled from 'styled-components';

export const SizeViewer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 600;
  box-sizing: border-box;

  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: ${(props) => props.theme.color.dimmedFont};
`;

import styled from 'styled-components';

export const HallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const LapgendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const LapgendGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const LapgendTemplateGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
`;

export const LapgendTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const LapgendImage = styled.img`
  width: 300px;
  border: solid;
  cursor: pointer;
`;

export const NamedContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
`;

export const NamedGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const NamedImage = styled.img`
  width: 100px;
  border: solid;
  cursor: pointer;
`;

export const PetImage = styled.img`
  width: 90px;
  height: 90px;
  border: solid;
  cursor: pointer;
`;

export const TitleText = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  padding-top: 50px;
  color: white;
`;

export const ContentText = styled.div<{fontSize?: number}>`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: white;
`;

export const VoteCreationButton = styled.div<{color: string}>`
width: 150px;
height: 40px;
border-radius: 15px;

margin: 20px 0 0 0;

font-family: Pretendard;
font-style: normal;
font-weight: 800;
font-size: 15px;
line-height: 40px;
text-align: center;
vertical-align: middle;

background: ${(props) => props.color};

cursor: not-allowed;
`;
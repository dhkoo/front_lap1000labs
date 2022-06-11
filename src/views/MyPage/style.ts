import styled from 'styled-components';

export const MyPage = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleText = styled.div`
  font-family: 'East Sea Dokdo';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  color: white;
  text-align: center;
  text-decoration: none;
  padding-top: 50px;
  color: white;
`;

export const EmphasisText = styled.div`
  font-family: 'East Sea Dokdo';
  font-style: normal;
  font-weight: 200;
  font-size: 30px;
  color: ${(props) => props.theme.color.sub};
  text-align: center;
`;

export const ContentText = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: white;
  text-align: center;
`;

export const ProfileImage = styled.img`
  box-sizing: border-box;
  border-radius: 50px;
  height: 100px;
`;

export const NFTImage = styled.img`
  box-sizing: border-box;
  border-radius: 20px;
  height: 100px;
`;

export const DropDownContainer = styled.div``;
export const DropDownHeader = styled.div`
  margin-bottom: 5px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;
export const DropDownListContainer = styled.div``;
export const DropDownList = styled.ul`
  &:first-child {
    padding-top: 1px;
  }
`;

export const TopicText = styled.div`
  box-sizing: border-box;
  width: 150px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;

  color: ${(props) => props.theme.color.sub};
  text-align: left;
`;

export const NormalText = styled.div`
  box-sizing: border-box;
  width: 150px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;

  color: white;
  text-align: right;
`;

export const ListItem = styled.li`
  list-style: none;
  width: 380px;
  display: flex;
  direction: row;
  justify-content: space-between;
  text-align: right;
  margin-bottom: 10px;
  background-color: #353535;
`;

import styled from 'styled-components';

export const MyPage = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 200px;
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

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubTitleText = styled.div`
  font-family: 'East Sea Dokdo';
  font-style: normal;
  font-weight: 200;
  font-size: 30px;
  color: ${(props) => props.theme.color.sub};
  text-align: center;
`;

export const ContentText = styled.div`
  font-family: monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: white;
  text-align: center;
`;
export const SubContentText = styled.div`
  font-family: monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
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
  height: 80px;
`;

export const TokenImage = styled.img`
  box-sizing: border-box;
  border-radius: 50px;
  height: 25px;
  margin-right: 5px;
`;

export const DropDownContainer = styled.div``;
export const DropDownHeader = styled.div`
  font-weight: 500;
  text-align: center;
  margin-bottom: 5px;
`;
export const DropDownListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
`;

export const ListMainItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.color.sub};

  width: 330px;
  text-align: right;
  margin-bottom: 10px;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.color.sub};

  width: 330px;
  text-align: right;
  margin-bottom: 10px;
  opacity: 0.8;
`;

export const TopicText = styled.div`
  flex-basis: 110px;

  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;

  text-align: left;
  color: ${(props) => props.theme.color.sub};
`;

export const CountText = styled.div`
  flex-basis: 110px;

  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;

  text-align: right;
  color: white;
`;

export const AssetText = styled.div`
  flex-basis: 110px;

  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;

  text-align: right;
  color: white;
`;

export const AlapGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

export const ContentLink = styled.div`
  box-sizing: border-box;
  height: calc(100% - 4px);
  margin: 2px;
  border-radius: 5px;

  font-family: monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: white;
  opacity: 0.8;
  text-align: center;
  text-decoration: none;
  word-break: keep-all;

  background: #222222;
  &:hover {
    color: black;
    background: ${(props) => props.theme.color.main};
  }
  cursor: pointer;
`;

export const TokenPriceBox = styled.div`
  display: flex;
  direction: row;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  margin: 2px;
  border-radius: 10px;

  font-family: monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: white;
  text-align: center;
  text-decoration: none;
  word-break: keep-all;

  background: #333333;
  margin-left: 10px;
`;

export const PriceText = styled.div`
  font-family: monospace;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: white;
  text-align: center;
  margin-right: 7px;
`;

export const Mint = styled.span`
  color: ${(props) => props.theme.color.main};
`;

export const Purple = styled.span`
  color: ${(props) => props.theme.color.sub};
`;

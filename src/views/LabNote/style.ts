import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: black;
`;

export const MenuContainer = styled.div`
  box-sizing: border-box;
  margin-top: 10px;
  width: 330px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

export const LabNoteButton = styled(NavLink)`
  box-sizing: border-box;
  margin-top: 5px;
  border-radius: 5px;

  font-family: 'East Sea Dokdo';
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  color: white;
  text-align: center;
  text-decoration: none;

  &.active {
    color: #74ecd2;
  }
`;

export const MenuItem = styled(NavLink)`
  box-sizing: border-box;
  margin-right: 5px;
  border-radius: 5px;
  flex: 1;

  font-family: 'East Sea Dokdo';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: white;
  text-align: center;
  text-decoration: none;

  background: #222222;
  &.active {
    color: black;
    background: #74ecd2;
  }
`;

export const GuideWrapper = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: white;
  text-align: center;
`;

export const ResearchNoteWrapper = styled.div`
  padding: 15px;
  font-family: 'East Sea Dokdo';
  font-style: normal;
  font-weight: 10;
  font-size: 25px;
  color: white;
  text-align: center;
  border: 1px solid #74ecd2;
  border-radius: 10px;
`;

export const ResearchNoteTitle = styled.div`
  box-sizing: border-box;
  border-radius: 5px;

  font-family: 'East Sea Dokdo';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  color: white;
  text-align: center;
  text-decoration: none;

  &.active {
    color: #74ecd2;
  }
`;

export const NoteContentWrapper = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
`;

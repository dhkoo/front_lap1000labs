import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Hall from 'views/LabNote/Hall';
import Event from 'views/LabNote/Event';
import Messenger from 'views/LabNote/Messenger';
import Store from 'views/LabNote/Charnel';

import * as S from './style';

const LabNote = () => {
  const LabNoteGuide = () => {
    return (
      <S.GuideWrapper>
        이 곳은, 매우 흥미롭다. <br />
        <br />
        새의 소리를 알아 들을 수 있던 것은 우연이 아니었고, <br />
        다행히 무인도도 아니었다. <br />
        <br />
        다시 집으로 돌아가기 전까지 <br />
        앞으로 이 노트에 기록해 보고자 한다.
      </S.GuideWrapper>
    );
  };

  return (
    <>
      <S.LabNoteButton to="./">연구 노트</S.LabNoteButton>
      <S.MenuContainer>
        <S.MenuItem to="hall">#1 전시관</S.MenuItem>
        <S.MenuItem to="event">#2 이벤트</S.MenuItem>
        <S.MenuItem to="messenger">#3 비밀 쪽지</S.MenuItem>
        {/* <S.MenuItem to="/charnel">납골당</S.MenuItem> */}
      </S.MenuContainer>
      <S.NoteContentWrapper>
        <Routes>
          <Route path="" element={LabNoteGuide()} />
          <Route path="hall" element={<Hall />} />
          <Route path="event" element={<Event />} />
          <Route path="messenger" element={<Messenger />} />
          {/* <Route path="/charnel" element={<Store />} /> */}
        </Routes>
      </S.NoteContentWrapper>
    </>
  );
};

export default LabNote;

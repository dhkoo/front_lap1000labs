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
      <>
      <S.GuideWrapper>
        이곳은, 매우 흥미롭다. <br />
        <br />
        새의 소리를 알아들을 수 있던 것은 우연이 아니었고, <br />
        다행히 무인도도 아니었다. <br />
        <br />
        다시 집으로 돌아가기 전까지 <br />
        앞으로 이 노트에 기록해 보고자 한다.
      </S.GuideWrapper>
      <br />
      <br />
      <br />
      <S.ResearchNoteWrapper>
        <S.ResearchNoteTitle>NOTE #1</S.ResearchNoteTitle> <br />
        연구소 운영을 위한 후원 기능을 추가했다.<br />
        순위와 이미지를 넣어 후원자들이 돋보이도록 해보았다.<br />
        유의미한 효과가 있어보인다.<br />
        <br />
        - 상위 후원자들에게 특별한 혜택..? <br />
        - 일정 금액이상의 후원금 모금시 알랍들에게 선물..? <br />
        <br />
      </S.ResearchNoteWrapper>
      </>
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

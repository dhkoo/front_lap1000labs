import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Hall from 'views/LabNote/1_Hall';
import Support from 'views/LabNote/2_Support';
import ApproveZero from 'views/LabNote/3_ApproveZero';
import Messenger from 'views/LabNote/4_Messenger';
import Store from 'views/LabNote/Charnel';

import * as S from './style';

const LabNote = () => {
  const LabNoteGuide = () => {
    return (
      <S.GuideWrapper>
        이곳은, 매우 흥미롭다. <br />
        <br />
        새의 소리를 알아들을 수 있던 것은 우연이 아니었고, <br />
        다행히 무인도도 아니었다. <br />
        <br />
        다시 집으로 돌아가기 전까지 <br />
        앞으로 이 노트에 기록해 보고자 한다.
        <br />
        <br />
        <S.DarkCheon>큭 큭 어떤 일이 벌어 질지 기대되는군</S.DarkCheon>
      </S.GuideWrapper>
    );
  };

  return (
    <>
      <S.LabNoteButton to="./">연구 노트</S.LabNoteButton>
      <S.MenuContainer>
        <S.MenuItem to="1">#1 전시관</S.MenuItem>
        <S.MenuItem to="2">#2 정착</S.MenuItem>
        <S.MenuItem to="3">#3 통신 보안</S.MenuItem>
        <S.MenuItem to="4">#4 비밀 쪽지</S.MenuItem>
        {/* <S.MenuItem to="/charnel">납골당</S.MenuItem> */}
      </S.MenuContainer>
      <S.NoteContentWrapper>
        <Routes>
          <Route path="" element={LabNoteGuide()} />
          <Route path="1" element={<Hall />} />
          <Route path="2" element={<Support />} />
          <Route path="3" element={<ApproveZero />} />
          <Route path="4" element={<Messenger />} />
          {/* <Route path="/charnel" element={<Store />} /> */}
        </Routes>
      </S.NoteContentWrapper>
    </>
  );
};

export default LabNote;

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Hall from 'views/LabNote/Hall';
import ApproveZero from 'views/LabNote/ApproveZero';
import Register from 'views/LabNote/Register';

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
      {/* <S.LabNoteButton to="./">연구 노트</S.LabNoteButton>
      <S.MenuContainer>
        <S.MenuItem to="1">#1 등록</S.MenuItem>
        <S.MenuItem to="2">#2 전당</S.MenuItem>
        <S.MenuItem to="3">#3 통신 보안</S.MenuItem>
      </S.MenuContainer> */}
      <S.NoteContentWrapper>
        <Routes>
          <Route path="" element={LabNoteGuide()} />
          <Route path="1" element={<Register />} />
          <Route path="2" element={<Hall />} />
          <Route path="3" element={<ApproveZero />} />
          <Route path="4" element={<Register />} />
        </Routes>
      </S.NoteContentWrapper>
    </>
  );
};

export default LabNote;

import React from 'react';

import Donation from './Donation';

import * as S from './style';

const Intro = () => {
  return (
    <S.Intro>
      <S.TitleText>
        <S.Purple>Attention! Attention!</S.Purple>
      </S.TitleText>
      <S.ContentText>
        <br />
        귀를 찌르는 청량한 소리에 정신이 들었다. <br />
        <br />
        나는.. <br />
        분명 은퇴 기념 휴가를 가던 중이었는데 <br />
        <br />
        주변으로 고심해서 고른 <S.Mint>민트색</S.Mint> 요트가 <br />
        나를 지키고 있었다. <br />
        다시는 돌아올수 없는 형태로.. <br />
        <br />
        <S.Purple>
          Attention! Pala! Attention! Alap! <br />
        </S.Purple>
        <br />
        팔..라..? <br />
        새..가 말하는 것 같다.. <br />
        나는 아직 살아 있는건가..? <br />
        <b>궁금한 것</b> 투성이다. <br />
        <br />
      </S.ContentText>
      <S.EnterButton to="LabNote/">
        <b>연구 노트 확인하기</b>
      </S.EnterButton>
      <Donation />
    </S.Intro>
  );
};

export default Intro;

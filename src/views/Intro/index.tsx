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
        피부색은 <S.Mint>민트색</S.Mint>으로 변해있고 <br />
        계속 의미를 알 수 없는 소리가 들려온다.. <br />
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

import React from 'react';

import Support from '../../components/Support';
import NameBook from '../../components/NameBook';

import * as S from './style';
import AlapRegister from 'components/AlapRegistration';
import CommentBox from 'components/CommentBox';

const Intro = () => {
  return (
    <S.Intro>
      <AlapRegister />
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
        피부는 <S.Mint>민트색</S.Mint>으로 변해있고 <br />
        계속 의미를 알 수 없는 소리가 들려온다.. <br />
        <S.DarkCheon>새로워! 짜릿해! 최고야!</S.DarkCheon> <br />
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

      <S.FeatureFrame>
        <S.Feature>
          <S.TitleText>Naming</S.TitleText>
          <S.ContentText>
            <br />
            "내가 그의 이름을 불러주었을 때, <br />
            그는 나에게로 와서 <br />
            꽃이 되었다." <br />
            <br />
          </S.ContentText>
          <NameBook />
        </S.Feature>
        <S.Feature>
          <S.TitleText>Comment</S.TitleText>
          <CommentBox />
        </S.Feature>
      </S.FeatureFrame>

      <S.TitleText>SUPPORT</S.TitleText>
      <S.ContentText>
        <br />
        바닥부터 하나씩 만들어나가야 한다. <br />
        <br />
        팔라랜드의 무궁한 발전을 위해 <br />
        많은 사랑과 후원이 필요해 보인다. <br />
        <br />
      </S.ContentText>
      <Support />
    </S.Intro>
  );
};

export default Intro;

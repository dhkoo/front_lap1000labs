import React from 'react';
import * as S from './style';
import { Lap1000Logo } from 'constants/images';

const Main = () => {
  return (
    <S.Main>
      <S.Lap1000Logo src={Lap1000Logo} />
      <S.ContentText>
        - 인사 - <br/>
        안녕하세요, 랍천 연구소의 랍천입니다. <br/>
        최근 1번 알랍이 21111 KLAY 에 판매되는 사건이 있었습니다. <br/>
        엄청난 반응이 있었고, 단순 반응을 넘어 1대 1번 알랍 유저의 AMA 그리고 퇴장. <br/>
        이어 2대 1번 알랍 유저의 등장 및 소감등 우연의 연속이 모여 만들어진 계승식을 목격하게 되었습니다. <br/>
        이렇게 재미있는 이벤트들이 한 순간에 지나가는 것이 아쉬웠습니다. <br/>
        또한 열심히 활동한 유저가 기억속에 사라지는 것이 안타까웠습니다. <br/><br/>
        우리의 기억속이 아닌 블록체인에 기록되어 우리가 언제든 기념할 수 있으면 좋을 것 같다는 생각이 들었습니다. <br/>
        <br/><br/>
      </S.ContentText>
      <S.ContentText>
        - 계획 및 아이디어 - <br/>
        &nbsp; * 레전드 공로 뱃지 NFT 민팅 및 NFT 전달 <br/>
        &nbsp; * 뱃지 NFT 소유 레전드 기념 전시 <br/>
        &nbsp; * 알랍 거버넌스 투표 기반 공로 인정 뱃지 NFT 수여 <br/>
        &nbsp; * 뱃지 NFT 방명록 기능 <br/>
      </S.ContentText>
    </S.Main>
  );
}

export default Main;
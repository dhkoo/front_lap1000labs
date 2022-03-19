import * as Image from 'constants/images';
import * as S from './style';
import * as LabNoteS from '../style';

const Hall = () => {
  const saySomething = (say: string) => {
    alert(say);
  };
  return (
    <S.HallContainer>
      <LabNoteS.NoteLogWrapper>
        이곳에도 사람들이 문명을 이뤄 살고 있었다. <br />
        앞으로 함께 지내야 할 사람들에 대한 조사가 필요했다. <br />
        {/* 앞으로 함께 지내야 할 사람들에 대해 먼저 알고 싶었다. <br /> */}
        <br />이 곳은 섬이고, <S.Purple>'팔라'</S.Purple>라고 부른다. <br />
        PalaLand <br />
        ..라고 부르면 될까.. <br />
        <LabNoteS.DarkCheon>새로워! 짜릿해! 최고야!</LabNoteS.DarkCheon> <br />
        <br />
        그리고 팔라에 거주하는 사람들을 '알랍'이라 지칭한다. <br />
        크게 조건은 없는 것 같다. <br />
        나도 금세 알랍으로 받아들여진게 그 근거다. <br />
        <br />
        운이 좋게도 팔라에는 유명한 알랍을 기록하는 전시관(?) 이 있다. <br />
        아래는 그 전시관과 알랍들 사이에서 얻은 정보이다. <br />
        <br />
        P.S. 인지도가 높은 알랍들은 유행어도 있는듯하다. <br />
        <br />
        P.S. 늑대와 토끼가 사이좋게 지내는 모습도 목격했다. <br />
      </LabNoteS.NoteLogWrapper>

      <S.LapgendContainer>
        <S.LapgendGroup>
          <S.TitleText>Lapgend #1</S.TitleText>
          <S.ContentText>
            <button
              onClick={() =>
                window.open(
                  'https://scope.klaytn.com/account/0xeea488122991467368fc9b59d5b32a7d5ad1d8a3?tabId=txList',
                  '_blank',
                )
              }
            >
              컨트랙트 바로가기
            </button>
          </S.ContentText>
          <S.LapgendTemplateGroup>
            <S.LapgendTemplate>
              <S.LapgendImage
                src={Image.Lapgend1_1}
                onClick={() => {
                  saySomething('엣헴');
                }}
              />
              <S.ContentText>
                [닉네임]
                <br />{' '}
                <b>
                  <b>내사랑인재의엉뎡이가너무나고그리운오늘.</b>
                </b>{' '}
                <br />
                [계정] 0x5e8...5a4 <br />
                [상태] retirement <br />
                [임기 기간] 2021.11.11 ~ 2022.01.03 <br />
                [계승 가격] 30 KLAY
              </S.ContentText>
            </S.LapgendTemplate>
            <S.LapgendTemplate>
              <S.LapgendImage
                src={Image.Lapgend1_2}
                onClick={() => {
                  saySomething('이놈이!');
                }}
              />
              <S.ContentText>
                [닉네임]{' '}
                <b>
                  <b>2대호카게_팔라대왕</b>
                </b>{' '}
                <br />
                [주소] 0x40F...e4e <br />
                [계정] active <br />
                [임기 기간] 2022.01.03 ~ <br />
                [계승 가격] 21,111 KLAY
              </S.ContentText>
            </S.LapgendTemplate>
          </S.LapgendTemplateGroup>
          <S.VoteCreationButton color="#FDEB8D">투표 생성 (준비중)</S.VoteCreationButton>
        </S.LapgendGroup>

        <S.LapgendTemplateGroup>
          <S.LapgendGroup>
            <S.TitleText>Lapgend #2</S.TitleText>
            <button
              onClick={() =>
                window.open(
                  'https://scope.klaytn.com/account/0x2b4B679aDbb0b81e26C04FC5E54f8f32468CB70C?tabId=txList',
                  '_blank',
                )
              }
            >
              컨트랙트 바로가기
            </button>
            <S.LapgendTemplateGroup>
              <S.LapgendTemplate>
                <S.LapgendImage src={Image.Lapgend2_1} onClick={() => saySomething('et.ham')} />
                <S.ContentText>
                  [닉네임]{' '}
                  <b>
                    <b>alapu2</b>
                  </b>{' '}
                  <br />
                  [계정] 0x27c...3b7 <br />
                  [상태] retirement <br />
                  [임기 기간] 2022.01.12 ~ 2022.03.15<br />
                  [계승 가격] 25,000 KLAY
                </S.ContentText>
              </S.LapgendTemplate>
              <S.LapgendTemplate>
                <S.LapgendImage src={Image.Lapgend2_2} onClick={() => saySomething('꺄')} />
                <S.ContentText>
                  [닉네임]{' '}
                  <b>
                    <b>알랍에미리트</b>
                  </b>{' '}
                  <br />
                  [계정] 0x1c4...1c5 <br />
                  [상태] active <br />
                  [임기 기간] 2022.03.15 ~ <br />
                  [계승 가격] 25,000 KLAY
                </S.ContentText>
              </S.LapgendTemplate>
            </S.LapgendTemplateGroup>
            <S.VoteCreationButton color="#E920FF">투표 생성 (준비중)</S.VoteCreationButton>
          </S.LapgendGroup>
        </S.LapgendTemplateGroup>

        <S.LapgendTemplateGroup>
          <S.LapgendGroup>
            <S.TitleText>Lapgend #3</S.TitleText>
            <button
              onClick={() =>
                window.open(
                  'https://scope.klaytn.com/account/0x85e7ECf746cF6CC438b26A531D72Fd06c69bc459?tabId=txList',
                  '_blank',
                )
              }
            >
              컨트랙트 바로가기
            </button>
            <S.LapgendTemplateGroup>
              <S.LapgendTemplate>
                <S.LapgendImage src={Image.Lapgend3_1} onClick={() => saySomething('우가가가')} />
                <S.ContentText>
                  [닉네임]{' '}
                  <b>
                    <b>알라프</b>
                  </b>{' '}
                  <br />
                  [계정] 0x9b9...e0b <br />
                  [상태] active <br />
                  [임기 기간] 2021.11.12 ~ <br />
                  [계승 가격] 2,500 KLAY
                </S.ContentText>
              </S.LapgendTemplate>
            </S.LapgendTemplateGroup>
            <S.VoteCreationButton color="#4DC3FD">투표 생성 (준비중)</S.VoteCreationButton>
          </S.LapgendGroup>

          <S.LapgendGroup>
            <S.TitleText>Lapgend #4</S.TitleText>
            <button
              onClick={() =>
                window.open(
                  'https://scope.klaytn.com/account/0x487F13354d7894F4FE95161Eb50dc72d7413E4d6?tabId=txList',
                  '_blank',
                )
              }
            >
              컨트랙트 바로가기
            </button>
            <S.LapgendTemplateGroup>
              <S.LapgendTemplate>
                <S.LapgendImage src={Image.Lapgend4_1} onClick={() => saySomething('뀨')} />
                <S.ContentText>
                  [닉네임]{' '}
                  <b>
                    <b onClick={() => saySomething('뀨')}>나는 전설이다</b>
                  </b>{' '}
                  <br />
                  [계정] 0x452...6a3 <br />
                  [상태] active <br />
                  [임기 기간] 2022.01.07 ~ <br />
                  [계승 가격] 25,000 KLAY
                </S.ContentText>
              </S.LapgendTemplate>
            </S.LapgendTemplateGroup>
            <S.VoteCreationButton color="#65E7C5">투표 생성 (준비중)</S.VoteCreationButton>
          </S.LapgendGroup>
        </S.LapgendTemplateGroup>
      </S.LapgendContainer>
      <S.TitleText>네임드 알랍</S.TitleText>
      <S.NamedContainer>
        <S.NamedGroup>
          <S.NamedImage src={Image.NamedAlap1} onClick={() => saySomething('싼랍클로스 입니다. 선물 뿌린다!!')} />
          <S.ContentText>
            <b>강도깨비</b>
          </S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage src={Image.NamedAlap6} onClick={() => saySomething('똥이다.. 수염 아니다..')} />
          <S.ContentText>
            <b>셀마 헤이엑</b>
          </S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage src={Image.NamedAlap2} onClick={() => saySomething('랍천 기억할게!')} />
          <S.ContentText>
            <b>기억할게</b>
          </S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage src={Image.NamedAlap3} onClick={() => saySomething('작명..그으으만..')} />
          <S.ContentText>
            <b>572</b>
          </S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage src={Image.NamedAlap9} onClick={() => saySomething('단타치면 지옥가여')} />
          <S.ContentText>
            <b>라라부인</b>
          </S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage src={Image.NamedAlap8} onClick={() => saySomething('블록왕 구사칠랍')} />
          <S.ContentText>
            <b>구사칠랍S2</b>
          </S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage
            src={Image.NamedAlap4}
            onClick={() => {
              if (window.confirm('k-bluewhale 블로그 바로가기')) window.open('https://blog.naver.com/k-bluewhale');
            }}
          />
          <S.ContentText>
            <b>k-bluewhale</b>
          </S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage
            src={Image.NamedAlap7}
            onClick={() => {
              if (window.confirm('팔라멘트 블로그 바로가기'))
                window.open('https://blog.naver.com/PostList.naver?blogId=palament_111');
            }}
          />
          <S.ContentText>
            <b>팔라멘트</b>
          </S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage src={Image.NamedAlap5} onClick={() => saySomething('팔라 팔달라 가면 닉 뭐하지?')} />
          <S.ContentText>
            <b>팔달라</b>
          </S.ContentText>
        </S.NamedGroup>
      </S.NamedContainer>
      <S.TitleText>공식 반려동물</S.TitleText>
      <S.NamedContainer>
        <S.NamedGroup>
          <S.PetImage
            src={Image.Pet1}
            onClick={() => saySomething('으으으ㅏㅇ아아아ㅏ앙ㅇ꺄아아아아아아ㅜㅜ웅ㅇ우우우ㅜㅜ루룰~!')}
          />
          <S.ContentText>
            <b>[팔라가 오르면 우는 늑대]</b>
          </S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.PetImage src={Image.Pet2} onClick={() => saySomething('키치이이이잉이이이익!')} />
          <S.ContentText>
            <b>[늑대대신울어주는토끼]</b>
          </S.ContentText>
        </S.NamedGroup>
      </S.NamedContainer>
      <br />
      <br />
      <br />
    </S.HallContainer>
  );
};

export default Hall;

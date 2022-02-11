import * as S from './style';
import {
  Lapgend1_1,
  Lapgend1_2,
  Lapgend2_1,
  Lapgend3_1,
  Lapgend4_1,
  NamedAlap1,
  NamedAlap2,
  NamedAlap3,
  NamedAlap4,
  NamedAlap5,
  NamedAlap6,
  Pet1,
  Pet2,
} from 'constants/images';

const Hall = () => {
  const saySomething = (say: string) => {
    alert(say);
  };
  return (
    <S.HallContainer>
      <S.TitleText>TODO: 계승식 투표 생성</S.TitleText>
      <S.ContentText>레전드 알랍 소유 but,</S.ContentText>
      <S.ContentText>Lapgend NFT가 없는 계정만 투표 생성 가능</S.ContentText>
      <S.ContentText>계승식 투표는 알랍인만 가능하며,</S.ContentText>
      <S.ContentText>소유하고 있는 알랍 수 만큼 투표 가능</S.ContentText>
      <S.ContentText>
        <br />
        [통과시] Hall of Lapgend NFT 민팅
      </S.ContentText>
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
                src={Lapgend1_1}
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
                src={Lapgend1_2}
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
                [계승 가격] 21111 KLAY
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
                <S.LapgendImage src={Lapgend2_1} onClick={() => saySomething('et.ham')} />
                <S.ContentText>
                  [닉네임]{' '}
                  <b>
                    <b>alapu2</b>
                  </b>{' '}
                  <br />
                  [계정] 0x27c...3b7 <br />
                  [상태] active <br />
                  [임기 기간] 2022.01.12 ~ <br />
                  [계승 가격] 25000 KLAY
                </S.ContentText>
              </S.LapgendTemplate>
            </S.LapgendTemplateGroup>
            <S.VoteCreationButton color="#E920FF">투표 생성 (준비중)</S.VoteCreationButton>
          </S.LapgendGroup>

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
                <S.LapgendImage src={Lapgend3_1} onClick={() => saySomething('우가가가')} />
                <S.ContentText>
                  [닉네임]{' '}
                  <b>
                    <b>알라프</b>
                  </b>{' '}
                  <br />
                  [계정] 0x9b9...e0b <br />
                  [상태] active <br />
                  [임기 기간] 2021.11.12 ~ <br />
                  [계승 가격] 2500 KLAY
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
                <S.LapgendImage src={Lapgend4_1} onClick={() => saySomething('뀨')} />
                <S.ContentText>
                  [닉네임]{' '}
                  <b>
                    <b onClick={() => saySomething('뀨')}>나는 전설이다</b>
                  </b>{' '}
                  <br />
                  [계정] 0x452...6a3 <br />
                  [상태] active <br />
                  [임기 기간] 2022.01.07 ~ <br />
                  [계승 가격] 25000 KLAY
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
          <S.NamedImage src={NamedAlap1} onClick={() => saySomething('팔라야 힘내!')} />
          <S.ContentText>
            <b>강도깨비</b>
          </S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage src={NamedAlap6} onClick={() => saySomething('똥아니다.. 수염이다..')} />
          <S.ContentText>
            <b>셀마 헤이엑</b>
          </S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage src={NamedAlap2} onClick={() => saySomething('랍천 기억할게!')} />
          <S.ContentText>
            <b>기억할게</b>
          </S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage src={NamedAlap3} onClick={() => saySomething('작명..그으으만..')} />
          <S.ContentText>
            <b>572</b>
          </S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage src={NamedAlap4} onClick={() => saySomething('고래 뿌우뿌우!!')} />
          <S.ContentText>
            <b>k-bluewhale</b>
          </S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage src={NamedAlap5} onClick={() => saySomething('팔라 팔달라 가면 닉 뭐하지?')} />
          <S.ContentText>
            <b>팔달라</b>
          </S.ContentText>
        </S.NamedGroup>
      </S.NamedContainer>
      <S.TitleText>공식 애완동물</S.TitleText>
      <S.NamedContainer>
        <S.NamedGroup>
          <S.PetImage
            src={Pet1}
            onClick={() => saySomething('으으으ㅏㅇ아아아ㅏ앙ㅇ꺄아아아아아아ㅜㅜ웅ㅇ우우우ㅜㅜ루룰~!')}
          />
          <S.ContentText>
            <b>(팔라가 오르면 우는 늑대)</b>
          </S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.PetImage src={Pet2} onClick={() => saySomething('키치이이이잉이이이익!')} />
          <S.ContentText>
            <b>(늑대대신울어주는토끼)</b>
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

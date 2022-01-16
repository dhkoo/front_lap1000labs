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
} from 'constants/images';

const Hall = () => {
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
              <S.LapgendImage src={Lapgend1_1} />
              <S.ContentText>
                [닉네임]
                <br />{' '}
                <b>
                  <u>내사랑인재의엉뎡이가너무나고그리운오늘.</u>
                </b>{' '}
                <br />
                [주소] 0x5e8...5a4 <br />
                [상태] retirement <br />
                [임기 기간] 2021.11.11 ~ 2022.01.03 <br />
                [계승 가격] 30 KLAY
              </S.ContentText>
            </S.LapgendTemplate>
            <S.LapgendTemplate>
              <S.LapgendImage src={Lapgend1_2} />
              <S.ContentText>
                [닉네임]{' '}
                <b>
                  <u>2대호카게_팔라대왕</u>
                </b>{' '}
                <br />
                [주소] 0x40F...e4e <br />
                [상태] active <br />
                [임기 기간] 2022.01.03 ~ <br />
                [계승 가격] 21111 KLAY
              </S.ContentText>
            </S.LapgendTemplate>
          </S.LapgendTemplateGroup>
          <S.VoteCreationButton color="#FDEB8D">투표 생성 (준비중)</S.VoteCreationButton>
        </S.LapgendGroup>

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
              <S.LapgendImage src={Lapgend2_1} />
              <S.ContentText>
                [닉네임]{' '}
                <b>
                  <u>alapu2</u>
                </b>{' '}
                <br />
                [주소] 0x27c...3b7 <br />
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
              <S.LapgendImage src={Lapgend3_1} />
              <S.ContentText>
                [닉네임]{' '}
                <b>
                  <u>알라프</u>
                </b>{' '}
                <br />
                [주소] 0x9b9...e0b <br />
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
              <S.LapgendImage src={Lapgend4_1} />
              <S.ContentText>
                [닉네임]{' '}
                <b>
                  <u>나는 전설이다</u>
                </b>{' '}
                <br />
                [주소] 0x452...6a3 <br />
                [상태] active <br />
                [임기 기간] 2022.01.07 ~ <br />
                [계승 가격] 25000 KLAY
              </S.ContentText>
            </S.LapgendTemplate>
          </S.LapgendTemplateGroup>
          <S.VoteCreationButton color="#65E7C5">투표 생성 (준비중)</S.VoteCreationButton>
        </S.LapgendGroup>
      </S.LapgendContainer>
      <S.TitleText>네임드 알랍</S.TitleText>
      <S.NamedContainer>
        <S.NamedGroup>
          <S.NamedImage src={NamedAlap1} />
          <S.ContentText>강도깨비</S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage src={NamedAlap2} />
          <S.ContentText>기억할게</S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage src={NamedAlap3} />
          <S.ContentText>572</S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage src={NamedAlap4} />
          <S.ContentText>k-bluewhale</S.ContentText>
        </S.NamedGroup>
        <S.NamedGroup>
          <S.NamedImage src={NamedAlap5} />
          <S.ContentText>팔달라</S.ContentText>
        </S.NamedGroup>
      </S.NamedContainer>
      <S.ContentText>
        <br />
        <br />
        번호 순 나열이고 네임드인데 여기 없으면 내가 이미지 번호를 못찾아서야..
      </S.ContentText>
      <S.ContentText>
        이의가 있다면 커뮤니티에서 합의를 보고 알려줘 반영할게
        <br />
        <br />
        <br />
      </S.ContentText>
    </S.HallContainer>
  );
};

export default Hall;

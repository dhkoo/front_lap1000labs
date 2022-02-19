import Support from 'components/Support';

import * as S from './style';
import * as LabNoteS from '../style';

const Event = () => {
  return (
    <S.Event>
      <LabNoteS.NoteLogWrapper>
        팔라의 환경에 적응하기 위한 나날들이다. <br />
        <br />
        여러 네임드 알랍들은 특히나 친절해서 <br />
        계속 도움을 주고 싶어했고, <br />
        당장 의식주를 해결할 수 있도록 도움을 주셨다. <br />
        <br />
        감사의 마음을 조금이나마 표하기 위해 <br />
        후원자 리스트를 만들어 도움을 주신 분들의 <br />
        선행을 널리 알리고자 한다. <br />
        <LabNoteS.DarkCheon>ㅎㅎ 압도적 감사!</LabNoteS.DarkCheon>
        <br />
        상황이 나아지면 더 나은 감사의 표시를 해드리고 싶다. <br />
        <br />
        - 상위 후원자들에게 특별한 혜택..? <br />
        - 일정 금액이상의 후원금 모금시 알랍들에게 선물..? <br />
        <br />
      </LabNoteS.NoteLogWrapper>
      <Support />
    </S.Event>
  );
};

export default Event;

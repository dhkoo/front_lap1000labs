import * as S from './style';
import { Lap1000Logo } from 'constants/images';

const TopBar = () => {
  return (
    <>
      <S.TopBar>
        <S.Lap1000Logo src={Lap1000Logo} />
      </S.TopBar>
    </>
  );
}

export default TopBar;
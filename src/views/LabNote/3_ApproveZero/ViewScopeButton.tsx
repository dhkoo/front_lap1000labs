import * as S from './style';

const ViewScopeButton: React.FC<{ type: string; addr: string }> = ({ type, addr }) => {
  const openKlaytnScope = () => {
    window.open('https://scope.klaytn.com/'.concat(type).concat('/').concat(addr));
  };

  return <S.ViewScopeButton onClick={openKlaytnScope}>KlaytnScope로 확인하기</S.ViewScopeButton>;
};

export default ViewScopeButton;

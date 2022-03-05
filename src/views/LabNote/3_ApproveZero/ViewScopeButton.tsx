import * as S from './style';

const ViewScopeButton: React.FC<{ type: string; addr: string }> = ({ type, addr }) => {
  const openKlaytnScope = () => {
    window.open('https://scope.klaytn.com/'.concat(type).concat('/').concat(addr));
  };

  return <S.ViewScopeButton onClick={openKlaytnScope}>Scope 확인</S.ViewScopeButton>;
};

export default ViewScopeButton;

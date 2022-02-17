import { useSelector } from 'react-redux';

import { RootState } from 'state';

import * as S from './style';

const ConnectedWalletButton = () => {
  const address = useSelector((state: RootState) => state.wallet.address);

  const frontAddr = address.substr(0, 5);
  const backAddr = address.substr(address.length - 4, 4);

  return (
    <S.ConnectedWalletButton>
      {frontAddr}
      {'...'}
      {backAddr}
    </S.ConnectedWalletButton>
  );
};

export default ConnectedWalletButton;

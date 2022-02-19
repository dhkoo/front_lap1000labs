import { useSelector } from 'react-redux';

import { RootState } from 'state';

import * as S from './style';

const ConnectedWalletButton = () => {
  const address = useSelector((state: RootState) => state.wallet.address);
  const name = useSelector((state: RootState) => state.wallet.name);
  const frontAddr = address.substring(0, 5);
  const backAddr = address.substring(address.length - 3, address.length);

  return (
    <S.ConnectedWalletButton>
      {name !== '' ? name : frontAddr + '...' + backAddr}
    </S.ConnectedWalletButton>
  );
};

export default ConnectedWalletButton;

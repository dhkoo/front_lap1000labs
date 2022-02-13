import * as walletReducer from 'state/wallet';

import * as S from './style';

const ConnectedWalletButton = ({ name, address }: walletReducer.WalletState) => {
  const frontAddr = address.substr(0, 5);
  const backAddr = address.substr(address.length - 4, 4);

  return (
    <S.WalletButton>
      {frontAddr}
      {'...'}
      {backAddr}
    </S.WalletButton>
  );
};

export default ConnectedWalletButton;

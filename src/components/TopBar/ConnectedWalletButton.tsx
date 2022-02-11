import * as walletReducer from 'state/wallet';

const ConnectedWalletButton = ({ name, address }: walletReducer.WalletState) => {
  const frontAddr = address.substr(0, 5);
  const backAddr = address.substr(address.length - 4, 4);

  return (
    <button>
      {frontAddr}
      {' ∙∙∙ '}
      {backAddr}
    </button>
  );
};

export default ConnectedWalletButton;

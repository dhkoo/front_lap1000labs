// State
export type WalletState = {
  walletType: string;
  address: string;
  name: string;
};

// actions
export const SET_WALLET = 'SET_WALLET' as const;

// action creators
export const setWallet = (walletType: string, address: string, name: string) => {
  return {
    type: SET_WALLET,
    walletType,
    address,
    name,
  };
};

// action type
type WalletAction = ReturnType<typeof setWallet>;

const initalState: WalletState = {
  walletType: '',
  address: '',
  name: '',
};

// Reducer
const reducer = (state: WalletState = initalState, action: WalletAction): WalletState => {
  switch (action.type) {
    case SET_WALLET: {
      return {
        ...state,
        walletType: action.walletType,
        address: action.address,
        name: action.name,
      };
    }
    default:
      return state;
  }
};

export default reducer;

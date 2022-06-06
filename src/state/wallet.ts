// State
export type WalletState = {
  walletType: string;
  address: string;
  name: string;
  alapId: string;
};

// actions
export const SET_WALLET = 'SET_WALLET' as const;

// action creators
export const setWallet = (walletType: string, address: string, name: string, alapId: string) => {
  return {
    type: SET_WALLET,
    walletType,
    address,
    name,
    alapId,
  };
};

// action type
type WalletAction = ReturnType<typeof setWallet>;

const initalState: WalletState = {
  walletType: '',
  address: '',
  name: '',
  alapId: '',
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
        alapId: action.alapId,
      };
    }
    default:
      return state;
  }
};

export default reducer;

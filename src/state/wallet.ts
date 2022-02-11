// State
export type WalletState = {
  name: string;
  address: string;
};

// actions
export const SET_WALLET = 'SET_WALLET' as const;

// action creators
export const setWallet = (name: string, address: string) => {
  return {
    type: SET_WALLET,
    name,
    address,
  };
};

// action type
type WalletAction = ReturnType<typeof setWallet>;

const initalState: WalletState = {
  name: '',
  address: '',
};

// Reducer
const reducer = (state: WalletState = initalState, action: WalletAction): WalletState => {
  switch (action.type) {
    case SET_WALLET: {
      return {
        ...state,
        name: action.name,
        address: action.address,
      };
    }
    default:
      return state;
  }
};

export default reducer;

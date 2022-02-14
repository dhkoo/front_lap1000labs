// State
export type txState = {
  txFlag: boolean;
};

// actions
export const TOGGLE_FLAG = 'TOGGLE_FLAG' as const;

// action creators
export const toggleFlag = () => {
  return {
    type: TOGGLE_FLAG,
  };
};

// action type
type TxAction = ReturnType<typeof toggleFlag>;

const initalState: txState = {
  txFlag: false,
};

// Reducer
const reducer = (state: txState = initalState, action: TxAction): txState => {
  switch (action.type) {
    case TOGGLE_FLAG: {
      return {
        ...state,
        txFlag: !state.txFlag,
      };
    }
    default:
      return state;
  }
};

export default reducer;

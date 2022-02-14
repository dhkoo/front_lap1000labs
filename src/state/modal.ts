import { ReactFragment } from 'react';

// State
export type ModalState = {
  enable: boolean;
  contents: undefined | (() => ReactFragment);
};

// actions
export const ENABLE_MODAL = 'ENABLE_MODAL' as const;

// action creators
export const enableModal = () => {
  return {
    type: ENABLE_MODAL,
  };
};

// action type
type ModalAction = ReturnType<typeof enableModal>;

const initalState: ModalState = {
  enable: false,
  contents: undefined,
};

// Reducer
const reducer = (state: ModalState = initalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case ENABLE_MODAL: {
      return {
        ...state,
        enable: !state.enable,
      };
    }
    default:
      return state;
  }
};

export default reducer;

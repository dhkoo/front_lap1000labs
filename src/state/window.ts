// State
type WindowState = {
  /* Width Level
   * 1280 ~      : 1280
   *  720 ~ 1279 : 720
   *      ~  719 : 300
   */
  widthLevel: number;
  /* ScreenGaurd Level
   * [caller] full modal = 5, modal = 4, subspace = 3, navbar = 2, none = 0
   */
  screenGuardLevel: number;
};

// Initial State
const initialState: WindowState = {
  widthLevel: 0,
  screenGuardLevel: 0,
};

// actions
const SET_WIDTH_LEVEL = 'SET_WIDTH_LEVEL' as const;
const SET_SCREENGUARD_LEVEL = 'SET_SCREENGUARD_LEVEL' as const;

// action creators
export const setWidthLevel = (widthLevel: number) => {
  return {
    type: SET_WIDTH_LEVEL,
    widthLevel,
  };
};

export const setScreenGuardLevel = (screenGuardLevel: number) => {
  return {
    type: SET_SCREENGUARD_LEVEL,
    screenGuardLevel,
  };
};

// action type
type WindowAction = ReturnType<typeof setWidthLevel | typeof setScreenGuardLevel>;

// Reducer
const reducer = (state: WindowState = initialState, action: WindowAction): WindowState => {
  switch (action.type) {
    case SET_WIDTH_LEVEL: {
      return {
        ...state,
        widthLevel: action.widthLevel,
      };
    }
    case SET_SCREENGUARD_LEVEL: {
      return {
        ...state,
        screenGuardLevel: action.screenGuardLevel,
      };
    }
    default:
      return state;
  }
};

// Export reducer by default
export default reducer;

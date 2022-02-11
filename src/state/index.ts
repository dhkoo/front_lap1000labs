import { combineReducers } from 'redux';
import walletReducer from './wallet';

const rootReducer = combineReducers({
  wallet: walletReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

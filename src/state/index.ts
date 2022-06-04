import { combineReducers } from 'redux';
import windowReducer from './window';
import walletReducer from './wallet';
import transactionReducer from './transaction';

const rootReducer = combineReducers({
  window: windowReducer,
  wallet: walletReducer,
  tx: transactionReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from 'redux';
import walletReducer from './wallet';
import transactionReducer from './transaction';

const rootReducer = combineReducers({
  wallet: walletReducer,
  tx: transactionReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

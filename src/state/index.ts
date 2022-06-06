import { combineReducers } from 'redux';
import windowReducer from './window';
import walletReducer from './wallet';
import transactionReducer from './transaction';

import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/es/storage/session';

const persistConfig: any = {
  key: 'root',
  storage: storageSession,
};

const rootReducer = combineReducers({
  window: windowReducer,
  wallet: persistReducer(persistConfig, walletReducer),
  tx: transactionReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

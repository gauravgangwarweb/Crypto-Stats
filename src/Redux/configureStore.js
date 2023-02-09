import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import coinReducer from './Reducer/coinReducer';

const store = configureStore({
  reducer: {
    coins: coinReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

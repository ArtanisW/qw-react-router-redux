import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './slice/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === 'dev') {
      return getDefaultMiddleware().concat(logger);
    } else {
      return getDefaultMiddleware();
    }
  },
});

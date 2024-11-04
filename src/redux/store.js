import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import profileReducer from './profileSlice';
import transactionReducer from './transactionSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    transaction: transactionReducer,
  },
});

export default store;

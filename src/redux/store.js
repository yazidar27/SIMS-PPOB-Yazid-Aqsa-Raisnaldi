// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Import reducer from authSlice
import profileReducer from './profileSlice'; // Import reducer from profileSlice
import transactionReducer from './transactionSlice'; // Import reducer from transactionSlice

// Configure store
const store = configureStore({
  reducer: {
    auth: authReducer, // Add reducer for authentication
    profile: profileReducer, // Add reducer for profile
    transaction: transactionReducer, // Add reducer for transactions
  },
});

export default store; // Export store

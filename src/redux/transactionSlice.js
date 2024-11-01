// src/redux/transactionSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch Transaction History
export const fetchTransactionHistory = createAsyncThunk(
  'transaction/fetchHistory',
  async (offset, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api-doc-tht.nutech-integrasi.com/history?offset=${offset}&limit=5`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'An error occurred'); // Provide a default error message
    }
  }
);

// Process Transaction
export const processTransaction = createAsyncThunk(
  'transaction/processTransaction',
  async (transactionData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://api-doc-tht.nutech-integrasi.com/transaction', transactionData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'An error occurred');
    }
  }
);

// Transaction slice
const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    transactions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionHistory.pending, (state) => {
        state.loading = true; // Set loading to true
        state.error = null; // Reset error
      })
      .addCase(fetchTransactionHistory.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false
        state.transactions = action.payload; // Store transactions
      })
      .addCase(fetchTransactionHistory.rejected, (state, action) => {
        state.loading = false; // Set loading to false
        state.error = action.payload; // Store error
      });
  },
});

export default transactionSlice.reducer; // Export reducer

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchTransactionHistory = createAsyncThunk(
  'transaction/fetchHistory',
  async (offset, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api-doc-tht.nutech-integrasi.com/history?offset=${offset}&limit=5`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'An error occurred');
    }
  }
);


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
        state.loading = true; 
        state.error = null;
      })
      .addCase(fetchTransactionHistory.fulfilled, (state, action) => {
        state.loading = false; 
        state.transactions = action.payload; 
      })
      .addCase(fetchTransactionHistory.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.payload;
      });
  },
});

export default transactionSlice.reducer;

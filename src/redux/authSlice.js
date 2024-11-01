// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance, { API_BASE_URL } from '../axiosInstance';

// Fungsi untuk melakukan registrasi pengguna
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('https://api-doc-tht.nutech-integrasi.com/registration', formData);
      return response.data; // Kembalikan data dari response
    } catch (error) {
      return rejectWithValue(error.response.data); // Kembalikan error
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });
      return response.data; // Kembalikan data dari response
    } catch (error) {
      return rejectWithValue(error.response.data.message); // Kembalikan pesan error
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Simpan informasi pengguna
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Simpan error
      });
  },
});

export default authSlice.reducer;

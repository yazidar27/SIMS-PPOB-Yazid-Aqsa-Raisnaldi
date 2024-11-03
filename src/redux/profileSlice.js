import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance, { API_BASE_URL } from '../axiosInstance';

// Action untuk mengambil profil pengguna
export const fetchUserProfile = createAsyncThunk(
  'profile/fetchUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_BASE_URL}/profile`);
      return response.data; // Kembalikan data profil
    } catch (error) {
      return rejectWithValue(error.response.data.message); // Kembalikan pesan error
    }
  }
);

// Action untuk mengambil saldo pengguna
export const fetchUserBalance = createAsyncThunk(
  'profile/fetchUserBalance',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_BASE_URL}/balance`);
      return response.data; // Kembalikan data saldo
    } catch (error) {
      return rejectWithValue(error.response.data.message); // Kembalikan pesan error
    }
  }
);

// Action untuk mengambil daftar layanan
export const fetchServices = createAsyncThunk(
  'profile/fetchServices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_BASE_URL}/services`);
      return response.data; // Kembalikan data layanan
    } catch (error) {
      return rejectWithValue(error.response.data.message); // Kembalikan pesan error
    }
  }
);

// Action untuk mengambil banner
export const fetchBanners = createAsyncThunk(
  'profile/fetchBanners',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_BASE_URL}/banner`);
      return response.data; // Kembalikan data banner
    } catch (error) {
      return rejectWithValue(error.response.data.message); // Kembalikan pesan error
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: {},
    balance: {},
    services: [],
    banners: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Simpan data pengguna
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Simpan error
      })
      .addCase(fetchUserBalance.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserBalance.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload; // Simpan data saldo
      })
      .addCase(fetchUserBalance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Simpan error
      })
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload; // Simpan data layanan
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Simpan error
      })
      .addCase(fetchBanners.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload; // Simpan data banner
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Simpan error
      });
  },
});

export default profileSlice.reducer;

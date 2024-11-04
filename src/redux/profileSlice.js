import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance, { API_BASE_URL } from '../axiosInstance';

export const fetchUserProfile = createAsyncThunk(
  'profile/fetchUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_BASE_URL}/profile`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (profileData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`${API_BASE_URL}/profile`, profileData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchUserBalance = createAsyncThunk(
  'profile/fetchUserBalance',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_BASE_URL}/balance`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchServices = createAsyncThunk(
  'profile/fetchServices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_BASE_URL}/services`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const fetchBanners = createAsyncThunk(
  'profile/fetchBanners',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${API_BASE_URL}/banner`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
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
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserBalance.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserBalance.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload;
      })
      .addCase(fetchUserBalance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchBanners.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload;
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export { fetchUserProfile, updateProfile, fetchUserBalance, fetchServices, fetchBanners };
export default profileSlice.reducer;

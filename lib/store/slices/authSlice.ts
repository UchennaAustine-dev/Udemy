import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  fullname: string;
  email: string;
  verified: boolean;
  image_link: string | null;
  roles: Array<{ name: string }>;
  categories: any[];
  wallet: any | null;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ data: User; token: string }>
    ) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCredentials, logout, setError, setLoading } = authSlice.actions;
export default authSlice.reducer; 
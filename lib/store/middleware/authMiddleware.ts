/* eslint-disable @typescript-eslint/no-explicit-any */
import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';
import { store } from '../store';
import { logout } from '../slices/authSlice';
import { baseApi } from '../api/baseApi';

export const authMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const status = (action.payload as any).status;

    // Handle 401 Unauthorized errors
    if (status === 401) {
      // Clear the auth state
      store.dispatch(logout());
      // Clear the API cache
      store.dispatch(baseApi.util.resetApiState());
    }
  }

  return next(action);
}; 
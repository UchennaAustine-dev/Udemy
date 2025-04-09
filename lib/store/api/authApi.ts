import { baseApi } from './baseApi';

interface SignUpRequest {
  confirm_password: string;
  email: string;
  fullname: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface VerifyEmailRequest {
  email: string;
  code: string;
}

interface AuthResponse {
  message: string;
  data: {
    fullname: string;
    email: string;
    id: string;
    verified: boolean;
    image_link: string | null;
    token: string;
    roles: Array<{ name: string }>;
    categories: string[];
    wallet: { balance: number } | null;
  };
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<AuthResponse, SignUpRequest>({
      query: (credentials) => ({
        url: '/auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    verifyEmail: builder.mutation<{ message: string }, VerifyEmailRequest>({
      query: (data) => ({
        url: '/auth/verify-email',
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
    getMe: builder.query<AuthResponse['data'], void>({
      query: () => ({
        url: '/auth/me',
        method: 'GET',
      }),
    }),
    refreshToken: builder.mutation<{ token: string }, void>({
      query: () => ({
        url: '/auth/refresh-token',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetMeQuery,
  useRefreshTokenMutation,
  useVerifyEmailMutation,
} = authApi; 
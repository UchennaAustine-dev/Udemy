import { baseApi } from './baseApi';
import { User } from './userApi';

interface Stats {
  totalUsers: number;
  totalCourses: number;
  totalModules: number;
  totalLessons: number;
  totalQuizzes: number;
}

interface UpdateUserRoleRequest {
  role: string;
}

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Admin endpoints
    getStats: builder.query<Stats, void>({
      query: () => '/admin/stats',
    }),
    getAdminUsers: builder.query<User[], void>({
      query: () => '/admin/users',
      providesTags: ['User'],
    }),
    updateUserRole: builder.mutation<
      User,
      { userId: string; body: UpdateUserRoleRequest }
    >({
      query: ({ userId, body }) => ({
        url: `/admin/users/${userId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    deleteUserAsAdmin: builder.mutation<void, string>({
      query: (userId) => ({
        url: `/admin/users/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetStatsQuery,
  useGetAdminUsersQuery,
  useUpdateUserRoleMutation,
  useDeleteUserAsAdminMutation,
} = adminApi; 
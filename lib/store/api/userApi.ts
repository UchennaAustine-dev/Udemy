import { baseApi } from './baseApi';
import { Course } from './courseApi';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface UpdateUserRequest {
  name?: string;
  email?: string;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // User endpoints
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      providesTags: ['User'],
    }),
    getUser: builder.query<User, string>({
      query: (id) => `/users/${id}`,
      providesTags: ['User'],
    }),
    updateUser: builder.mutation<User, { id: string; body: UpdateUserRequest }>({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
    getUserCourses: builder.query<Course[], string>({
      query: (id) => `/users/${id}/courses`,
      providesTags: ['Course'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetUserCoursesQuery,
} = userApi; 
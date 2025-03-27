import { baseApi } from './baseApi';

export interface Course {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface CreateCourseRequest {
  title: string;
  description: string;
}

interface UpdateCourseRequest {
  title?: string;
  description?: string;
}

interface Module {
  id: string;
  title: string;
  description: string;
  courseId: string;
  createdAt: string;
  updatedAt: string;
}

interface CreateModuleRequest {
  title: string;
  description: string;
}

interface UpdateModuleRequest {
  title?: string;
  description?: string;
}

interface Lesson {
  id: string;
  title: string;
  description: string;
  moduleId: string;
  createdAt: string;
  updatedAt: string;
}

interface CreateLessonRequest {
  title: string;
  content: string;
}

interface UpdateLessonRequest {
  title?: string;
  content?: string;
}

export const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Course endpoints
    createCourse: builder.mutation<Course, CreateCourseRequest>({
      query: (body) => ({
        url: '/courses',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Course'],
    }),
    getCourses: builder.query<Course[], void>({
      query: () => '/courses',
      providesTags: ['Course'],
    }),
    getCourse: builder.query<Course, string>({
      query: (id) => `/courses/${id}`,
      providesTags: ['Course'],
    }),
    updateCourse: builder.mutation<Course, { id: string; body: UpdateCourseRequest }>({
      query: ({ id, body }) => ({
        url: `/courses/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Course'],
    }),
    deleteCourse: builder.mutation<void, string>({
      query: (id) => ({
        url: `/courses/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Course'],
    }),

    // Module endpoints
    createModule: builder.mutation<Module, { courseId: string; body: CreateModuleRequest }>({
      query: ({ courseId, body }) => ({
        url: `/courses/${courseId}/modules`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Module'],
    }),
    getModules: builder.query<Module[], string>({
      query: (courseId) => `/courses/${courseId}/modules`,
      providesTags: ['Module'],
    }),
    getModule: builder.query<Module, { courseId: string; moduleId: string }>({
      query: ({ courseId, moduleId }) => `/courses/${courseId}/modules/${moduleId}`,
      providesTags: ['Module'],
    }),
    updateModule: builder.mutation<
      Module,
      { courseId: string; moduleId: string; body: UpdateModuleRequest }
    >({
      query: ({ courseId, moduleId, body }) => ({
        url: `/courses/${courseId}/modules/${moduleId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Module'],
    }),
    deleteModule: builder.mutation<void, { courseId: string; moduleId: string }>({
      query: ({ courseId, moduleId }) => ({
        url: `/courses/${courseId}/modules/${moduleId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Module'],
    }),

    // Lesson endpoints
    createLesson: builder.mutation<
      Lesson,
      { courseId: string; moduleId: string; body: CreateLessonRequest }
    >({
      query: ({ courseId, moduleId, body }) => ({
        url: `/courses/${courseId}/modules/${moduleId}/lessons`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Lesson'],
    }),
    getLessons: builder.query<Lesson[], { courseId: string; moduleId: string }>({
      query: ({ courseId, moduleId }) => `/courses/${courseId}/modules/${moduleId}/lessons`,
      providesTags: ['Lesson'],
    }),
    getLesson: builder.query<
      Lesson,
      { courseId: string; moduleId: string; lessonId: string }
    >({
      query: ({ courseId, moduleId, lessonId }) =>
        `/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`,
      providesTags: ['Lesson'],
    }),
    updateLesson: builder.mutation<
      Lesson,
      { courseId: string; moduleId: string; lessonId: string; body: UpdateLessonRequest }
    >({
      query: ({ courseId, moduleId, lessonId, body }) => ({
        url: `/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Lesson'],
    }),
    deleteLesson: builder.mutation<
      void,
      { courseId: string; moduleId: string; lessonId: string }
    >({
      query: ({ courseId, moduleId, lessonId }) => ({
        url: `/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Lesson'],
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useGetCoursesQuery,
  useGetCourseQuery,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
  useCreateModuleMutation,
  useGetModulesQuery,
  useGetModuleQuery,
  useUpdateModuleMutation,
  useDeleteModuleMutation,
  useCreateLessonMutation,
  useGetLessonsQuery,
  useGetLessonQuery,
  useUpdateLessonMutation,
  useDeleteLessonMutation,
} = courseApi; 
import { baseApi } from './baseApi';

interface Quiz {
  id: string;
  title: string;
  moduleId: string;
  createdAt: string;
  updatedAt: string;
}

interface CreateQuizRequest {
  title: string;
}

interface Question {
  id: string;
  question: string;
  quizId: string;
  createdAt: string;
  updatedAt: string;
}

interface CreateQuestionRequest {
  question: string;
  options: Array<{
    value: string;
    answer: boolean;
  }>;
}

interface UpdateQuestionRequest {
  question?: string;
  options?: Array<{
    value: string;
    answer: boolean;
  }>;
}

interface Option {
  id: string;
  value: string;
  answer: boolean;
  questionId: string;
  createdAt: string;
  updatedAt: string;
}

interface CreateOptionRequest {
  value: string;
  answer: boolean;
}

interface UpdateOptionRequest {
  value?: string;
  answer?: boolean;
}

export const quizApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Quiz endpoints
    createQuiz: builder.mutation<
      Quiz,
      { courseId: string; moduleId: string; body: CreateQuizRequest }
    >({
      query: ({ courseId, moduleId, body }) => ({
        url: `/courses/${courseId}/modules/${moduleId}/quiz`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Quiz'],
    }),
    getQuiz: builder.query<Quiz, { courseId: string; moduleId: string }>({
      query: ({ courseId, moduleId }) =>
        `/courses/${courseId}/modules/${moduleId}/quiz`,
      providesTags: ['Quiz'],
    }),
    deleteQuiz: builder.mutation<void, { courseId: string; moduleId: string }>({
      query: ({ courseId, moduleId }) => ({
        url: `/courses/${courseId}/modules/${moduleId}/quiz`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Quiz'],
    }),

    // Question endpoints
    createQuestion: builder.mutation<
      Question,
      {
        courseId: string;
        moduleId: string;
        quizId: string;
        body: CreateQuestionRequest;
      }
    >({
      query: ({ courseId, moduleId, quizId, body }) => ({
        url: `/courses/${courseId}/modules/${moduleId}/quiz/${quizId}/questions`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Quiz'],
    }),
    getQuestions: builder.query<
      Question[],
      { courseId: string; moduleId: string; quizId: string }
    >({
      query: ({ courseId, moduleId, quizId }) =>
        `/courses/${courseId}/modules/${moduleId}/quiz/${quizId}/questions`,
      providesTags: ['Quiz'],
    }),
    getQuestion: builder.query<
      Question,
      {
        courseId: string;
        moduleId: string;
        quizId: string;
        questionId: string;
      }
    >({
      query: ({ courseId, moduleId, quizId, questionId }) =>
        `/courses/${courseId}/modules/${moduleId}/quiz/${quizId}/questions/${questionId}`,
      providesTags: ['Quiz'],
    }),
    updateQuestion: builder.mutation<
      Question,
      {
        courseId: string;
        moduleId: string;
        quizId: string;
        questionId: string;
        body: UpdateQuestionRequest;
      }
    >({
      query: ({ courseId, moduleId, quizId, questionId, body }) => ({
        url: `/courses/${courseId}/modules/${moduleId}/quiz/${quizId}/questions/${questionId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Quiz'],
    }),
    deleteQuestion: builder.mutation<
      void,
      {
        courseId: string;
        moduleId: string;
        quizId: string;
        questionId: string;
      }
    >({
      query: ({ courseId, moduleId, quizId, questionId }) => ({
        url: `/courses/${courseId}/modules/${moduleId}/quiz/${quizId}/questions/${questionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Quiz'],
    }),

    // Option endpoints
    createOption: builder.mutation<
      Option,
      {
        courseId: string;
        moduleId: string;
        quizId: string;
        questionId: string;
        body: CreateOptionRequest;
      }
    >({
      query: ({ courseId, moduleId, quizId, questionId, body }) => ({
        url: `/courses/${courseId}/modules/${moduleId}/quiz/${quizId}/questions/${questionId}/options`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Quiz'],
    }),
    getOptions: builder.query<
      Option[],
      {
        courseId: string;
        moduleId: string;
        quizId: string;
        questionId: string;
      }
    >({
      query: ({ courseId, moduleId, quizId, questionId }) =>
        `/courses/${courseId}/modules/${moduleId}/quiz/${quizId}/questions/${questionId}/options`,
      providesTags: ['Quiz'],
    }),
    getOption: builder.query<
      Option,
      {
        courseId: string;
        moduleId: string;
        quizId: string;
        questionId: string;
        optionId: string;
      }
    >({
      query: ({ courseId, moduleId, quizId, questionId, optionId }) =>
        `/courses/${courseId}/modules/${moduleId}/quiz/${quizId}/questions/${questionId}/options/${optionId}`,
      providesTags: ['Quiz'],
    }),
    updateOption: builder.mutation<
      Option,
      {
        courseId: string;
        moduleId: string;
        quizId: string;
        questionId: string;
        optionId: string;
        body: UpdateOptionRequest;
      }
    >({
      query: ({ courseId, moduleId, quizId, questionId, optionId, body }) => ({
        url: `/courses/${courseId}/modules/${moduleId}/quiz/${quizId}/questions/${questionId}/options/${optionId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Quiz'],
    }),
    deleteOption: builder.mutation<
      void,
      {
        courseId: string;
        moduleId: string;
        quizId: string;
        questionId: string;
        optionId: string;
      }
    >({
      query: ({ courseId, moduleId, quizId, questionId, optionId }) => ({
        url: `/courses/${courseId}/modules/${moduleId}/quiz/${quizId}/questions/${questionId}/options/${optionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Quiz'],
    }),
  }),
});

export const {
  useCreateQuizMutation,
  useGetQuizQuery,
  useDeleteQuizMutation,
  useCreateQuestionMutation,
  useGetQuestionsQuery,
  useGetQuestionQuery,
  useUpdateQuestionMutation,
  useDeleteQuestionMutation,
  useCreateOptionMutation,
  useGetOptionsQuery,
  useGetOptionQuery,
  useUpdateOptionMutation,
  useDeleteOptionMutation,
} = quizApi; 
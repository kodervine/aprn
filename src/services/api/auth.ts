import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './endpoints';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Post', 'User'],
  endpoints: (builder) => ({
    getAuth: builder.query({
      query: () => 'products',
      providesTags: ['User'],
    }),
    addNewUser: builder.mutation({
      query: (newUser) => ({
        url: '/auth/login',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

// Docs - Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetAuthQuery, useAddNewUserMutation } = authApi;

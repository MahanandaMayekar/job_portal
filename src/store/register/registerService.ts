import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RegisterType } from "../../types/register/registerType";

export const registerApi = createApi({
  reducerPath: "RegisterApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    createUser: builder.mutation<RegisterType, RegisterType>({
      query: (registerObject) => ({
        url: "users",
        method: "POST",
        body: registerObject,
      }),
    }),
    getUserByEmail: builder.query<RegisterType[] | undefined, string>({
      query: (email) => `users?email=${email}`,
    }),
  }),
});

export const { useCreateUserMutation,useGetUserByEmailQuery } = registerApi;

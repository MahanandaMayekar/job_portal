import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { LoginResponseType } from '../../types/login/LoginTypes';
import type { LoginType } from '../../types/login/LoginTypes';
export const LoginApi = createApi({
    reducerPath: "LoginApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.escuelajs.co/api/v1/auth/",
        
    }),
    endpoints: (builder) => ({
        login: builder.mutation< LoginResponseType,LoginType>({
            query: (loginData) => ({
                url: "login",
                method: "POST",
                body: loginData,
                headers: {
                    'Content-Type': 'application/json',
                  },
               
            })
        })
          
      })
    })
    export const { useLoginMutation } = LoginApi
import { configureStore } from "@reduxjs/toolkit";
import { LoginApi } from "./login/LoginService";
import { registerApi } from "./register/registerService"
import authReducer from "./auth/AuthService";
import { jobApi } from "./jobs/jobService";
export const store = configureStore({
  reducer: {
    [LoginApi.reducerPath]: LoginApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(LoginApi.middleware)
      .concat(registerApi.middleware)
      .concat(jobApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

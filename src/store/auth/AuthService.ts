import { authInitialState } from "../../types/auth/AuthTypes";
import { createSlice} from "@reduxjs/toolkit";
import type { User } from "../../types/auth/AuthTypes";
import type { PayloadAction } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token=action.payload
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user=action.payload
        },
        clearAuth: (state) => {
            state.token = null,
                state.user=null
        }
    }
})

export const { setToken, setUser, clearAuth } = authSlice.actions
export default authSlice.reducer
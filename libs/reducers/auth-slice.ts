import { User } from "@/types/auth";
import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  isAuthenticated: boolean;
  userId: number | null;
  user: User | null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    userId: null,
    user: null,
  } as AuthState,
  reducers: {
    setAuthState: (state, action) => {
      const { isAuthenticated, token, userId, user } = action.payload;
      state.isAuthenticated = isAuthenticated;
      state.userId = userId;
      state.user = user;
    },
    clearAuthState: (state) => {
      state.isAuthenticated = false;
      state.userId = null;
      state.user = null;
    },
  },
});

export const { setAuthState, clearAuthState } = authSlice.actions;

export default authSlice.reducer;

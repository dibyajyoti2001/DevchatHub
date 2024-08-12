import { createSlice } from "@reduxjs/toolkit";
import { LocalStorage } from "../utils";

const initialState = {
  user: LocalStorage.get("user") || null,
  token: LocalStorage.get("token") || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, setToken, setLoading, setError, clearAuth } =
  authSlice.actions;
export default authSlice.reducer;

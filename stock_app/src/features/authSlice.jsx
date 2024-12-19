
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  token: "",
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user.username;
      state.token = payload.token;
    },

    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user.username; // Kayıt sonrası kullanıcı bilgisi
      state.token = payload.token; // Eğer token döndürülüyorsa
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },

    logoutSuccess: (state) => {
      state.user = ""; // Kullanıcı bilgisini temizle
      state.token = ""; // Token bilgisini temizle
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  registerSuccess,
  fetchFail,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;

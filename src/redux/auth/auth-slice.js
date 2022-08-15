import { createSlice } from '@reduxjs/toolkit';
import { signIn, logIn, logOut, getRefresh } from './auth-operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLogin: false,
  isRefreshed: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // [signIn.pending]: (state, { payload }) => {
    //   state.isLogin = false;
    // },
    // [signIn.rejected]: (state, { payload }) => {
    //   state.isLogin = false;
    // },
    [signIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
    },
    // [logIn.pending]: (state, { payload }) => {
    //   state.isLogin = false;
    // },
    // [logIn.rejected]: (state, { payload }) => {
    //   state.isLogin = false;
    // },
    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.token = '';
      state.user = { name: '', email: '' };
      state.isLogin = false;
    },
    [getRefresh.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLogin = true;
      // state.isRefreshed = false;
    },
    // [getRefresh.pending]: (state, { payload }) => {
    //   state.isRefreshed = true;
    // },
    [getRefresh.rejected]: (state, { payload }) => {
      state.token = '';
      // state.isRefreshed = false;
    },
  },
});

export default authSlice.reducer;

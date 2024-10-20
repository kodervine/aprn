import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  userID: string;
  userEmail: string;
  userToken: string | null;
}

const initialState = {
  userID: '',
  userEmail: '',
  userToken: null,
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setUserID: (state, action) => {
      state.userID = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
  },
});

export const { setUserEmail, setUserID, setUserToken } = authSlice.actions;

export default authSlice.reducer;

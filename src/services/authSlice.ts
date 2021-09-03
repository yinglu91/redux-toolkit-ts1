import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  name: string;
  age?: number;
  email: string;
}

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: { name: "", email: "" }
  // user: { name: "Ying", age: 30, email: "Lu" }
};


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = initialState.user
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
  color: string;
}

const initialState: ThemeState = {
  color: 'black'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;

import { configureStore} from '@reduxjs/toolkit';

import authSlice from '../services/authSlice'
import themeSlice from '../services/themeSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    theme: themeSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


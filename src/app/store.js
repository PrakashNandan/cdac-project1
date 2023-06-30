import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import empAuthSlice from '../features/empAuth/empAuthSlice';


export const store = configureStore({
  reducer: {
    auth:authReducer,
    empAuth:empAuthSlice
  },
});

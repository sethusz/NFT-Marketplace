import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import popUpReducer from './features/popupSlice'
export const store = configureStore ({
  reducer: {
        authReducer,
        popUpReducer
  }
});

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

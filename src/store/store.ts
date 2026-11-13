import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slice/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: import.meta.env.DEV,
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

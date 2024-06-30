import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Reducers/authSlice";
import { apiSlice } from "./Reducers/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

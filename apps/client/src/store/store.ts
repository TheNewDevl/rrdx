import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/auth";
import { userReducer } from "./features/user";

/**
 * Create the global store for the application using Redux Toolkit and passing in
 * the reducers for the application.
 * @see https://redux-toolkit.js.org/api/configureStore
 */
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

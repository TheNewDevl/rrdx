import { AuthState, LoginBody, RequestStateEnum } from "@rrdx-mono/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import Api from "../../api/axios";
import { fetchOrUpdateUser, userLogout } from "./user";
import { getLsItem, removeLsItem, setLsItem } from "@rrdx-mono/functions";

/** Create the initial state for the auth slice of the store */
const initialState: AuthState = {
  token: null,
  status: RequestStateEnum.VOID,
  error: null,
  remember: getLsItem("remember") ?? false,
};

export const fetchOrUpdateAuth = (credentials: LoginBody) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    //Retrieve the current status of the auth state
    const status = selectAuth(getState()).status;
    //If the status is pending or updating, we don't want to do anything because we don't want to make multiple requests at the same time
    if (status === RequestStateEnum.PENDING || status === RequestStateEnum.UPDATING) {
      return;
    }
    //Dispatch the action to set the status to pending or updating depending on the current status
    dispatch(actions.authFetching());
    try {
      //Run the login request
      const data = await Api.login(credentials);
      //Set the token in the Api class and in the state
      Api.requestToken = data.body.token;
      dispatch(actions.authResolved(data.body.token));
      //Chain fetchOrUpdateUser to fetch the user data
      await dispatch(fetchOrUpdateUser());
      //If the user wants to be remembered, we save the token in the local storage
      const remember = selectAuth(getState()).remember;
      if (remember) {
        setLsItem("token", data.body.token);
      }
    } catch (error: any) {
      console.log(error);
      //If the request fails, we dispatch the rejected action with the error message
      if (error.response) {
        dispatch(actions.authRejected(error.response.data?.message || error.message));
      } else {
        dispatch(
          actions.authRejected(
            error.message ??
              "Une erreur s'est produite avec le server. Réessayez plus tard ou contactez l'administrateur."
          )
        );
      }
    }
  };
};

/** If user checked remember, remove token from localStorage. Also dispatch authLogout and userLogout actions */
export const logout = (dispatch: AppDispatch, getState: () => RootState) => {
  const remember = selectAuth(getState()).remember;
  remember && removeLsItem("token");
  dispatch(actions.authLogout);
  dispatch(userLogout());
};

/** Auth slice */
const { actions, reducer: authReducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authFetching: (state) => {
      switch (state.status) {
        case RequestStateEnum.VOID: {
          state.status = RequestStateEnum.PENDING;
          break;
        }
        case RequestStateEnum.REJECTED: {
          state.status = RequestStateEnum.PENDING;
          state.error = null;
          break;
        }
        case RequestStateEnum.RESOLVED: {
          state.status = RequestStateEnum.UPDATING;
        }
      }
    },
    authResolved: (state, action: PayloadAction<string>) => {
      if (state.status === RequestStateEnum.PENDING || state.status === RequestStateEnum.UPDATING) {
        state.status = RequestStateEnum.RESOLVED;
        state.token = action.payload;
      }
    },
    authRejected: (state, action: PayloadAction<any>) => {
      if (state.status === RequestStateEnum.PENDING || state.status === RequestStateEnum.UPDATING) {
        state.status = RequestStateEnum.REJECTED;
        state.token = null;
        state.error = action.payload;
      }
    },
    authLogout: (state) => {
      return initialState;
    },
    authRemember: (state, action: PayloadAction<boolean>) => {
      state.remember = action.payload;
    },
    authSetToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { authResolved, authFetching, authRejected, authRemember, authSetToken } = actions;
export { authReducer };

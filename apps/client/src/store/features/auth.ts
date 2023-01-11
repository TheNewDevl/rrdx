import { AuthState, LoginBody, RequestStateEnum } from "@rrdx-mono/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import Api from "../../api/axios";
import { fetchOrUpdateUser, userLogout } from "./user";
import { getLsItem, removeLsItem, setLsItem } from "@rrdx-mono/functions";

const initialState: AuthState = {
  token: null,
  status: RequestStateEnum.VOID,
  error: null,
  remember: getLsItem("remember") ?? false,
};

export const fetchOrUpdateAuth = (credentials: LoginBody) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const status = selectAuth(getState()).status;
    if (status === RequestStateEnum.PENDING || status === RequestStateEnum.UPDATING) {
      return;
    }
    dispatch(actions.authFetching());
    try {
      const data = await Api.login(credentials);
      Api.requestToken = data.body.token;
      dispatch(actions.authResolved(data.body.token));
      await dispatch(fetchOrUpdateUser());
      const remember = selectAuth(getState()).remember;
      if (remember) {
        setLsItem("token", data.body.token);
      }
    } catch (error: any) {
      console.log(error);
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

export const logout = (dispatch: AppDispatch, getState: () => RootState) => {
  const remember = selectAuth(getState()).remember;
  remember && removeLsItem("token");
  dispatch(actions.authLogout);
  dispatch(userLogout());
};

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

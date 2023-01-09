import { AuthState, LoginBody, LoginResponse, RequestStateEnum } from "@rrdx-mono/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import axios from "../../api/axios";

const initialState: AuthState = {
  token: null,
  status: RequestStateEnum.VOID,
  error: null,
};

export const fetchOrUpdateAuth = (credentials: LoginBody) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const status = selectAuth(getState()).status;
    if (status === RequestStateEnum.PENDING || status === RequestStateEnum.UPDATING) {
      return;
    }
    dispatch(actions.authFetching());
    try {
      const { data } = await axios.post<LoginResponse>("user/login", credentials);
      dispatch(actions.authResolved(data.body.token));
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        dispatch(actions.authRejected(error.response.data?.message || error.message));
      } else {
        dispatch(
          actions.authRejected(
            error.message ??
              "Une erreur s'est produite avec le server. Réessayez plus tard ou contacter l'administrateur."
          )
        );
      }
    }
  };
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
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { authResolved, authFetching, authRejected } = actions;
export { authReducer };

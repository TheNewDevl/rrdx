import { ProfileResponse, RequestStateEnum, UpdateProfileBody, User, UserState } from "@rrdx-mono/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import axios from "../../api/axios";
import { selectAuth } from "./auth";

const initialState: UserState = {
  user: null,
  status: RequestStateEnum.VOID,
  error: null,
};

export const fetchOrUpdateUser = (credentials?: UpdateProfileBody) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const status = selectUser(getState()).status;
    if (status === RequestStateEnum.PENDING || status === RequestStateEnum.UPDATING) {
      return;
    }
    dispatch(actions.userFetching());
    try {
      const axiosMethod = credentials ? axios.put : axios.post;
      const { data } = await axiosMethod<ProfileResponse>("user/profile", credentials ?? {}, {
        headers: {
          Authorization: `Bearer ${selectAuth(getState()).token}`,
        },
      });
      credentials ? dispatch(actions.userUpdateResolved(data.body)) : dispatch(actions.userResolved(data.body));
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        dispatch(actions.userRejected(error.response.data?.message || error.message));
      } else {
        dispatch(
          actions.userRejected(
            error.message ??
              "Une erreur s'est produite avec le server. Réessayez plus tard ou contacter l'administrateur."
          )
        );
      }
    }
  };
};

const { actions, reducer: userReducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    userFetching: (state) => {
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
    userResolved: (state, action: PayloadAction<User>) => {
      if (state.status === RequestStateEnum.PENDING || state.status === RequestStateEnum.UPDATING) {
        state.status = RequestStateEnum.RESOLVED;
        state.user = action.payload;
      }
    },
    userRejected: (state, action: PayloadAction<any>) => {
      if (state.status === RequestStateEnum.PENDING || state.status === RequestStateEnum.UPDATING) {
        state.status = RequestStateEnum.REJECTED;
        state.user = null;
        state.error = action.payload;
      }
    },
    userUpdateResolved: (state, action: PayloadAction<User>) => {
      if (state.status === RequestStateEnum.PENDING || state.status === RequestStateEnum.UPDATING) {
        state.status = RequestStateEnum.RESOLVED;
        if (state.user) {
          state.user.firstName = action.payload.firstName;
          state.user.lastName = action.payload.lastName;
          state.user.updatedAt = action.payload.updatedAt;
        } else {
          state.user = action.payload;
        }
      }
    },
  },
});

export const selectUser = (state: RootState) => state.user;
export const { userFetching, userResolved, userRejected } = actions;
export { userReducer };

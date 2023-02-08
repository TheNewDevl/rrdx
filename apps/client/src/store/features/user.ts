import { RequestStateEnum, UpdateProfileBody, User, UserState } from "@rrdx-mono/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import Api from "../../api/axios";
import { selectAuth } from "./auth";

/** Create the initial state for the user slice of the store */
const initialState: UserState = {
  user: null,
  status: RequestStateEnum.VOID,
  error: null,
};

export const fetchOrUpdateUser = (credentials?: UpdateProfileBody) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    //Retrieve the current status of the user state
    const status = selectUser(getState()).status;
    //If the status is pending or updating, we don't want to do anything because we don't want to make multiple requests at the same time
    if (status === RequestStateEnum.PENDING || status === RequestStateEnum.UPDATING) {
      return;
    }
    //Dispatch the action to set the status to pending or updating depending on the current status
    dispatch(actions.userFetching());
    try {
      //If credentials are provided, we run the update request, otherwise we run the get request
      Api.requestToken = selectAuth(getState()).token;
      const data = credentials ? await Api.updateProfile(credentials) : await Api.getProfile();
      credentials ? dispatch(actions.userUpdateResolved(data.body)) : dispatch(actions.userResolved(data.body));
    } catch (error: any) {
      console.log(error);
      //If the request fails, we dispatch the rejected action with the error message
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

/** User slice */
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
    userLogout: (state) => {
      return initialState;
    },
  },
});

export const selectUser = (state: RootState) => state.user;
export const { userFetching, userResolved, userRejected, userUpdateResolved, userLogout } = actions;
export { userReducer };

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Dispatch } from "redux";

import { Request } from "../../types/auth/session";
import { UserData } from "../../types/redux/actions/user";
import { ClearErrorAction } from "../../types/redux/reducer";
import {
  AllUsersAction,
  AllUsersState,
  AuthAction,
  ForgotPasswordAction,
  ForgotPasswordState,
  LoadedUserAction,
  LoadedUserState,
  UserAction,
  UserDetailsAction,
  UserDetailsState,
  UserState,
} from "../../types/redux/reducer/user";
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  CLEAR_ERRORS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  ADMIN_USERS_REQUEST,
  ADMIN_USERS_SUCCESS,
  ADMIN_USERS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  UPDATE_USER_REQUEST,
  DELETE_USER_REQUEST,
} from "../constants/userConstants";

// Register user
export const registerUser =
  (registerData: UserData) => async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });

      const config: AxiosRequestConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/auth/register",
        registerData,
        config
      );

      dispatch({
        type: REGISTER_USER_SUCCESS,
      });
    } catch (error: any) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Load user
export const loadUser = () => async (dispatch: Dispatch<LoadedUserAction>) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data }: AxiosResponse<LoadedUserState> = await axios.get("/api/me");

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error: any) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Profile
export const updateProfile =
  (userData: UserData) => async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UPDATE_PROFILE_REQUEST });

      const config: AxiosRequestConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data }: AxiosResponse<UserState> = await axios.put(
        "/api/me/update",
        userData,
        config
      );

      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: data.isUpdated,
      });
    } catch (error: any) {
      dispatch({
        type: UPDATE_PROFILE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Forgot Password
export const forgotPassword =
  (email: string) => async (dispatch: Dispatch<ForgotPasswordAction>) => {
    try {
      dispatch({ type: FORGOT_PASSWORD_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data }: AxiosResponse<ForgotPasswordState> = await axios.post(
        "/api/password/forgot",
        email,
        config
      );

      const message = { message: data.message };

      dispatch({
        type: FORGOT_PASSWORD_SUCCESS,
        payload: message,
      });
    } catch (error: any) {
      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Reset Password
export const resetPassword =
  (token: string, password: string) =>
  async (dispatch: Dispatch<ForgotPasswordAction>) => {
    try {
      dispatch({ type: RESET_PASSWORD_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data }: AxiosResponse<ForgotPasswordState> = await axios.put(
        `/api/password/reset/${token}`,
        password,
        config
      );

      const success = { success: data.success };

      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: success,
      });
    } catch (error: any) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Display users
export const getAdminUsers =
  () => async (dispatch: Dispatch<AllUsersAction>) => {
    try {
      dispatch({ type: ADMIN_USERS_REQUEST });

      const { data }: AxiosResponse<AllUsersState> = await axios.get(
        `/api/admin/users`
      );

      dispatch({
        type: ADMIN_USERS_SUCCESS,
        payload: data.users,
      });
    } catch (error: any) {
      dispatch({
        type: ADMIN_USERS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Display user details
export const getUserDetails =
  (id: string) => async (dispatch: Dispatch<UserDetailsAction>) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST });

      const { data }: AxiosResponse<UserDetailsState> = await axios.get(
        `/api/admin/users/${id}`
      );

      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data.user,
      });
    } catch (error: any) {
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Update user details
export const updateUser =
  (id: string, userData: UserData) =>
  async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UPDATE_USER_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data }: AxiosResponse<UserState> = await axios.put(
        `/api/admin/users/${id}`,
        userData,
        config
      );

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: data.isUpdated,
      });
    } catch (error: any) {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Delete user
export const deleteUser =
  (id: string) => async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: DELETE_USER_REQUEST });

      const { data }: AxiosResponse<UserState> = await axios.delete(
        `/api/admin/users/${id}`
      );

      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: data.isDeleted,
      });
    } catch (error: any) {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Clear Errors
export const clearErrors =
  (req: Request) => async (dispatch: Dispatch<ClearErrorAction>) => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };

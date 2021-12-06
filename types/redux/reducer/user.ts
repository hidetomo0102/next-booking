import { User } from "../../model";
import { InitialState } from "./index";

export interface AuthState extends InitialState {
  success?: boolean;
}

export interface LoadedUserState extends InitialState {
  isAuthenticated?: boolean | null;
  user?: User | null;
}

export interface UserState extends InitialState {
  isUpdated?: boolean;
  isDeleted?: boolean;
}

export interface ForgotPasswordState extends InitialState {
  message?: string | null;
  success?: boolean | null;
}

export interface AllUsersState extends InitialState {
  users?: User[];
}

export interface UserDetailsState extends InitialState {
  user?: User | {};
}

export interface AuthAction {
  type:
    | "REGISTER_USER_REQUEST"
    | "REGISTER_USER_SUCCESS"
    | "REGISTER_USER_FAIL"
    | "CLEAR_ERRORS";
  payload?: boolean;
}

export interface LoadedUserAction {
  type:
    | "LOAD_USER_REQUEST"
    | "LOAD_USER_SUCCESS"
    | "LOAD_USER_FAIL"
    | "CLEAR_ERRORS";
  payload?: User | null;
}

export interface UserAction {
  type:
    | "UPDATE_PROFILE_REQUEST"
    | "UPDATE_PROFILE_SUCCESS"
    | "UPDATE_PROFILE_RESET"
    | "UPDATE_PROFILE_FAIL"
    | "UPDATE_USER_REQUEST"
    | "UPDATE_USER_SUCCESS"
    | "UPDATE_USER_RESET"
    | "UPDATE_USER_FAIL"
    | "DELETE_USER_REQUEST"
    | "DELETE_USER_SUCCESS"
    | "DELETE_USER_RESET"
    | "DELETE_USER_FAIL"
    | "CLEAR_ERRORS";
  payload?: boolean;
}

export interface ForgotPasswordAction {
  type:
    | "FORGOT_PASSWORD_REQUEST"
    | "FORGOT_PASSWORD_SUCCESS"
    | "FORGOT_PASSWORD_FAIL"
    | "RESET_PASSWORD_REQUEST"
    | "RESET_PASSWORD_SUCCESS"
    | "RESET_PASSWORD_FAIL"
    | "CLEAR_ERRORS";
  payload?: ForgotPasswordState;
}

export interface AllUsersAction {
  type:
    | "ADMIN_USERS_REQUEST"
    | "ADMIN_USERS_SUCCESS"
    | "ADMIN_USERS_FAIL"
    | "CLEAR_ERRORS";
  payload?: User[];
}

export interface UserDetailsAction {
  type:
    | "USER_DETAILS_REQUEST"
    | "USER_DETAILS_SUCCESS"
    | "USER_DETAILS_FAIL"
    | "CLEAR_ERRORS";
  payload?: User | {};
}

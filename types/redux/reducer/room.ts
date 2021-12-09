import { InitialState } from ".";
import { Review, Room } from "../../../types/model";

export interface AllRoomsState extends InitialState {
  rooms?: Room[];
  roomsCount?: number;
  resPerPage?: number;
  filteredRoomsCount?: number;
}

export interface RoomDetailsState extends InitialState {
  room?: Room | null;
}

export interface NewReviewState extends InitialState {
  success?: boolean;
}

export interface NewRoomState extends InitialState {
  success?: boolean;
  room?: Room | null;
}

export interface RoomState extends InitialState {
  isUpdated?: boolean;
  isDeleted?: boolean;
}

export interface CheckReviewState extends InitialState {
  isReviewAvailable?: boolean | null;
}

export interface RoomReviewsState extends InitialState {
  reviews?: Review[];
}

export interface ReviewState extends InitialState {
  isDeleted?: boolean;
}

export interface AllRoomsAction {
  type:
    | "ALL_ROOMS_SUCCESS"
    | "ALL_ROOMS_FAIL"
    | "ADMIN_ROOM_REQUEST"
    | "ADMIN_ROOM_SUCCESS"
    | "ADMIN_ROOM_FAIL"
    | "CLEAR_ERRORS";
  payload?: AllRoomsState;
}

export interface RoomDetailsAction {
  type: "ROOMS_DETAILS_SUCCESS" | "ROOMS_DETAILS_FAIL" | "CLEAR_ERRORS";
  payload?: Room | null;
}

export interface NewReviewAction {
  type:
    | "NEW_REVIEW_REQUEST"
    | "NEW_REVIEW_SUCCESS"
    | "NEW_REVIEW_RESET"
    | "NEW_REVIEW_FAIL"
    | "CLEAR_ERRORS";
  payload?: boolean;
}

export interface NewRoomAction {
  type:
    | "NEW_ROOM_REQUEST"
    | "NEW_ROOM_SUCCESS"
    | "NEW_ROOM_RESET"
    | "NEW_ROOM_FAIL"
    | "CLEAR_ERRORS";
  payload?: NewRoomState;
}

export interface RoomAction {
  type:
    | "UPDATE_ROOM_REQUEST"
    | "UPDATE_ROOM_SUCCESS"
    | "UPDATE_ROOM_RESET"
    | "UPDATE_ROOM_FAIL"
    | "DELETE_ROOM_REQUEST"
    | "DELETE_ROOM_SUCCESS"
    | "DELETE_ROOM_RESET"
    | "DELETE_ROOM_FAIL"
    | "CLEAR_ERRORS";
  payload?: boolean;
}

export interface CheckReviewAction {
  type:
    | "REVIEW_AVAILABILITY_REQUEST"
    | "REVIEW_AVAILABILITY_SUCCESS"
    | "REVIEW_AVAILABILITY_FAIL"
    | "CLEAR_ERRORS";
  payload?: boolean | null;
}

export interface RoomReviewsAction {
  type:
    | "GET_REVIEWS_REQUEST"
    | "GET_REVIEWS_SUCCESS"
    | "GET_REVIEWS_FAIL"
    | "CLEAR_ERRORS";
  payload?: RoomReviewsState;
}

export interface ReviewAction {
  type:
    | "DELETE_REVIEW_REQUEST"
    | "DELETE_REVIEW_SUCCESS"
    | "DELETE_REVIEW_RESET"
    | "DELETE_REVIEW_FAIL"
    | "CLEAR_ERRORS";
  payload?: boolean;
}

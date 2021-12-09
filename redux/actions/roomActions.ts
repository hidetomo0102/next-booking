import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Dispatch } from "hoist-non-react-statics/node_modules/@types/react";
import absoluteUrl from "next-absolute-url";

import { Request } from "../../types/auth/session";
import { Room } from "../../types/model";
import {
  GetRoomDetailsProps,
  GetRoomsProps,
  ReviewData,
} from "../../types/redux/actions/room";
import { ClearErrorAction } from "../../types/redux/reducer";
import {
  AllRoomsAction,
  AllRoomsState,
  NewRoomAction,
  NewRoomState,
  RoomAction,
  RoomState,
  CheckReviewAction,
  CheckReviewState,
  ReviewAction,
  ReviewState,
  RoomDetailsAction,
  RoomDetailsState,
  RoomReviewsAction,
  RoomReviewsState,
  NewReviewAction,
  NewReviewState,
} from "../../types/redux/reducer/room";

import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_FAIL,
  CLEAR_ERRORS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  REVIEW_AVAILABILITY_REQUEST,
  REVIEW_AVAILABILITY_SUCCESS,
  REVIEW_AVAILABILITY_FAIL,
  ADMIN_ROOM_REQUEST,
  ADMIN_ROOM_SUCCESS,
  ADMIN_ROOM_FAIL,
  NEW_ROOM_REQUEST,
  NEW_ROOM_SUCCESS,
  NEW_ROOM_FAIL,
  UPDATE_ROOM_REQUEST,
  UPDATE_ROOM_SUCCESS,
  UPDATE_ROOM_FAIL,
  DELETE_ROOM_REQUEST,
  DELETE_ROOM_SUCCESS,
  DELETE_ROOM_FAIL,
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
} from "../constants/roomConstants";

// Get all rooms
export const getRooms =
  (props: GetRoomsProps) =>
  async (dispatch: Dispatch<AllRoomsAction>): Promise<void> => {
    const { req, currentPage = 1, location, guests, category } = props;
    try {
      const { origin } = absoluteUrl(req);
      let link = `${origin}/api/rooms?page=${currentPage}&location=${location}`;

      if (guests) link = link.concat(`&guestCapacity=${guests}`);
      if (category) link = link.concat(`&category=${category}`);

      const { data }: AxiosResponse<AllRoomsState> = await axios.get(link);

      dispatch({
        type: ALL_ROOMS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ALL_ROOMS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// new Review
export const newRoom =
  (roomData: Room) => async (dispatch: Dispatch<NewRoomAction>) => {
    try {
      dispatch({ type: NEW_ROOM_REQUEST });

      const config: AxiosRequestConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data }: AxiosResponse<NewRoomState> = await axios.post(
        `/api/rooms`,
        roomData,
        config
      );

      dispatch({
        type: NEW_ROOM_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: NEW_ROOM_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// update Review
export const updateRoom =
  (id: string, roomData: Room) => async (dispatch: Dispatch<RoomAction>) => {
    try {
      dispatch({ type: UPDATE_ROOM_REQUEST });

      const config: AxiosRequestConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data }: AxiosResponse<RoomState> = await axios.put(
        `/api/rooms/${id}`,
        roomData,
        config
      );

      dispatch({
        type: UPDATE_ROOM_SUCCESS,
        payload: data.isUpdated,
      });
    } catch (error: any) {
      dispatch({
        type: UPDATE_ROOM_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// delete Review
export const deleteRoom =
  (id: string) => async (dispatch: Dispatch<RoomAction>) => {
    try {
      dispatch({ type: DELETE_ROOM_REQUEST });

      const { data }: AxiosResponse<RoomState> = await axios.delete(
        `/api/rooms/${id}`
      );

      dispatch({
        type: DELETE_ROOM_SUCCESS,
        payload: data.isDeleted,
      });
    } catch (error: any) {
      dispatch({
        type: DELETE_ROOM_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// new Review
export const newReview =
  (reviewData: ReviewData) => async (dispatch: Dispatch<NewReviewAction>) => {
    try {
      dispatch({ type: NEW_REVIEW_REQUEST });

      const config: AxiosRequestConfig = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data }: AxiosResponse<NewReviewState> = await axios.put(
        `/api/reviews`,
        reviewData,
        config
      );

      dispatch({
        type: NEW_REVIEW_SUCCESS,
        payload: data.success,
      });
    } catch (error: any) {
      dispatch({
        type: NEW_REVIEW_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// check Review
export const checkReviewAvailability =
  (roomId: string) => async (dispatch: Dispatch<CheckReviewAction>) => {
    try {
      dispatch({ type: REVIEW_AVAILABILITY_REQUEST });

      const { data }: AxiosResponse<CheckReviewState> = await axios.get(
        `/api/reviews/check_review_availability?roomId=${roomId}`
      );

      dispatch({
        type: REVIEW_AVAILABILITY_SUCCESS,
        payload: data.isReviewAvailable,
      });
    } catch (error: any) {
      dispatch({
        type: REVIEW_AVAILABILITY_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get room details
export const getRoomDetails =
  (props: GetRoomDetailsProps) =>
  async (dispatch: Dispatch<RoomDetailsAction>) => {
    const { req, id } = props;

    try {
      const { origin } = absoluteUrl(req);

      let url;

      if (req) {
        url = `${origin}/api/rooms/${id}`;
      } else {
        url = `api/rooms/${id}`;
      }

      const { data }: AxiosResponse<RoomDetailsState> = await axios.get(url);

      dispatch({
        type: ROOM_DETAILS_SUCCESS,
        payload: data.room,
      });
    } catch (error: any) {
      dispatch({
        type: ROOM_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get all rooms - ADMIN
export const getAdminRooms =
  () => async (dispatch: Dispatch<AllRoomsAction>) => {
    try {
      dispatch({ type: ADMIN_ROOM_REQUEST });

      const { data }: AxiosResponse<AllRoomsState> = await axios.get(
        `/api/admin/rooms`
      );

      const payload = { rooms: data.rooms };

      dispatch({
        type: ADMIN_ROOM_SUCCESS,
        payload: payload,
      });
    } catch (error: any) {
      dispatch({
        type: ADMIN_ROOM_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get room reviews
export const getRoomReviews =
  (id: string) => async (dispatch: Dispatch<RoomReviewsAction>) => {
    try {
      dispatch({ type: GET_REVIEWS_REQUEST });

      const { data }: AxiosResponse<RoomReviewsState> = await axios.get(
        `/api/reviews/?id=${id}`
      );

      const payload = { reviews: data.reviews };

      dispatch({
        type: GET_REVIEWS_SUCCESS,
        payload: payload,
      });
    } catch (error: any) {
      dispatch({
        type: GET_REVIEWS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Delete review
export const deleteReview =
  (id: string, roomId: string) => async (dispatch: Dispatch<ReviewAction>) => {
    try {
      dispatch({ type: DELETE_REVIEW_REQUEST });

      const { data }: AxiosResponse<ReviewState> = await axios.delete(
        `/api/reviews/?id=${id}&roomId=${roomId}`
      );

      dispatch({
        type: DELETE_REVIEW_SUCCESS,
        payload: data.isDeleted,
      });
    } catch (error: any) {
      dispatch({
        type: DELETE_REVIEW_FAIL,
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

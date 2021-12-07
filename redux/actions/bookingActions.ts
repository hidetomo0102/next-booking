import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Dispatch } from "hoist-non-react-statics/node_modules/@types/react";
import absoluteUrl from "next-absolute-url";
import { Request } from "../../types/auth/session";
import { GetBookingDetailsProps } from "../../types/redux/actions/booking";
import { ClearErrorAction } from "../../types/redux/reducer";

import {
  BookedDatesAction,
  BookedDatesState,
  BookingDeletedAction,
  BookingDeletedState,
  BookingDetailsAction,
  BookingDetailsState,
  BookingsAction,
  BookingsState,
  CheckBookingAction,
  CheckBookingState,
} from "../../types/redux/reducer/booking";
import {
  BOOKED_DATES_FAIL,
  BOOKED_DATES_SUCCESS,
  MY_BOOKINGS_SUCCESS,
  MY_BOOKINGS_FAIL,
  CHECK_BOOKING_FAIL,
  CHECK_BOOKING_REQUEST,
  CHECK_BOOKING_SUCCESS,
  BOOKING_DETAILS_SUCCESS,
  BOOKING_DETAILS_FAIL,
  ADMIN_BOOKINGS_REQUEST,
  ADMIN_BOOKINGS_SUCCESS,
  ADMIN_BOOKINGS_FAIL,
  DELETE_BOOKING_REQUEST,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_FAIL,
  CLEAR_ERRORS,
} from "../constants/bookingConstants";

// Check bookings
export const checkBooking =
  (roomId: string, checkInDate: string, checkOutDate: string) =>
  async (dispatch: Dispatch<CheckBookingAction>) => {
    try {
      dispatch({ type: CHECK_BOOKING_REQUEST });

      let link = `/api/bookings/check?roomId=${roomId}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`;

      const { data }: AxiosResponse<CheckBookingState> = await axios.get(link);

      dispatch({
        type: CHECK_BOOKING_SUCCESS,
        payload: data.isAvailable,
      });
    } catch (error: any) {
      dispatch({
        type: CHECK_BOOKING_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Check booked dates
export const getBookedDates =
  (id: string) => async (dispatch: Dispatch<BookedDatesAction>) => {
    try {
      const { data }: AxiosResponse<BookedDatesState> = await axios.get(
        `/api/bookings/check_booked_dates?roomId=${id}`
      );

      dispatch({
        type: BOOKED_DATES_SUCCESS,
        payload: data.bookedDates,
      });
    } catch (error: any) {
      dispatch({
        type: BOOKED_DATES_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Display all bookings of user
export const myBookings =
  (authCookie: string, req: Request) =>
  async (dispatch: Dispatch<BookingsAction>) => {
    try {
      const { origin } = absoluteUrl(req);

      const config: AxiosRequestConfig = {
        headers: {
          cookie: authCookie,
        },
      };

      const { data }: AxiosResponse<BookingsState> = await axios.get(
        `${origin}/api/bookings/me`,
        config
      );

      dispatch({
        type: MY_BOOKINGS_SUCCESS,
        payload: data.bookings,
      });
    } catch (error: any) {
      dispatch({
        type: MY_BOOKINGS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Display all bookings for admin
export const getAdminBookings =
  () => async (dispatch: Dispatch<BookingsAction>) => {
    try {
      dispatch({ type: ADMIN_BOOKINGS_REQUEST });

      const { data }: AxiosResponse<BookingsState> = await axios.get(
        `${origin}/api/admin/bookings`
      );

      dispatch({
        type: ADMIN_BOOKINGS_SUCCESS,
        payload: data.bookings,
      });
    } catch (error: any) {
      dispatch({
        type: ADMIN_BOOKINGS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Display booking details
export const getBookingDetails =
  (props: GetBookingDetailsProps) =>
  async (dispatch: Dispatch<BookingDetailsAction>) => {
    const { authCookie, req, id } = props;
    try {
      const { origin } = absoluteUrl(req);

      const config: AxiosRequestConfig = {
        headers: {
          cookie: authCookie,
        },
      };

      const { data }: AxiosResponse<BookingDetailsState> = await axios.get(
        `${origin}/api/bookings/${id}`,
        config
      );

      dispatch({
        type: BOOKING_DETAILS_SUCCESS,
        payload: data.booking,
      });
    } catch (error: any) {
      dispatch({
        type: BOOKING_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Delete booking
export const deleteBooking =
  (id: string) => async (dispatch: Dispatch<BookingDeletedAction>) => {
    try {
      dispatch({ type: DELETE_BOOKING_REQUEST });

      const { data }: AxiosResponse<BookingDeletedState> = await axios.delete(
        `/api/admin/bookings/${id}`
      );

      dispatch({
        type: DELETE_BOOKING_SUCCESS,
        payload: data.isDeleted,
      });
    } catch (error: any) {
      dispatch({
        type: DELETE_BOOKING_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Clear Errors
export const clearErrors =
  () => async (dispatch: Dispatch<ClearErrorAction>) => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };

import { Moment } from "moment";
import { Booking } from "../../../types/model";
import { InitialState } from "./index";

export type CheckBookingState = {
  available?: boolean | null;
} & InitialState;

export type BookedDatesState = {
  dates?: Moment[];
} & InitialState;

export type BookingsState = {
  bookings?: Booking[];
} & InitialState;

export type BookingDetailsState = {
  booking?: Booking | null;
} & InitialState;

export type BookingDeletedState = {
  isDeleted?: boolean;
} & InitialState;

export interface CheckBookingAction {
  type:
    | "CHECK_BOOKING_REQUEST"
    | "CHECK_BOOKING_SUCCESS"
    | "CHECK_BOOKING_RESET"
    | "CHECK_BOOKING_FAIL"
    | "CLEAR_ERRORS";
  payload: boolean | null;
}

export interface BookedDatesAction {
  type: "BOOKED_DATES_SUCCESS" | "BOOKED_DATES_FAIL" | "CLEAR_ERRORS";
  payload: Moment[];
}

export interface BookingsAction {
  type:
    | "MY_BOOKINGS_SUCCESS"
    | "MY_BOOKINGS_FAIL"
    | "ADMIN_BOOKINGS_REQUEST"
    | "ADMIN_BOOKINGS_SUCCESS"
    | "ADMIN_BOOKINGS_FAIL"
    | "CLEAR_ERRORS";
  payload: Booking[];
}

export interface BookingDetailsAction {
  type: "BOOKING_DETAILS_SUCCESS" | "BOOKING_DETAILS_FAIL" | "CLEAR_ERRORS";
  payload: Booking;
}

export interface BookingDeletedAction {
  type:
    | "DELETE_BOOKING_REQUEST"
    | "DELETE_BOOKING_SUCCESS"
    | "DELETE_BOOKING_RESET"
    | "DELETE_BOOKING_FAIL"
    | "CLEAR_ERRORS";
  payload: boolean;
}

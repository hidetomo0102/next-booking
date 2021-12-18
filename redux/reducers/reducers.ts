import {
  ActionFromReducersMapObject,
  CombinedState,
  combineReducers,
  Reducer,
  StateFromReducersMapObject,
} from "redux";
import { Action, Actions } from "../../types/redux/actions";
import { State } from "../../types/redux/reducer";
import { RootState } from "../../types/redux/store";

import {
  bookedDatesReducer,
  bookingDetailsReducer,
  bookingReducer,
  bookingsReducer,
  checkBookingReducer,
} from "./bookingReducers";
import {
  allRoomsReducer,
  checkReviewReducer,
  newReviewReducer,
  newRoomReducer,
  reviewReducer,
  roomDetailsReducer,
  roomReducer,
  roomReviewsReducer,
} from "./roomReducers";
import {
  authReducer,
  loadedUserReducer,
  userReducer,
  forgotPasswordReducer,
  allUsersReducer,
  userDetailsReducer,
} from "./userReducers";

export const reducers: Reducer<State> = combineReducers({
  allRooms: allRoomsReducer,
  newRoom: newRoomReducer,
  roomDetails: roomDetailsReducer,
  room: roomReducer,
  auth: authReducer,
  loadedUser: loadedUserReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  checkBooking: checkBookingReducer,
  bookedDates: bookedDatesReducer,
  bookings: bookingsReducer,
  booking: bookingReducer,
  bookingDetails: bookingDetailsReducer,
  newReview: newReviewReducer,
  checkReview: checkReviewReducer,
  roomReviews: roomReviewsReducer,
  review: reviewReducer,
});

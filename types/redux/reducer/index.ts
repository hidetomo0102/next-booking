import {
  BookedDatesState,
  BookingDeletedState,
  BookingDetailsState,
  BookingsState,
  CheckBookingState,
} from "./booking";
import {
  AllRoomsState,
  CheckReviewState,
  NewReviewState,
  NewRoomState,
  ReviewState,
  RoomDetailsState,
  RoomReviewsState,
  RoomState,
} from "./room";
import {
  AllUsersState,
  AuthState,
  ForgotPasswordState,
  LoadedUserState,
  UserDetailsState,
  UserState,
} from "./user";

export interface InitialState {
  loading?: boolean;
  error?: any | null;
}

export interface ClearErrorAction {
  type: "CLEAR_ERRORS";
}

export interface State {
  allRooms: AllRoomsState;
  newRoom: NewRoomState;
  roomDetails: RoomDetailsState;
  room: RoomState;
  auth: AuthState;
  loadedUser: LoadedUserState;
  allUsers: AllUsersState;
  userDetails: UserDetailsState;
  user: UserState;
  forgotPassword: ForgotPasswordState;
  checkBooking: CheckBookingState;
  bookedDates: BookedDatesState;
  bookings: BookingsState;
  booking: BookingDeletedState;
  bookingDetails: BookingDetailsState;
  newReview: NewReviewState;
  checkReview: CheckReviewState;
  roomReviews: RoomReviewsState;
  review: ReviewState;
}

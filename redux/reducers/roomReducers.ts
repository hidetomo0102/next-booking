import {
  AllRoomsAction,
  AllRoomsState,
  CheckReviewState,
  NewReviewState,
  NewReviewAction,
  NewRoomState,
  ReviewState,
  RoomDetailsAction,
  RoomDetailsState,
  RoomReviewsState,
  RoomState,
  NewRoomAction,
  RoomAction,
  CheckReviewAction,
  RoomReviewsAction,
  ReviewAction,
} from "../../types/redux/reducer/room";
import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_RESET,
  REVIEW_AVAILABILITY_REQUEST,
  REVIEW_AVAILABILITY_SUCCESS,
  REVIEW_AVAILABILITY_FAIL,
  ADMIN_ROOM_REQUEST,
  ADMIN_ROOM_SUCCESS,
  ADMIN_ROOM_FAIL,
  NEW_ROOM_REQUEST,
  NEW_ROOM_SUCCESS,
  NEW_ROOM_FAIL,
  NEW_ROOM_RESET,
  CLEAR_ERRORS,
  UPDATE_ROOM_REQUEST,
  UPDATE_ROOM_SUCCESS,
  UPDATE_ROOM_RESET,
  UPDATE_ROOM_FAIL,
  DELETE_ROOM_REQUEST,
  DELETE_ROOM_SUCCESS,
  DELETE_ROOM_RESET,
  DELETE_ROOM_FAIL,
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_RESET,
  DELETE_REVIEW_FAIL,
} from "../constants/roomConstants";

// All rooms Reducer
export const allRoomsReducer = (
  state: AllRoomsState = { rooms: [] },
  action: AllRoomsAction
): AllRoomsState => {
  switch (action.type) {
    case ADMIN_ROOM_REQUEST:
      return {
        loading: true,
      };
    case ALL_ROOMS_SUCCESS:
      return {
        roomsCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms,
      };
    case ADMIN_ROOM_SUCCESS:
      return {
        loading: false,
        rooms: action.payload.rooms,
      };
    case ALL_ROOMS_FAIL:
    case ADMIN_ROOM_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Room details Reducer
export const roomDetailsReducer = (
  state: RoomDetailsState = { room: null },
  action: RoomDetailsAction
): RoomDetailsState => {
  switch (action.type) {
    case ROOM_DETAILS_SUCCESS:
      return {
        room: action.payload,
      };
    case ROOM_DETAILS_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Room review Reducer
export const newReviewReducer = (
  state: NewReviewState = {},
  action: NewReviewAction
): NewReviewState => {
  switch (action.type) {
    case NEW_REVIEW_REQUEST:
      return {
        loading: true,
      };
    case NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
      };
    case NEW_REVIEW_RESET:
      return {
        success: false,
      };
    case NEW_REVIEW_FAIL:
      return {
        loading: false,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// New room Reducer
export const newRoomReducer = (
  state: NewRoomState = { room: null },
  action: NewRoomAction
): NewRoomState => {
  switch (action.type) {
    case NEW_ROOM_REQUEST:
      return {
        loading: true,
      };
    case NEW_ROOM_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        room: action.payload.room,
      };
    case NEW_ROOM_RESET:
      return {
        success: false,
      };
    case NEW_ROOM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Room Reducer
export const roomReducer = (
  state: RoomState = {},
  action: RoomAction
): RoomState => {
  switch (action.type) {
    case UPDATE_ROOM_REQUEST:
    case DELETE_ROOM_REQUEST:
      return {
        loading: true,
      };
    case UPDATE_ROOM_SUCCESS:
      return {
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_ROOM_SUCCESS:
      return {
        loading: false,
        isDeleted: action.payload,
      };
    case UPDATE_ROOM_RESET:
      return {
        loading: false,
        isUpdated: false,
      };
    case DELETE_ROOM_RESET:
      return {
        loading: false,
        isDeleted: false,
      };
    case UPDATE_ROOM_FAIL:
    case DELETE_ROOM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// check review availability
export const checkReviewReducer = (
  state: CheckReviewState = { reviewAvailable: null },
  action: CheckReviewAction
): CheckReviewState => {
  switch (action.type) {
    case REVIEW_AVAILABILITY_REQUEST:
      return {
        loading: true,
      };

    case REVIEW_AVAILABILITY_SUCCESS:
      return {
        loading: false,
        reviewAvailable: action.payload,
      };

    case REVIEW_AVAILABILITY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// Room Review Reducer
export const roomReviewsReducer = (
  state: RoomReviewsState = { reviews: [] },
  action: RoomReviewsAction
): RoomReviewsState => {
  switch (action.type) {
    case GET_REVIEWS_REQUEST:
      return {
        loading: true,
      };
    case GET_REVIEWS_SUCCESS:
      return {
        loading: false,
        reviews: action.payload.reviews,
      };
    case GET_REVIEWS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// review Reducer
export const reviewReducer = (
  state: ReviewState = {},
  action: ReviewAction
): ReviewState => {
  switch (action.type) {
    case DELETE_REVIEW_REQUEST:
      return {
        loading: true,
      };

    case DELETE_REVIEW_SUCCESS:
      return {
        loading: false,
        isDeleted: action.payload,
      };

    case DELETE_REVIEW_RESET:
      return {
        loading: false,
        isDeleted: false,
      };

    case DELETE_REVIEW_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

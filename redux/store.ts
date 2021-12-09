import { createWrapper, HYDRATE } from "next-redux-wrapper";
import {
  AnyAction,
  applyMiddleware,
  CombinedState,
  createStore,
  Middleware,
  Reducer,
  ReducersMapObject,
  Store,
  StoreCreator,
  StoreEnhancer,
} from "redux";
import thunkMiddleware from "redux-thunk";
import { RootState } from "../types/redux/store";

import { reducers } from "./reducers/reducers";

const bindMiddleware = (
  middlewares: Middleware[]
): StoreEnhancer<{ dispatch: Middleware }> => {
  if (process.env.NODE_ENV === "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middlewares));
  }

  return applyMiddleware(...middlewares);
};

// FIXME: reducersを変えたら↓のstateなどの型定義やる
const reducer = (state: RootState, action: AnyAction): Reducer => {
  if (action.type === HYDRATE) {
    const nextState: Reducer = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return reducers(state, action);
  }
};

const initStore = (): StoreCreator => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);

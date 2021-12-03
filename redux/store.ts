import { createWrapper, HYDRATE } from "next-redux-wrapper";
import {
  AnyAction,
  applyMiddleware,
  CombinedState,
  createStore,
  Middleware,
  ReducersMapObject,
  Store,
  StoreEnhancer,
} from "redux";
import thunkMiddleware from "redux-thunk";

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
const reducer = (
  state: any,
  action: AnyAction
): ReducersMapObject | CombinedState<any> => {
  if (action.type === HYDRATE) {
    const nextState: ReducersMapObject = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return reducers(state, action);
  }
};

const initStore = (): Store => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper, Context } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const componseEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  componseEnhancers(applyMiddleware(thunk))
);

const makeStore = (context: Context) => {
  return store;
};

export const wrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

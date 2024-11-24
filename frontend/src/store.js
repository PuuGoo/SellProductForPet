import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import productReducer from "./reducers/productReducers";

const store = createStore(
  productReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;

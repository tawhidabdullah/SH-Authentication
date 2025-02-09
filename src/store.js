import {
  createStore,
  applyMiddleware,
  compose
} from "redux";
import thunk from "redux-thunk";

// import the root reducer
import rootReducer from "./reducers";

// initial state of store
const initialState = {};

// middleware
const middleware = [thunk];

// cre reducers , initial state , middleware
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    // @ts-ignore 
    window.__REDUX_DEVTOOLS_EXTENSION__ ?
      // @ts-ignore 
      window.__REDUX_DEVTOOLS_EXTENSION__() :
      // @ts-ignore 
      f => f

  )
);

export default store;
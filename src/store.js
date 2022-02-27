import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
//import data from "./data";
import { userSigninReducer } from "./reducers/userReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

// const reducer = (state, action) => {
//   return { products: data.products };
// };

const reducer = combineReducers({
  userSignin: userSigninReducer,
});

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

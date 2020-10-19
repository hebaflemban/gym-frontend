import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

// Actions
import { fetchAuthors, fetchBooks, fetchBookings, checkForExpiredToken } from "./actions";
import userReducer from "./reducers/user";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkForExpiredToken())
if (userReducer){
store.dispatch(fetchAuthors());
store.dispatch(fetchBooks());
store.dispatch(fetchBookings())
}

export default store;

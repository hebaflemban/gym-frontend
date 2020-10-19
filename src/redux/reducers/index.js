import { combineReducers } from "redux";

// Reducers
import authorsReducer from "./authors";
import booksReducer from "./books";
import userReducer from "./user";
import bookingsReducer from "./bookings"

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
  user: userReducer,
  bookings: bookingsReducer
});

export default rootReducer;

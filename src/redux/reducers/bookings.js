import { BOOK_CLASS, SET_BOOKINGS } from "../actions";

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKINGS:
            const bookings = action.payload;
            return bookings;

        case BOOK_CLASS:
            const newBooking = action.payload;
            return [...state, newBooking];

        default:
            return state;
    }
};

export default reducer;

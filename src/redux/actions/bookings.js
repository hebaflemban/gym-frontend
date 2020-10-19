import {SET_BOOKINGS, BOOK_CLASS} from "./actionTypes";

import instance from "./instance";

export const fetchBookings = () => async dispatch => {
    try {
        const res = await instance.get("/bookings/");
        const bookings = res.data;
        dispatch({
            type: SET_BOOKINGS,
            payload: bookings
        });
    } catch (error) {
        console.error(error);
    }
};

export const postBooking = (gymClass) => async dispatch => {
    try {
        console.log("PostBooking")
        const res = await instance.post("/bookings/create/", gymClass);
        const newBooking = res.data;
        console.log("PostBooking2")
        dispatch({
            type: BOOK_CLASS,
            payload: newBooking
        });
    } catch (error) {
        console.error(error.response.data);
    }
};
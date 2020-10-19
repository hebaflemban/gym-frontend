import decode from 'jwt-decode'
import instance from './instance'
import {SET_CURRENT_USER} from './actionTypes';
import Cookies from 'js-cookie';
import {fetchAuthors} from "./authors";
import {fetchBooks} from "./books";
import {fetchBookings} from "./bookings";

export const login = userData => {
    return async dispatch => {
        try {
            const res = await instance.post('/login/', userData);
            const {access} = res.data
            dispatch(setCurrentUser(access));
        } catch (err) {
            console.error(err);
        }
    }
}

export const signup = (userData) => {
    return async dispatch => {
        try{
            const res = await instance.post('/signup/',userData)
            const {access} = res.data;
            console.log(access)
            dispatch(setCurrentUser(access));
        } catch (err) {
            console.error(err)
        }
    }
}

const setAuthToken = token => {
    if (token) {
        Cookies.set("token", token);
        console.log("in setAuth", token)
        instance.defaults.headers.Authorization = `Bearer ${token}`;
    }
    else {
        delete instance.defaults.headers.Authorization;
        Cookies.remove("token")
    }
}

const setCurrentUser = (token) => {
    setAuthToken(token)
    const user = token ? decode(token) : null;
    console.log("in setCurrent2", user)
    fetchAuthors()
    fetchBooks()
    fetchBookings()
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}
export const logout = () => setCurrentUser();

export const checkForExpiredToken = () => {
    const token = Cookies.get("token");
    if (token) {
        const currentTimeInSeconds = Date.now() / 1000;
        const user = decode(token);
        if (user.exp >= currentTimeInSeconds) {
            return setCurrentUser(token);
        }
    }
    return setCurrentUser();
}

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    CLICKED,
} from '../Types';

export default (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                userData: {
                    email: payload
                },
                isLogin: true,
                loading: false,
            };

        case "USER_LOADED":
            return {
                ...state,
                isLogin: true,
                loading: false,
                userData: payload,
            };

        case "CLICKED":
            return {
                ...state,
                isLogin: true,
                // clickedResult: payload
            };

        case "TESTING":
            return {
                ...state,
                isLogin: true,
                // clickedResult: payload
            };


        case "REGISTER_FAIL":
        case "AUTH_ERROR":
        case "LOGIN_FAIL":
        case "LOGOUT":
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isLogin: false,
                loading: false,
                userData: null,
                error: action.payload,
            };
        default:
            throw new Error;;;
    }
};
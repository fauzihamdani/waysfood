import React, { useReducer } from 'react';

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import { API, setAuthToken } from "../../components/config/api";

const AuthState = (children) => {

    const initialState = {
        token: localStorage.getItem('token'),
        isLogin: false,
        loading: true,
        error: null,
        userData: null,
    };
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Load User
    const loadUser = async () => {
        const token = setAuthToken(localStorage.token);
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const response = await API.get('/check-auth', config);
            if (response.status === 401) {
                return dispatch({ type: "AUTH_ERROR" });
            }
            dispatch({
                type: "USER_LOADED",
                payload: response.data.data.user,

            });
        } catch (err) {
            dispatch({ type: "AUTH_ERROR" });
            console.log(err);
        }
    };

    const login = async formData => {

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const res = await API.post('/user-login', formData, config);

            dispatch({
                type: "LOGIN_SUCCESS",
                payload: res.data.data.user,
            });
        } catch (err) {
            console.log(err);
            dispatch({
                type: "LOGIN_FAIL",
                payload: "err.response.data.msg", //<< response error from server
            });
            loadUser();
        }
    };

    const logout = async dataR => {
        dispatch({
            type: "LOGOUT",
        });
    };

    const register = async formData => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const res = await API.post('/user', formData, config);
            dispatch({
                type: "REGISTER_SUCCESS",
                payload: formData,
            });
        } catch (error) {
            dispatch({ type: "REGISTER_FAIL", payload: error.res });
        }
    };


    return (
        <AuthContext.Provider
            value={{
                isLogin: state.isLogin,
                token: state.token,
                loading: state.loading,
                userData: state.userData,
                loadUser,
                login,
                logout,
                register,
            }}>
            {children.children}
        </AuthContext.Provider>
    );
};

export default AuthState;

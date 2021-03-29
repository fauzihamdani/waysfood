import React, { useReducer } from 'react';


import PartnerReducer from "./partnerReducer";
import PartnerContext from "./partnerContext";

import { API } from '../../components/config/api';

const PartnerState = (children) => {

    const initialState = {
        nearRestaurant: null,
        restaurantMenu: null,
        restaurantId: null,
        errorPartner: null
    };

    const [state, dispatch] = useReducer(PartnerReducer, initialState);


    const getNearRestaurant = async () => {

        try {
            const getDataNearRestaurant = await API.get('/user-partner');

            dispatch({
                type: "GET_NEAR_RESTAURANT",
                payload: getDataNearRestaurant.data.data.users
            });
        } catch (error) {
            console.log(error);
        }
    };

    // getRestaurant Menu
    const getRestaurantMenu = async id => {
        // const id = 1;
        try {
            const getDataRestaurantMenu = await API.get(`/products-by-partner/${id}`);

            dispatch({
                type: "GET_RESTAURANT_MENU",
                payload: getDataRestaurantMenu.data.data
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getRestaurantId = async id => {
        try {
            const getDataRestaurantMenu = await API.get(`/products-by-partner/${id}`);

            dispatch({
                type: "GET_RESTAURANT_ID",
                payload: getDataRestaurantMenu.data.data
            });
        } catch (error) {
            console.log(error);
        }
    };

    // add menu restaurant
    const addMenu = async formData => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };
            const res = await API.post('/add-product', formData, config);
            dispatch({
                type: "ADD_MENU_SUCCESS",
                payload: formData,
            });
        } catch (error) {
            dispatch({ type: "ADD_MENU_FAIL", payload: error.res });
        }
    };

    return (
        <PartnerContext.Provider
            value={{
                getNearRestaurant,
                getRestaurantMenu,
                getRestaurantId,
                addMenu,
                nearRestaurant: state.nearRestaurant,
                restaurantMenu: state.restaurantMenu,
                restaurantId: state.restaurantId,
                errorPartner: state.errorPartner
            }}>
            {children.children}
        </PartnerContext.Provider>
    );
};

export default PartnerState;

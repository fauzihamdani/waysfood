import React, { useReducer } from 'react';

import ProductContext from "./authContext";
import ProductReducer from "./authReducer";

import { API, setAuthToken } from "../../components/config/api";

const ProductState = (children) => {

    const initialState = {
        product: null
    };
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    // Load User
    const addProduct = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const response = await API.post('/add-product', formData, config);
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

    return (
        <ProductContext.Provider
            value={{
                product: state.product
            }}>
            {children.children}
        </ProductContext.Provider>
    );
};

export default ProductState;

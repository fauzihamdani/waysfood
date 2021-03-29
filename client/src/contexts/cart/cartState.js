import React, { useReducer } from 'react';


import CartReducer from "./cartReducer";
import CartContext from "./cartContext";

import axios from 'axios';

const CartState = (children) => {

    const initialState = {
        cart: []
    };
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addProductToCart = (menu) => {
        dispatch({
            type: "ADD_CART",
            payload: menu
        });
    };

    const loginSuccess = () => {
        dispatch({
            type: "LOGIN_SUCCESS"
        });
    };

    const removeProductFromCart = (id) => {
        dispatch({
            type: "REMOVE_CART",
            payload: {
                id,
            }
        });
    };

    const increaseQty = (id) => {
        dispatch({
            type: "INCREASE_QTY",
            payload: {
                id
            }
        });
    };

    const decreaseQty = (id) => {
        dispatch({
            type: "DECREASE_QTY",
            payload: {
                id
            }
        });
    };
    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                addProductToCart,
                loginSuccess,
                decreaseQty,
                increaseQty,
                removeProductFromCart
            }}>
            {children.children}
        </CartContext.Provider>
    );
};

export default CartState;

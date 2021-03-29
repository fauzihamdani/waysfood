export default (state, action) => {

    const { type, payload } = action;

    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLogin: true
            };

        case "ADD_CART":
            const findProductById = state.cart.find(cartItem => cartItem.id === payload.id);

            if (findProductById) {
                const updatedCart = state.cart.map((cartItem) =>
                    cartItem.id === payload.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
                );

                return { ...state, cart: updatedCart };
            }

            return {
                ...state,
                cart: [...state.cart, { ...payload, qty: 1 }]
            };

        case "REMOVE_CART":
            const filteredCartItem = state.cart.filter(
                (cartItem) => cartItem.id !== payload.id
            );
            return {
                ...state,
                cart: filteredCartItem
            };

        case "INCREASE_QTY":
            const updatedCart = state.cart.map((cartItem) =>
                cartItem.id === payload.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
            );
            return { ...state, cart: updatedCart };

        case "DECREASE_QTY":
            const decreasedCart = state.cart.map((cartItem) =>
                cartItem.id === payload.id ? { ...cartItem, qty: cartItem.qty - 1 } : cartItem
            );
            return { ...state, cart: decreasedCart };
        default:
            throw new Error;
    }
};
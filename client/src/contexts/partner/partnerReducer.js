export default (state, action) => {

    const { type, payload } = action;

    switch (action.type) {
        case "GET_NEAR_RESTAURANT":
            return {
                ...state,
                nearRestaurant: payload,
                loading: false,
            };
        case "GET_RESTAURANT_MENU":
            return {
                ...state,
                restaurantMenu: payload,
                loading: false,
            };

        case "GET_RESTAURANT_ID":
            return {
                restaurantId: payload,
                loading: false,
            };

        case "ADD_MENU_SUCCESS":
            return {
                ...state,
                restaurantMenu: [...state.restaurantMenu, payload],
                loading: false,
            };

        case "ADD_MENU_FAIL":
            return {
                ...state,
                errorPartner: payload,
            };
        default:
            throw new Error;
    }
};
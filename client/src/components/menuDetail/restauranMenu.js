import React, { useState, useEffect, useContext, Fragment } from 'react';
import { useParams } from "react-router-dom";
import { Row, Container } from 'react-bootstrap';
import CartContext from "../../contexts/cart/cartContext";
import MenuCard from './menuCard';
import PartnerContext from '../../contexts/partner/partnerContext';

const RestauranMenu = () => {


    const cartContext = useContext(CartContext);
    const { addProductToCart, cart } = cartContext;

    // calling partner context
    const partnerContext = useContext(PartnerContext);

    const { loading, restaurantMenu, getRestaurantMenu, restaurantId } = partnerContext;

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        getRestaurantMenu(restaurantId);
    }, []);

    // check loading & restaurantMenu data
    if (restaurantMenu === null) {
        return <h4>There are no Products</h4>;
    }
    return (
        <Fragment>
            {restaurantMenu !== null && !loading
                ?
                (
                    <div >
                        <Container className=" bg-light-2">

                            <div className="pt-5">
                                <h1>Retaurant Name, Menus</h1>
                            </div>


                            <Row className="mt-3">
                                {restaurantMenu && restaurantMenu.products.map((menu) => (
                                    <div key={menu.id}>
                                        <MenuCard menu={menu} addProductToCart={addProductToCart} />
                                    </div>
                                ))}
                            </Row>

                        </Container>

                    </div>
                )
                :
                <h1> Loading....</h1>
            }
        </Fragment>


    );
};

export default RestauranMenu;

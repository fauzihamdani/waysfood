import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Row, Container } from 'react-bootstrap';
import { CartContext } from '../../contexts/cartContext';

import MenuCard from './menuCard';

const RestauranMenu = () => {

    const [state, dispatch] = useContext(CartContext);

    console.log(state);
    const addProductToCart = (menu) => {
        dispatch({
            type: "ADD_CART",
            payload: menu
        });
    };

    const [menuList, setMenuList] = useState(null);

    const params = useParams();
    const { id } = params;

    const dataRestaurantNearYou = [
        {
            id: 0,
            name: "Geprek Bensu",
            distance: "0.2 KM",
            products: [
                {
                    id: 0,
                    name: "Paket Geprek",
                    price: '15.000',
                },
                {
                    id: 1,
                    name: "Paket Geprek Keju",
                    price: '20.000',
                },
                {
                    id: 2,
                    name: "Paket Geprek Leleh",
                    price: '25.000',
                },
                {
                    id: 3,
                    name: "Paket Sambel Matah",
                    price: '15.000',
                },
                {
                    id: 4,
                    name: "Mie Ayam Geprek",
                    price: '17.000',
                },
                {
                    id: 5,
                    name: "Mie Ayam Geprek Keju",
                    price: '22.000',
                },
                {
                    id: 6,
                    name: "Mie Ayam Leleh",
                    price: '20.000',
                },
                {
                    id: 7,
                    name: "Mie Ayam Sambel Telur Asin",
                    price: '22.000',
                }

            ]
        },
        {
            id: 1,
            name: "Nasi Goreng Mas Rony",
            distance: "0.2 KM",
            products: []
        },
        {
            id: 2,
            name: "Pecel Ayam Prambanan",
            distance: "0.6 KM",
            products: []
        },
        {
            id: 3,
            name: "Kopi Kenangan",
            distance: "1.6 KM",
            products: []
        }
    ];

    useEffect(() => {
        menuById();
    }, []);

    const menuById = () => {
        const filterMenu = dataRestaurantNearYou.find((menu) => menu.id == id);
        setMenuList(filterMenu);
    };
    return (
        <div >
            <Container className=" bg-light-2">

                <div className="pt-5">
                    <h1>{menuList && menuList.name}, Menus</h1>
                </div>


                <Row className="mt-3">
                    {menuList && menuList.products.map((menu) => (
                        <div key={menu.id}>
                            <MenuCard menu={menu} addProductToCart={addProductToCart} />
                        </div>
                    ))}
                </Row>

            </Container>

            <pre>{JSON.stringify(state, null, 2)}</pre>

        </div>
    );
};

export default RestauranMenu;

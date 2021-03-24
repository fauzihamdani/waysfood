import React from 'react';

import { Container, Row, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { dataRestaurant } from "./dataPopularRestaurant";
import CardRestauranNearYou from './cardRestaurantNearYou';


function PopularRestaurant() {

    // const dataRestaurantNearYou = [
    //     {
    //         id: 0,
    //         name: "Geprek Bensu",
    //         distance: "0.2 KM",
    //         product: [
    //             {
    //                 id: 0,
    //                 name: "Paket Geprek",
    //                 price: 15.000,
    //             },
    //             {
    //                 id: 1,
    //                 name: "Paket Geprek Keju",
    //                 price: 20.000,
    //             },
    //             {
    //                 id: 2,
    //                 name: "Paket Geprek Leleh",
    //                 price: 25.000,
    //             },
    //             {
    //                 id: 3,
    //                 name: "Paket Sambel Matah",
    //                 price: 15.000,
    //             },
    //             {
    //                 id: 4,
    //                 name: "Mie Ayam Geprek",
    //                 price: 17.000,
    //             },
    //             {
    //                 id: 5,
    //                 name: "Mie Ayam Geprek Keju",
    //                 price: 22.000,
    //             },
    //             {
    //                 id: 6,
    //                 name: "Mie Ayam Leleh",
    //                 price: 20.000,
    //             },
    //             {
    //                 id: 7,
    //                 name: "Mie Ayam Sambel Telur Asin",
    //                 price: 22.000,
    //             }

    //         ]
    //     },
    //     {
    //         id: 1,
    //         name: "Nasi Goreng Mas Rony",
    //         distance: "0.2 KM",
    //         product: []
    //     },
    //     {
    //         id: 2,
    //         name: "Pecel Ayam Prambanan",
    //         distance: "0.6 KM",
    //         product: []
    //     },
    //     {
    //         id: 3,
    //         name: "Kopi Kenangan",
    //         distance: "1.6 KM",
    //         product: []
    //     }
    // ];

    return (
        <div className="bg-light pt-5">
            <Container className=" bg-light">
                <h1>Restaurant Near You</h1>

                <Row className="mt-5 pb-5">

                    {dataRestaurant.map((restaurant) => (
                        <div key={restaurant.id}>
                            <CardRestauranNearYou restaurant={restaurant} />
                        </div>

                    ))}

                </Row>

            </Container>
        </div >
    );
}

export default PopularRestaurant;

{/* <Col className="bg-white mr-2">
                        <Card>
                            <Card.Img className="p-1 card-style" variant="top" src={geprekBensu} />
                            <Card.Body>
                                <Card.Title className="text-bold text-small">Greprek Bensu </Card.Title>
                                <Card.Text>
                                    0.2 KM
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col> */}
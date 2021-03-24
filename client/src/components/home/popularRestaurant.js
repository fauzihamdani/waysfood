import { React, useState } from 'react';

import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import CardPopularRestaurant from "./cardPopularRestaurant";


function PopularRestaurant() {


    const dataPopularRestaurant = [
        {
            id: 0,
            name: "Burger King",

        },
        {
            id: 1,
            name: "Starbucks",

        },
        {
            id: 2,
            name: "KFC",

        },
        {
            id: 3,
            name: "JCO",

        }
    ];

    const [popularList, setPopularlist] = useState(dataPopularRestaurant);

    return (
        <div className="bg-light pt-5">
            <Container className=" bg-light">
                <h1>Popular Restaurant</h1>

                <Row className="mt-5 pb-5">

                    {popularList.map((restaurant) => (
                        <div key={restaurant.id}>
                            <CardPopularRestaurant restaurant={restaurant} />
                        </div>
                    ))}
                </Row>

            </Container>
        </div >
    );
}

export default PopularRestaurant;
{/* <Col className="bg-white mr-2">

                        <Col ><img src={BurgerKing} /> <span className="ml-2">Burger King</span> </Col>

                    </Col>

                    <Col className="bg-white mr-2">

                        <Col><img src={Starbucks} /> <span className="ml-2">Starbucks</span> </Col>

                    </Col>

                    <Col className="bg-white mr-2">

                        <Col><img src={KFC} /> <span className="ml-2">KFC</span> </Col>

                    </Col>

                    <Col className="bg-white mr-2">

                        <Col><img src={JCO} /> <span className="ml-2">JCO</span> </Col>

                    </Col> */}
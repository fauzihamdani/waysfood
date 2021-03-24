import React from 'react';

import { Col, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


import geprekBensu from './images/geprekBensu.svg';
import NasiGorengMasRony from './images/NasiGorengMasRony.svg';
import PecelAyamPrambanan from './images/PecelAyamPrambanan.svg';
import KopiKenangan from './images/KopiKenangan.svg';

const CardPopularRestaurant = ({ restaurant }) => {

    const history = useHistory();
    const { id, name, img, distance, image } = restaurant;
    const images = [geprekBensu, NasiGorengMasRony, PecelAyamPrambanan, KopiKenangan];
    console.log('dari cardpopular');
    return (

        <div
            onClick={() => {
                history.push(`/menudetail/${id}`);
            }}
            style={{
                cursor: "pointer",
            }}>
            <Col className="bg-white mr-2">
                <Card>
                    <Card.Img className="p-1 card-style" variant="top" src={image} style={{
                        height: "134px",
                        width: "224px",
                        objectFit: "cover",
                    }} />
                    <Card.Body>
                        <Card.Title className="text-bold text-small">{name}</Card.Title>
                        <Card.Text>
                            {distance}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default CardPopularRestaurant;
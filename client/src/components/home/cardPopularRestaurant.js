import React from 'react';

import { Col } from 'react-bootstrap';

import BurgerKing from './images/BurgerKing.svg';
import Starbucks from './images/Starbucks.svg';
import JCO from './images/JCO.svg';
import KFC from './images/KFC.svg';

const CardPopularRestaurant = ({ restaurant }) => {

    const { id, name, img } = restaurant;
    const images = [BurgerKing, Starbucks, KFC, JCO];
    console.log('dari cardpopular');
    return (

        <div>
            <Col className="bg-white mr-1">
                <Col ><img src={images[id]} /> <span className="ml-2">{name}</span>  </Col>
            </Col>
        </div >
    );
};

export default CardPopularRestaurant;
import React, { useContext } from 'react';
import { Col, Card, Button } from 'react-bootstrap';

import PaketGeprek from './images/PaketGeprek.svg';
import PaketGeprekKeju from './images/PaketGeprekKeju.svg';
import PaketGeprekLeleh from './images/PaketGeprekLeleh.svg';
import PaketSambelMatah from './images/PaketSambelMatah.svg';
import MieAyamGeprek from './images/MieAyamGeprek.svg';
import MieAyamGeprekKeju from './images/MieAyamGeprekKeju.svg';
import MieAyamLeleh from './images/MieAyamLeleh.svg';
import MieAyamSambelTelurAsin from './images/MieAyamSambelTelurAsin.svg';

import { CartContext } from '../../contexts/cartContext';

const MenuCard = ({ menu, addProductToCart }) => {

    const images = [PaketGeprek,
        PaketGeprekKeju,
        PaketGeprekLeleh,
        PaketSambelMatah,
        MieAyamGeprek,
        MieAyamGeprekKeju,
        MieAyamLeleh,
        MieAyamSambelTelurAsin];

    const { id, name, price, image } = menu;

    return (
        <div>
            <Col className=" mr-2 mt-2 bg-light-2 p-1">
                <Card style={{ width: '14rem' }}>
                    <Card.Img className="p-1 card-style" variant="top" src={images[id]} />
                    <Card.Body>
                        <Card.Title className="text-bold text-small">{name}</Card.Title>
                        <Card.Text>
                            Rp{price}
                        </Card.Text>
                        <Button variant="primary" className="Background-yellow" block onClick={() => addProductToCart(menu)}>Order</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default MenuCard;

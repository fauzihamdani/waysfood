import React, { useState, useContext } from 'react';

import CartContext from "../../contexts/cart/cartContext";
import { Row, Col, Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import KFC from '../../components/home/images/KFC.svg';
import trash from './images/trash.svg';

import MapRender from './mapRender';

const CartOrder = () => {

    const cartContext = useContext(CartContext);

    const { addProductToCart, cart, increaseQty, decreaseQty, removeProductFromCart } = cartContext;

    // const [state, dispatch] = useContext(CartContext);

    const [show3, setShow3] = useState(false);

    const handleClose = () => setShow3(false);
    const handleShow = () => setShow3(true);


    // };

    return (
        <div className="bg-light-2 container">
            <h1 className="pt-5 pb-5">Geprek Bensu</h1>

            <h3>Delivery Location</h3>

            <Form inline>
                <Row>
                    <Col sm={8}>
                        <Form.Group controlId="exampleForm.ControlEmail">
                            <Form.Control type="email" name="place" placeholder="Your Place" block />
                        </Form.Group>
                    </Col>
                </Row>

                <Button className="my-1" onClick={handleShow}>
                    Select on Map
                </Button>
            </Form>

            <h3 className="pt-5">Review Your Order</h3>
            <div className="col-sm-7" style={{ borderTop: "solid 1px black" }}></div>

            <Row>
                <Col>
                    {/* -------------- card here -------------------- */}
                    <div>
                        {cart.map((cartItem) => (
                            <Row key={cartItem.id}>
                                <Col className="col-sm-6" style={{ borderBottom: "solid 1px black" }} >
                                    <img src={KFC} style={{ display: "inline" }} />
                                    <h5 style={{ display: "inline" }} >{cartItem.name}</h5>
                                    <div>
                                        <button onClick={() => increaseQty(cartItem.id)}>+</button>
                                        <input style={{ width: "40px" }} type="text" value={cartItem.qty} />
                                        <button onClick={() => decreaseQty(cartItem.id)}>-</button>
                                    </div>

                                </Col>

                                <Col style={{ borderBottom: "solid 1px black" }} >
                                    <div style={{ color: "red" }}>Rp {cartItem.price}</div>

                                    <img style={{ cursor: "pointer" }} src={trash} onClick={() => removeProductFromCart(cartItem.id)} />
                                </Col>

                            </Row>
                        ))}

                    </div>

                    {/* ---------------------------------- ---------*/}
                </Col>
                <Col className="col-sm-6" style={{ borderTop: "solid 1px black" }} >

                    <Row style={{ borderBottom: "solid 1px black" }}>
                        <Col>
                            <div>SubTotal</div>

                            <div>Qty</div>

                            <div>Ongkir</div>
                        </Col>
                        <Col>
                            <div style={{ color: "red" }}>Rp. 35.000</div>

                            <div>2</div>

                            <div style={{ color: "red" }}>Rp. 10.000</div>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col>
                            <div>Total</div>
                        </Col>
                        <Col>
                            <div>Rp. 35.000</div>
                        </Col>
                    </Row>



                </Col>

            </Row>

            <div>
                <Modal dialogClassName="modal-90w" show={show3} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <MapRender /> </Modal.Body>
                </Modal>



            </div>

        </div>
    );
};

export default CartOrder;

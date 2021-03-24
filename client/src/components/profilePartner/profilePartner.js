import React from 'react';

import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import PP2 from './image/pp2.png';
import order from './image/profileOrder.svg';

const ProfilePartner = () => {
    return (
        <div className="container bg-light-2">
            <Row className="pt-5">
                <Col xs={6}>
                    <h1>Profile Partner</h1>
                </Col>
                <Col xs={6}>
                    <h1>History Transaction</h1>
                </Col>
            </Row>

            <Row className="pt-5 pb-5" >
                <Col xs={6}>
                    <Row>
                        <Col xs={6}><img style={{ width: '180', height: '222' }} src={PP2} /></Col>
                        <Col xs={6}>
                            <div className='mb-3'>
                                Full name
                                <br />
                                Geprek Bensu
                            </div>
                            <div className='mb-3'>
                                Email
                                <br />
                                bensu@gmail.com
                            </div>
                            <div>
                                Phone
                                <br />
                                083896833122
                            </div>
                        </Col>
                    </Row>
                    <Button variant="primary" style={{ width: '180px', height: '40px', backgroundColor: "#433434" }} className="mt-3" block><span style={{ fontSize: "14px" }}>Edit Profile</span></Button>
                </Col>


                <Col xs={6}>
                    <Col style={{ backgroundColor: "#ffff", width: "419px", height: " 101px" }}>
                        <Row className="justify-content-md-center" >
                            <Col >
                                <b>Andi</b>
                                <div><b>Saturday</b>, 12 March 2021</div>
                                <div className="mt-2">Total : Rp 45.000</div>
                            </Col>
                            <Col style={{ margin: "0 auto" }}>
                                <div >
                                    <img style={{ width: '124px', height: '40px' }} scr={order} />
                                </div>
                                <div style={{ width: '112px', height: '19px', backgroundColor: "#00FF75" }} className="mt-3">
                                    Finished
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Col>
            </Row>
        </div>
    );
};

export default ProfilePartner;

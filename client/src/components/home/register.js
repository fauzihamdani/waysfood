import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useState } from 'react';

const Register = () => {
    return (
        <div>
            <Modal.Body>

                <Form>
                    <Form.Group controlId="formBasicEmail">

                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicFullName">

                        <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicGender">

                        <Form.Control type="text" placeholder="Gender" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">

                        <Form.Control type="number" placeholder="Phone" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select">
                            <option>Buyer</option>
                            <option>User</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit" size="lg" block>
                        Submit
                    </Button>
                </Form>

            </Modal.Body>
        </div>
    );
};

export default Register;
import { Button, Modal, Form } from 'react-bootstrap';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useHistory } from 'react-router-dom';

const Login = () => {

    const history = useHistory();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });


    const { email, password } = form;

    const onChange = (e) => {
        console.log(email);
        const updateForm = { ...form };
        updateForm[e.target.name] = e.target.value;
        setForm(updateForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/loggedin');
    };

    return (
        <div>
            <Modal.Body>

                <Form onSubmit={(e) => { handleSubmit(e); }}>
                    {/* <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" onChange={(e) => onChange(e)} />
                    </Form.Group> */}

                    <input
                        value={email}
                        onChange={(e) => onChange(e)}
                        name="email"
                        type="text"
                        className="form-control"
                    />

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control value={password} name="password" type="password" placeholder="Password" onChange={(e) => onChange(e)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" size="lg" block>
                        Submit
                    </Button>

                    <p>Don't have an account? Click  <span>Here</span></p>

                    <pre>{JSON.stringify(form, 2, null)}</pre>
                </Form>

            </Modal.Body>
        </div>
    );
};

export default Login;

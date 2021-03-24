import { Navbar, Nav, Container, Button, Modal, Form, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

import { React, useState, useContext } from 'react';

import { CartContext } from '../../../contexts/cartContext';
import WaysFood from './WaysFood.svg';
import ppImage from './imagesNav/ppnavbar.svg';
import cart from './imagesNav/cart.svg';

import '../../../App.css';

function NavbarView() {

    const [state, dispatch] = useContext(CartContext);
    console.log(state);

    const loginSuccess = () => {
        dispatch({
            type: "LOGIN_SUCCESS"
        });
    };

    const history = useHistory();

    const [formLogin, setFormLogin] = useState({
        email: "",
        password: ""
    });
    const { email, password } = formLogin;

    const [formRegister, setFormRegister] = useState({
        emailregister: "",
        passwordregister: "",
        fullname: "",
        gender: "",
        phone: null,
        user: ""

    });
    const { emailregister,
        passwordregister,
        fullname,
        gender,
        phone,
        user } = formRegister;



    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);

    const onChangeLogin = (e) => {
        console.log(email);
        const updateForm = { ...formLogin };
        updateForm[e.target.name] = e.target.value;
        setFormLogin(updateForm);
    };
    const onChangeRegister = (e) => {
        const updateForm = { ...formRegister };
        updateForm[e.target.name] = e.target.value;
        setFormRegister(updateForm);
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        history.push('/');
    };
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        history.push('/');
    };

    // check cartQuantity
    const check = () => {
        return state.cart.length >= 0;
    };

    // check LoggedIn

    var button1;
    var button2;
    var cartCount;
    if (!state.isLogin) {
        button1 = <Button variant="" style={{ width: '100px', height: '30px', backgroundColor: "#433434", color: "#ffff", textAlign: "center" }} className="mr-4 text-center" onClick={handleShow2}>Register</Button>;
        button2 = <Button variant="" style={{ width: '100px', height: '30px', backgroundColor: "#433434", color: "#ffff", textAlign: "center" }} className="text-center " onClick={handleShow}>Login</Button>;
    } else {
        if (state.cart.length > 0) {
            button1 = <Link className="mr-3" to="/cart-order"> <span><img style={{ width: '33px', height: '33px', color: "#ffff", textAlign: "center" }} src={cart} />  </span> </Link>;
            button2 = <span ><img style={{ width: '60ox', height: '60px', color: "#ffff", textAlign: "center" }} src={ppImage} /> </span>;

        }

        // img cart 35 x 33
        button1 = <Link className="mr-3" to="/cart-order"> <span><img style={{ width: '33px', height: '33px', color: "#ffff", textAlign: "center" }} src={cart} /><Badge pill variant="danger">{state.cart.length}</Badge>;  </span> </Link>;
        // ppnavbar 60 x 60
        button2 = <span ><img style={{ width: '60ox', height: '60px', color: "#ffff", textAlign: "center" }} src={ppImage} /> </span>;

    }

    return (
        <div >

            <Navbar expand="lg" className="Background-yellow">
                <Container >
                    <Navbar.Brand as={Link} to="/" ><img src={WaysFood} alt='Ways Food' /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto align-items-center justify-content-center">
                            {button1}
                            {button2}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <pre>{JSON.stringify(state.cart.length)}</pre>
            <div>{check()}</div>


            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Login </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form onSubmit={(e) => { handleSubmitLogin(e); }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" name="email" value={email} placeholder="Email" onChange={(e) => onChangeLogin(e)} />
                        </Form.Group>



                        <Form.Group controlId="formBasicPassword">
                            <Form.Control value={password} name="password" type="password" placeholder="Password" onChange={(e) => onChangeLogin(e)} />
                        </Form.Group>

                        <Button variant="primary" type="submit" size="lg" block onClick={loginSuccess}>
                            Submit
                        </Button>

                        <p
                            style={{ cursor: "pointer", }}
                            onClick={
                                () => {
                                    handleClose();
                                    handleShow2();
                                }
                            }>Don't have an account? Click  <span>Here</span></p>
                    </Form>

                </Modal.Body>
            </Modal>

            <Modal show={show2} onHide={handleClose2}>

                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form onSubmit={(e) => { handleSubmitLogin(e); }}>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control value={emailregister} name="emailregister" type="email" placeholder="Email" onChange={(e) => onChangeRegister(e)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control value={passwordregister} name="passwordregister" type="password" placeholder="Password" onChange={(e) => onChangeRegister(e)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicFullName">

                            <Form.Control value={fullname} type="text" placeholder="Full Name" name="fullname" onChange={(e) => onChangeRegister(e)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicGender">

                            <Form.Control type="text" placeholder="Gender" value={gender} name="gender" onChange={(e) => onChangeRegister(e)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhone">

                            <Form.Control type="number" placeholder="Phone" value={phone} name="phone" onChange={(e) => onChangeRegister(e)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control as="select" size="lg" name="user" onChange={(e) => onChangeRegister(e)}>
                                <option value={user}>Buyer</option>
                                <option value="partner">Partner</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit" size="lg" block>
                            Submit
                        </Button>

                        <p
                            style={{ cursor: "pointer", }}
                            onClick={
                                () => {
                                    handleClose2();
                                    handleShow();
                                }}>have an account? Click  <span>Here</span></p>

                    </Form>

                </Modal.Body>
            </Modal>


            {/* <Modal show={show2} onHide={handleClose2}>

                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={(e) => { handleSubmitRegister(e);} }>
                        <Form.Group controlId="formBasicEmail">

                            <Form.Control type="email" placeholder="Enter email" value="email " name="emailregister"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">

                            <Form.Control type="password" placeholder="Password"   value="password " name="passwordregister"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicFullName">

                            <Form.Control type="text" placeholder="Full Name"  value="email " name="email"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicGender">

                            <Form.Control type="text" placeholder="Gender"  value="gender " name="gender"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPhone">

                            <Form.Control type="number" placeholder="Phone"  value="phone " name="phone"/>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select " defaultValue="Choose...">
                                <option value="Buyer">Buyer</option>
                                <option value="User">User</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit" size="lg" block>
                            Submit
                        </Button>
                        </Form>

                     </Modal.Body>
                </Modal> */}
        </div>
    );
}

export default NavbarView;

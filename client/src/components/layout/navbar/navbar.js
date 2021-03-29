import { Navbar, Nav, Container, Button, Modal, Form, Badge, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

import { React, useState, useContext, useEffect } from 'react';

import CartContext from '../../../contexts/cart/cartContext';
import AuthContext from '../../../contexts/auth/authContext';
import WaysFood from './WaysFood.svg';
import ppImage from './imagesNav/ppnavbar.svg';
import cartImg from './imagesNav/cart.svg';

import '../../../App.css';

function NavbarView() {
    const cartContext = useContext(CartContext);
    const authContext = useContext(AuthContext);

    const { cart } = cartContext;
    const { isLogin, login, error, clicked_, clicked, clickedResult, loadUser, logout, userData, register } = authContext;

    console.log(clickedResult);

    const [resLoadUser, setResLoadUser] = useState(null);

    const history = useHistory();
    const [formLogin, setFormLogin] = useState({
        email: "",
        password: ""
    });
    const { email, password } = formLogin;

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

    const [formRegister, setFormRegister] = useState({
        emailregister: "",
        passwordregister: "",
        fullname: "",
        phone: 0,
        role: ""
    });
    const { emailregister,
        passwordregister,
        fullname,
        phone,
        role } = formRegister;



    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);


    const handleSubmitLogin = (e) => {
        e.preventDefault();

        const body = JSON.stringify({ email, password });
        handleClose();
        login(body);
    };
    const handleSubmitRegister = (e) => {
        e.preventDefault();

        if (role === 'Select Role') {
            return console.log('you must select role');
        }
        // handleClose2();
        const body = JSON.stringify({
            fullname,
            emailregister,
            phone,
            role,
            passwordregister,

        });
        register(body);
    };


    // check cartQuantity
    const check = () => {
        return cart.length >= 0;
    };

    const logoutClick = () => {
        logout();
        history.push('/');
    };

    useEffect(() => {
        loadUser();

        if (isLogin) {
            history.push('/');
        }
        // eslint-disable-next-line
    }, []);

    // check LoggedIn
    var button1;
    var button2;
    var cartCount;
    if (!isLogin) {
        button1 = <Button variant="" style={{ width: '100px', height: '30px', backgroundColor: "#433434", color: "#ffff", textAlign: "center" }} className="mr-4 text-center" onClick={handleShow2}>Register</Button>;
        button2 = <Button variant="" style={{ width: '100px', height: '30px', backgroundColor: "#433434", color: "#ffff", textAlign: "center" }} className="text-center " onClick={handleShow}>Login</Button>;
    } else {
        if (!cart.length > 0) {
            button1 = <Link className="mr-3" to="/cart-order"> <span><img style={{ width: '33px', height: '33px', color: "#ffff", textAlign: "center" }} src={cartImg} />  </span> </Link>;
            button2 = <span ><Image style={{ objectFit: "cover", width: '60ox', height: '60px', color: "#ffff", textAlign: "center" }} src="https://images.pexels.com/photos/3634855/pexels-photo-3634855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" /> </span>;

        }



        button1 =
            <span>
                <span style={{ cursor: "pointer", marginRight: "5px" }} onClick={() => logoutClick()}>  LOGOUT</span>

                {userData.role === "Partner" &&
                    <Link className="mr-3" to="/add-product">
                        <span style={{ cursor: "pointer", marginRight: "5px" }} >  Add Product</span>
                    </Link>

                }

                <Link className="mr-3" to="/cart-order">
                    <span><img style={{ width: '33px', height: '33px', color: "#ffff", textAlign: "center" }} src={cartImg} />
                        <Badge pill variant="danger">{cart.length}</Badge>;
                </span>
                </Link>
            </span >;

        button2 = <span ><Image style={{ objectFit: "cover", width: '60ox', height: '60px', color: "#ffff", textAlign: "center" }} src="https://www.marismith.com/wp-content/uploads/2014/07/facebook-profile-blank-face.jpeg" roundedCircle /> </span>;
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

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Login </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmitLogin}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" name="email" value={email} placeholder="Email" onChange={(e) => onChangeLogin(e)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control value={password} name="password" type="password" placeholder="Password" onChange={(e) => onChangeLogin(e)} />
                        </Form.Group>

                        <Button variant="primary" type="submit" size="lg" block >
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

                    <Form onSubmit={(e) => { handleSubmitRegister(e); }}>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control value={emailregister} name="emailregister" type="email" placeholder="Email" onChange={(e) => onChangeRegister(e)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control value={passwordregister} name="passwordregister" type="password" placeholder="Password" onChange={(e) => onChangeRegister(e)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicFullName">

                            <Form.Control value={fullname} type="text" placeholder="Full Name" name="fullname" onChange={(e) => onChangeRegister(e)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhone">

                            <Form.Control type="number" placeholder="Phone" value={phone} name="phone" onChange={(e) => onChangeRegister(e)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control as="select" size="lg" name="role" onChange={(e) => onChangeRegister(e)} value={role}>
                                <option >Select Role</option>
                                <option >User</option>
                                <option >Partner</option>
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
        </div >
    );
}

export default NavbarView;

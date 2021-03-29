import React, { useContext, useState } from 'react';

import { Container, Col, Row, Form, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PartnerContext from '../../contexts/partner/partnerContext';

import CustomFormInput from "./CustomFormInput";
import CustomFormFile from "./CustomFormFile";

function AddProduct() {
    // stateForm
    const [form, setForm] = useState({
        title: "",
        price: "",
        image: null,
    });

    const { title, price, image } = form;

    //   onchange form
    const onChange = (e) => {
        const menuForm = { ...form };
        menuForm[e.target.name] =
            e.target.type === "file" ? e.target.files[0] : e.target.value;
        setForm(menuForm);
    };



    const partnerContext = useContext(PartnerContext);

    const { addMenu } = partnerContext;


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("price", price);
        formData.append("image", image);
        addMenu(formData);
    };
    return (
        <div className=" py-5 ">
            <Container>
                <Row className="mb-4">
                    <Col xs={12}>
                        <h1 className="heading font-weight-bold">Add Product</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col xs={12} lg={9}>
                                    <Form.Group>
                                        <CustomFormInput
                                            isBrown="true"
                                            type="text"
                                            placeholder="Menu Name"
                                            name="title"
                                            onChange={(e) => onChange(e)}
                                            value={title}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} lg={3}>
                                    <Form.Group controlId="image">
                                        <CustomFormFile
                                            placeholder="Attach File"
                                            name="image"
                                            onChange={(e) => onChange(e)}
                                            value={image}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} lg={12}>
                                    <Form.Group>
                                        <CustomFormInput
                                            isBrown="true"
                                            type="text"
                                            placeholder="Price"
                                            name="price"
                                            onChange={(e) => onChange(e)}
                                            value={price}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Col xs={12} lg={12} className="text-right">
                                    <Button variant="brown" className="w-25" type="submit">
                                        Save
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AddProduct;

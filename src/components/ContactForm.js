import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import userImg from '../components/images/user-icon.jpg';
import ListIcon from '@mui/icons-material/List';
import ToggleCard from "./ToggleCard";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
    const cards = [
        {
            id: 1,
            title: "hello sir how are you"
        },
        {
            id: 2,
            title: "hello sir how are you"
        },
        {
            id: 3,
            title: "hello sir how are you"
        },
        {
            id: 4,
            title: "hello sir how are you"
        }
    ]
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={4}>
                        <Card className="mt-3" style={{ backgroundColor: "white", boxShadow: "0 1px 6px 0px gray" }}>
                            <Row>
                                <Col lg={2}>
                                    <Avatar alt="Remy Sharp" sx={{ width: 60, height: 60 }} src={userImg} className="mt-2" />
                                </Col>
                                <Col lg={10} >
                                    <Card.Body>
                                        <h3>hello Reader</h3>
                                        <span>hello sir how are you</span>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="text-center mt-5" style={{ backgroundColor: "white", boxShadow: "0 1px 6px 0px gray" }}>
                            <Card.Body>
                                <Card.Title>View Toggle</Card.Title>
                                <Button variant="primary">We're Listening</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={8}>
                        <form className="" >

                            <h6 className="text-center text-dark mt-3"><b>Thank You so much taking the time</b></h6>
                            <Form.Group className="mb-3" >
                                <Form.Label>First Name*</Form.Label>
                                <Form.Control type="text" name="first_name" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Last Name*</Form.Label>
                                <Form.Control type="text" name="last_name" />
                            </Form.Group> <Form.Group className="mb-3" >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                    <Form.Label>Address*</Form.Label>
                                    <Form.Control as="textarea" row={3} name="message" />
                                </Form.Group>
                                <Form.Label>Email Id*</Form.Label>
                                <Form.Control type="email" name="email" />
                            </Form.Group> <Form.Group className="mb-3" >
                                <Form.Label>Contry</Form.Label>
                                <Form.Control type="text" name="contry" />
                            </Form.Group> <Form.Group className="mb-3" >
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="number" name="mobile" />
                            </Form.Group>
                            <div className="text-center">
                                <input className="btn btn-success text-center mt-3  mb-3" type="button" value="Submit Feedback" />
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default ContactForm;
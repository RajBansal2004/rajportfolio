import { Avatar, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Offcanvas, Row } from "react-bootstrap";
import userImg from '../components/images/user-icon.jpg';
import ListIcon from '@mui/icons-material/List';
import ToggleCard from "./ToggleCard";
import { Link, useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";
import { apiResponse } from "./Api";

const Main = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
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
        },
        {
            id: 5,
            title: "hello sir how are you"
        },
        {
            id: 6,
            title: "hello sir how are you"
        }
    ]
    const handleShow = () => {
        setLoading(false)
    }
    const handleHide=()=>{
        setLoading(true)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShowOffcanava = () => setShow(true);


    const callApi = async () => {
        const fetchData = await apiResponse();
        console.log("data------", fetchData);
    }
    useEffect(() => {
        callApi();
    }, [])

    return (
        <>
            <Container fluid style={{ backgroundColor: "gray" }}>
                <Container>
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
                                    <Button variant="primary" onClick={handleShow}><ListIcon /></Button>
                                    <Button variant="primary" onClick={handleHide}><ListIcon /></Button>
                                </Card.Body>
                            </Card>
                            <Card className="text-center mt-5" style={{ backgroundColor: "white", boxShadow: "0 1px 6px 0px gray" }}>
                                <Card.Body>
                                    <Card.Title>View Toggle</Card.Title>
                                    <Button variant="primary" onClick={handleShowOffcanava}>We're Listening</Button>
                                </Card.Body>
                            </Card>
                            <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: "gray", width: "900px" }}>
                                <Offcanvas.Header closeButton style={{ marginTop: "-35px" }}>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <ContactForm />
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Col>
                        <Col lg={8}>
                            {loading ? (
                                <>
                                    {
                                        cards.map((item) => {
                                            return (
                                                <>
                                                    <Card className="mt-3 mb-3" style={{ backgroundColor: "white", boxShadow: "0 1px 6px 0px gray" }}>
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
                                                </>
                                            )
                                        })
                                    }
                                </>
                            ) : (
                                <ToggleCard />
                            )}
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Ellipsis />
                                <Pagination.Item>{10}</Pagination.Item>
                                <Pagination.Item>{11}</Pagination.Item>
                                <Pagination.Item active>{12}</Pagination.Item>
                                <Pagination.Item>{13}</Pagination.Item>
                                <Pagination.Item disabled>{14}</Pagination.Item>
                                <Pagination.Ellipsis />
                                <Pagination.Item>{20}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </Col>

                    </Row>
                </Container>


            </Container>

        </>
    )
}
export default Main;
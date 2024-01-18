import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import userImg from '../components/images/user-icon.jpg';
const ToggleCard = () => {
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
        },
        {
            id: 7,
            title: "hello sir how are you"
        },
        {
            id: 8,
            title: "hello sir how are you"
        },
        {
            id: 9,
            title: "hello sir how are you"
        },
        {
            id: 10,
            title: "hello sir how are you"
        },
        {
            id: 11,
            title: "hello sir how are you"
        },
        {
            id: 12,
            title: "hello sir how are you"
        } 
    ]
    return (
        <>
            <Container>
                <Row>
                    {
                        cards.map((item) => {
                            return (
                                <>
                                    <Col key={item.id} lg={3} md={4} sm={12} className="mt-3 mb-3">
                                        <Link to="/viewToggle" style={{textDecoration:"none"}}>
                                        <Card style={{ backgroundColor: "white", boxShadow: "0 1px 6px 0px gray" }} >
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                  {item.title}
                                                </Card.Text>
                                                <Card.Img variant="top" src={userImg} />
                                            </Card.Body>
                                        </Card>
                                        </Link>
                                    </Col>
                                </>
                            )
                        })
                    }

                </Row>

            </Container>

        </>
    )
}
export default ToggleCard;
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import reactIcon from "../components/images/react_logo.png";
import reduxIcon from "../components/images/redux-icon.png";
import jsIcon from "../components/images/javascript-logo.png";
import { Avatar } from "@mui/material";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdPhoneAndroid } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";

const Contact = ({ContectRef}) => {
    const skillsCard = [
        {
            id: 1,
            title: "Address",
            icon: <FaMapLocationDot />,
            dis: "Ashoka Garden, Bhopal-462023"
        },
        {
            id: 2,
            title: "Phone",
            icon: <MdPhoneAndroid />,
            dis: "+91-9770256051"
        }, {
            id: 3,
            title: "Email",
            icon: <HiOutlineMailOpen />,
            dis: "rajbansalraj600@gmail.com"

        }
    ]
    return (
        <>
            <Container ref={ContectRef}>
                <Row>
                    <h1 className="text-center mt-5" style={{ color: "#079778" }}>Contact Me</h1>

                    {
                        skillsCard?.map((skills) => {
                            return (
                                <>
                                    <Col lg={4} md={6} sm={12} className="mb-4">
                                        <Card style={{ backgroundColor: 'white', color: "#079778", boxShadow: "0 1px 6px 0px" }} className="mt-3 service text-center">
                                            <Card.Body className="">
                                                <div >
                                                    <h1>{skills?.icon}</h1>
                                                </div>
                                                <Card.Text>
                                                    <h3 style={{textDecoration:"underline"}}> {skills?.title}</h3>
                                                    <p>{skills?.dis}</p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>

                                    </Col>
                                </>
                            )

                        })
                    }

                </Row>
                <br/>   <br/>   <br/>
            </Container>

        </>
    )
}
export default Contact;
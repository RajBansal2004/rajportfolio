import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import userImg from '../components/images/portfolio_image.jpg';
import Services from "./Services";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";


const Banner = ({HomeRef}) => {
    return (
        <>
            <Container ref={HomeRef}>
                <Container>
                    <Row>

                        <Col className="mt-5 mb-5 order-2 order-md-1" md={8} sm={12}>
                            <h1 className="text-light ">Hello, I'm</h1>
                            <h2 className="text-bold" style={{color:"#079778"}}><FaLessThan /> Raj Bansal /<FaGreaterThan />
                            </h2>
                            <br />
                            <b className="text-light">I'm a Front-end Web Developer currently based in Bhopal,
                                focused on writing clean, optimized, efficient and functional code.</b>
                                <br /> <br />
                            <div className="">
                                <button className="btn  mt-3 " style={{ backgroundColor: "#079778", color: "white" }}>Get Started</button>
                            </div>
                        </Col>
                        <Col className="mt-5 mb-5 order-1 order-md-2" md={4} sm={12}>
                            <Card style={{ backgroundColor: 'black', color: "white", boxShadow: "0 1px 6px 0px" }} >
                                <img src={userImg} className="img-fluid rounded" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
export default Banner;
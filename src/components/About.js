import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const About = ({AboutRef}) => {
    return (
        <>
            <Container ref={AboutRef}>
                <Row>
                    <Col>
                        <h1  className="text-center mt-5" style={{ color: "#079778" }}>About me</h1>
                        <p className="text-light">
                            My name is Raj Bansal. I'm a professional Front-end Developer with 1 year and 4 months of professional experience. </p>
                        <br />
                        <span className="text-light">

                            " I started my job as a Junior Web Developer in a company named Mild Stone Software Pvt. Ltd. I started designing and developing the company's own product, online website  management system using React-js, Javascript, HTML, CSS , Bootstrap.



                            There I've worked on a LMS project and other projects using various tools and technologies like Angular 1, Ionic 1, React js. I'm currently working in Mild Stone  Software Pvt. Ltd. as a React-js  Developer on Zee5 project, one of the leading OTT platforms in India, using libraries like React and Redux etc.

                            I try to learn new things each and every day and I feel a day without learning something new is a day wasted."
                        </span>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default About;
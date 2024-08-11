import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import icons from "../components/images/user-icon.jpg";
import "../components/main.css";
const Projects = () => {
    const [projectData, setProjectData] = useState();
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            console.log("result------", response);
            setProjectData(response?.data);
        })
    }, [])
    return (
        <>
            <Container className="mt-5">
                <Row>
                    {projectData?.map((item) => {
                        return (
                            <>
                                <Col md={6} sm={12} className="mb-3">
                                    <Card className="mt-3 project" style={{ backgroundColor: 'black', color: "white", boxShadow: "0 1px 6px 0px" }}>
                                        <Card.Img variant="top" src={icons} />
                                        <Card.Text>
                                            {item?.title}
                                        </Card.Text>
                                    </Card>
                                    <hr style={{ color: "red" }} />
                                    <h5 className="text-danger">Project 1</h5>
                                    <hr style={{ color: "red" }} />
                                </Col>
                            </>
                        )
                    })}

                    {/* <Col md={6} sm={12}  className="mb-3">
                        <Card  className="mt-3 project" style={{ backgroundColor: 'black', color: "white", boxShadow: "0 1px 6px 0px" }}>
                        <Card.Img variant="top" src={icons} />
                        </Card>
                        <hr style={{color:"red"}}/>
                        <h5>Project 2</h5>
                        <hr style={{color:"red"}}/>
                    </Col> */}
                </Row>
            </Container>

        </>
    )
}
export default Projects;
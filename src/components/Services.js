import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import icons from "../components/images/raj_bansal.jpg";
import "../components/main.css";
const Services = () => {
    const [userdata, setUserData] = useState();
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            console.log("result----", response);
            setUserData(response?.data);
            console.log("data-------",userdata)
        })
    }, [])
   

    return (
        <>
            <Container>
                <Row>
                    {
                      userdata?.map((item)=>{
                        return (
                            <>
                                <Col lg={3} md={4} sm={12}>
                                    <Card style={{ backgroundColor: 'black', color: "white", boxShadow: "0 1px 6px 0px" }} className="mt-3 service">
                                        <Card.Body>
                                            <Avatar alt="Remy Sharp" sx={{ width: 60, height: 60 }} src={icons} className="mt-2 mx-2" />
                                            {/* <Card.Title>{item.title}</Card.Title> */}
                                            <Card.Text>
                                                {item?.title}
                                            </Card.Text>
                                            <button className="btn" style={{ backgroundColor: "red", color: "white" }}>More Info</button>
                                        </Card.Body>
                                    </Card>
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
export default Services;
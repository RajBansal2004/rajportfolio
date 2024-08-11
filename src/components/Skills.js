import { Avatar } from "@mui/material";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import icons from "../components/images/raj_bansal.jpg";
import reactIcon from "../components/images/react_logo.png";
import reduxIcon from "../components/images/redux-icon.png";
import htmlIcon from "../components/images/html_logo.png";
import cssIcon from "../components/images/css_icon.png";
import jsIcon from "../components/images/javascript-logo.png";
import bootstrap from "../components/images/bootstrap_logo.jpg";
import git from "../components/images/git_icon.png"


const Skills = ({SkillRef}) => {
    const skillsCard = [
        {
            id: 1,
            title: "React js",
            icon: reactIcon
        },
        {
            id: 2,
            title: "Redux",
            icon: reduxIcon
        }, {
            id: 3,
            title: "Javascript",
            icon: jsIcon
        }, {
            id: 4,
            title: "HTML",
            icon:htmlIcon
        },
        {
            id: 5,
            title: "Css",
            icon: cssIcon
        }, {
            id: 6,
            title: "Bootstrap",
            icon: bootstrap
        },
        {
            id: 7,
            title: "Git",
            icon: git
        },
        {
            id: 8,
            title: "Material UI",
            icon: git
        }
    ]
    return (
        <>
            <Container ref={SkillRef}>
                <Row>
                    <h1 className="text-center mt-5" style={{color:"#079778"}}>My Skills</h1>
                    {
                        skillsCard?.map((skills) => {
                            return (
                                <>
                                    <Col lg={3} md={6} sm={12} className="">
                                        <Card style={{ backgroundColor: '#364653', color: "white", boxShadow: "0 1px 6px 0px" }} className="mt-3 service">
                                            <Card.Body className="">
                                                <div className="text-center">
                                                    <Avatar alt="Remy Sharp" sx={{ width: 60, height: 60 }} src={skills?.icon} className="mt-2 text-center" />

                                                </div>
                                                <Card.Text>
                                                    <h3 className="text-center "> {skills?.title}</h3>
                                                </Card.Text>
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
export default Skills;
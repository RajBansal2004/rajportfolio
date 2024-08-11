import React, { useRef, useState } from "react";
import { Col, Container, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import "../components/main.css";
import { FaAddressCard } from "react-icons/fa6";
import resume from "../components/images/raj_bansal_2.pdf";
const Header = () => {
    const [show, setShow] = useState(false);
    const handelShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const HomeRef = useRef();
    const AboutRef = useRef();
    const SkillRef = useRef();
    const ExperienceRef = useRef();
    const ContectRef = useRef();

    const handleNavigate = (eleRef) => {
        console.log(eleRef)
        window.scrollTo({ top: eleRef.current.offsetTop
            , behavior: "smooth" });
    }

    const navs = [
        {
            id: 1,
            title: "Home",
            ref: HomeRef
        },
        {
            id: 2,
            title: "About",
            ref: AboutRef
        },
        {
            id: 3,
            title: "Skills",
            ref: SkillRef
        },
        {
            id: 4,
            title: "Experience",
            ref: ExperienceRef
        },
        {
            id: 5,
            title: "Contact",
            ref: ContectRef
        }
    ]
    return (
        <>
            <Container fluid style={{ backgroundColor: "#079778", boxShadow: "0 1px 6px 0px gray", zIndex: 2, position: "sticky", top: 0 }}>
                <Row>
                    <Navbar collapseOnSelect expand="lg">
                        <Col sm={1} className="">
                            <Nav className="" style={{ color: "red", fontWeight: "bold" }}>
                            </Nav>
                        </Col>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light" onClick={handelShow} />
                        <Offcanvas style={{ width: "200px", backgroundColor: "grey" }} show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>

                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                {
                                    navs.map((items) => {
                                        return (
                                            <>
                                                <Col key={items.id}>
                                                    <Nav className="mt-2">

                                                        <Link to={items.to} style={{ textDecoration: "none", color: "red" }}>
                                                            {items.title}
                                                        </Link>
                                                    </Nav>
                                                </Col>
                                            </>
                                        )
                                    })
                                }

                            </Offcanvas.Body>
                        </Offcanvas>
                        <Navbar.Collapse className="">

                            {
                                navs.map((items) => {
                                    return (
                                        <>
                                            <Col onClick={() => handleNavigate(items?.ref)} key={items.id} className="d-lg-block d-none col-sm-1">
                                                <Nav className="">
                                                    <Link style={{ textDecoration: "none", color: "white" }} className="header">
                                                        <b>{items.title}</b>
                                                    </Link>
                                                </Nav>

                                            </Col>
                                        </>
                                    )
                                })
                            }
                            <Col className="text-end col-sm-6 d-lg-block d-none">
                                <button className="btn btn-light" style={{ color: "#079778" }}>
                                    <FaAddressCard /> <b><a href={resume} download="resume" style={{ textDecoration: "none", color: "#079778" }}>Download CV</a></b>
                                </button>
                            </Col>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
            <HomePage HomeRef={HomeRef} AboutRef={AboutRef} SkillRef={SkillRef} ExperienceRef={ExperienceRef} ContectRef={ContectRef}/>
        </>
    )
}
export default Header;
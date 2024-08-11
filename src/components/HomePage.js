import React from "react";
import { Container } from "react-bootstrap";
import About from "./About";
import Banner from "./Banner";
import CallApi from "./CallApi";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";
const HomePage = ({HomeRef,AboutRef,SkillRef,ExperienceRef,ContectRef}) => {
    return (
        <>
            <Container fluid style={{ backgroundColor: '#364653' }} ref={HomeRef}>
                <Banner/>
                <About AboutRef={AboutRef}/>
                <br/>
                <hr className="text-light" style={{color:"#079778"}}/>
                <Skills SkillRef={SkillRef}/>
                <br/> <br/>
                <hr className="text-light" style={{color:"#079778"}}/>
                <Experience ExperienceRef={ExperienceRef}/>
                <br/>
                <hr className="text-light" style={{color:"#079778"}}/>
                <Contact ContectRef={ContectRef}/>
                {/* <Services />
                <Projects/> */}
            </Container>

        </>
    )
}
export default HomePage;
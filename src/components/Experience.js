import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { Col, Container, Row } from "react-bootstrap";
import { FaGreaterThan } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";


const Experience = ({ExperienceRef}) => {
    return (
        <>
            <Container ref={ExperienceRef}>
                <Row>
                    <Col>
                        <h1 className="text-center mt-5" style={{color:"#079778"}}>Experience</h1>
                        <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.light"
                                >
                                    <Typography variant="h6" component="span" style={{color:"#079778"}}>
                                        React-js Developer
                                    </Typography>
                                    <Typography className="text-light">June 2023 - Present
                                        1 year 
                                    </Typography>

                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot>
                                        <MdOutlineWork />

                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span" style={{color:"#079778"}}>
                                    Mild Stone Software Pvt. Ltd., Bhopal
                                    </Typography>
                                    <Typography className="text-light"> <FaGreaterThan /> Developing LMS project using React & Javascript.</Typography>
                                    <Typography className="text-light"> <FaGreaterThan /> Online education and implementing new features as part of LMS web app project</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant="body2"
                                    color="text.light"
                                >
                                   <Typography variant="h6" component="span" style={{color:"#079778"}}>
                                    Aimerse technologies India Pvt. Ltd., Bhopal
                                    </Typography>
                                    <Typography className="text-light"> <FaGreaterThan /> Developing Startup Starter project using React & Javascript.</Typography>
                                    <Typography className="text-light"> <FaGreaterThan />  Online Bussiness and implementing of Startup Starter web app project.</Typography>

                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot >
                                        <MdOutlineWork />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span" style={{color:"#079778"}}>
                                        React-js Internship
                                    </Typography>
                                    <Typography className="text-light">November 2022 - May 2023
                                        6 months 
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Experience;
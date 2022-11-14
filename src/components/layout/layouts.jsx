import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";
import SideNav from "../sideNav";
import CustomNav from "../navbar";

const Layout =({children}) =>{
    
        
    return(
        <React.Fragment>
            <Container as={"section"} fluid>
                <Row >
                    <Col lg={2}>
                        <SideNav />
                    </Col>
                    <Col lg={10}>
                        <CustomNav />
                        {children}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Layout;

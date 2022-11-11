import { Container, Row, Col } from "react-bootstrap";
import { Fragment } from "react";
import SideNav from "../sideNav";
import CustomNav from "../navbar";

const Layout =({children}) =>{
    
    return(
        <Fragment>
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
        </Fragment>
    )
}

export default Layout;

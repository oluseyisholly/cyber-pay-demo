import React from "react";
import { Navbar, Nav, Row, Col, InputGroup, Form } from "react-bootstrap";
import { BsFillBellFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi"
import { IoMdSettings } from "react-icons/io";
import { useSelector } from "react-redux";
import { IMAGES } from "../asset/images/image";
import "../asset/styles/navStyle.css";
import { allRoutes, getStartedList, routes } from "../routes";
import OnBoarding from "./onBoarding";

const CustomNav = () => {
    const midRoute = useSelector((state) => state.route.midRoute)
    const endRoute = useSelector((state) => state.route.endRoute)
    const getStartedStyle = useSelector((state) => state.route.getStartedStyle)
    const otherStyle = useSelector((state) => state.route.otherStyle)
    return(
        <React.Fragment>
            <Row className="flex-row justify-content-center">
                <Col lg={11}>
                    <Navbar expand="lg" className="mt-4 justify-content-between">
                        <Nav className="fs-5 color-blue search-width" href="#home">
                            {window.location.pathname === routes.dashboard && (
                                <InputGroup size="lg" className="position-relative">
                                    <Form.Control
                                    placeholder="Search Name, Transaction, Wallets, Mandates..Etc"
                                    aria-label="Search Sub Account"
                                    aria-describedby="basic-addon2"
                                    className="inputclass search-font rounded-0 card-color-2 ps-4 input-bg"
                                    />
                                    <InputGroup.Text id="basic-addon2" className="border-0 position-absolute no">
                                        <BiSearch className="fs-1 fw-lighter font-generic"/>
                                    </InputGroup.Text>
                                </InputGroup>
                            )}
                            {
                                allRoutes.indexOf(window.location.pathname) !== -1  && (
                                    <div className="route-font">
                                        <p className={"d-inline"}>CyberPay Merchant/</p>
                                        <p className={getStartedStyle}>{midRoute}</p>
                                        <p className={otherStyle}>{endRoute}</p>
                                    </div>
                                )
                            }
                        </Nav>
                        <Nav className="justify-content-end d-flex w-50" id="basic-navbar-nav">
                            <div className="nav-width flex-row align-items-center justify-content-end d-none d-lg-block">
                                <BsFillBellFill className="color-blue me-4 fs-2 my-auto"/>
                                <IoMdSettings className="color-blue settgsIcon" />
                                <img width={"50px"} height="50" className={" ms-4 rounded-circle my-circle"} src={IMAGES.avatar} alt={'avatar'}/>
                                <p className={"fs-6 fw-bold my-auto text-nowrap ps-3 d-inline"}>Hello, Olusola</p>
                            </div>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>
            <Row className="flex-row justify-content-center">
                <Col lg={11}>
                    {
                        getStartedList.indexOf(window.location.pathname) !== -1 && <OnBoarding />
                    }
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default CustomNav;


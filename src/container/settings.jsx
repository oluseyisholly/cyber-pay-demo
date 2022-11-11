import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { CustomCard } from "../components/customCard"
import { MdSettingsSuggest } from "react-icons/md"

const Settings = () => {
    return(
        <React.Fragment>
            <Container as={"section"} fluid>
                <Row className="flex-row justify-content-center mt-5">
                    <Col lg={11}>
                        <Row className="mb-5">
                            <Col lg={4}>
                                <div>
                                    <MdSettingsSuggest className="icon-fs color-blue pb-2"/>
                                    <h1 className="fw-acc d-inline pt-3">Settings</h1>
                                    <span>
                                        <h5 className="font-generic fs-4">Here are settings for your profile</h5>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11}>
                                            <Row className="flex-row justify-content-between">
                                                <Col>
                                                    <h5 className="text-black pt-3 fs-4 fw-bold">Security Settings</h5>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col className="my-5">
                                                    <p className="card-color2 fs-5">Password</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="mb-5">
                                                    <h5 className="card-color2 fw-bold fs-5">Two-Factor Authentication</h5>
                                                    <Button className="fs-5 fw-bold light-blue color-blue border-0 px-5 py-2">
                                                        Two-Factor Authentication
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={6}>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Settings;
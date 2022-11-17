import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { CustomCard } from "../components/customCard"
import { BsPersonFill } from "react-icons/bs"
import { MdOutlineAddToPhotos, MdSimCardDownload } from "react-icons/md"
import { ImLab } from "react-icons/im"
import { useDispatch } from "react-redux"
import { setRoute } from "../features/layoutSlice"

const BusinessProfile = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setRoute({
            midRoute: " Business Profile",
            endRoute: "",
            getStartedStyle: "d-inline text-dark",
            otherStyle: "d-none "
           }))
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <React.Fragment>
            <Container as={"section"} fluid>
                <Row className="flex-row justify-content-center mt-5">
                    <Col lg={11} md={11} sm={10}>
                        <Row className="mb-lg-5 mb-3">
                            <Col >
                                <BsPersonFill className="icon-fs color-blue pb-2"/>
                                <h1 className="fw-acc d-inline pt-3">Business Profile</h1>
                                <span>
                                    <h5 className="font-generic fs-4">Here are information of your business profile</h5>
                                </span>
                            </Col>
                        </Row>
                        <Row className="gy-5 gx-4">
                            <Col lg={6}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11} md={11} sm={11}>
                                            <Row className="flex-row justify-content-between">
                                                <Col>
                                                    <h5 className="card-color1 fs-custom fw-bold">PROFILE</h5>
                                                </Col>
                                                <Col className="">
                                                    <h5 className="color-blue fs-custom fw-bold text-end">Edit</h5>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-custom">KING BUSINESS</h5>
                                                    <p className="card-color2 fs-custom">Name</p>
                                                </Col>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-custom text-end">KIN000024</h5>
                                                    <p className="card-color2 fs-custom text-end">Code</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-custom">king@king.com</h5>
                                                    <p className="card-color2 fs-custom">Contact Email</p>
                                                </Col>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-custom text-end">kingresolve@king.com</h5>
                                                    <p className="card-color2 fs-custom text-end">Dispute Email</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-custom">kingsupport@king.com</h5>
                                                    <p className="card-color2 fs-custom">Support Email</p>
                                                </Col>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-custom text-end">kingbusiness@king.com</h5>
                                                    <p className="card-color2 fs-custom text-end">Business Email</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-custom">09039158414</h5>
                                                    <p className="card-color2 fs-custom">Phone Number</p>
                                                </Col>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-custom text-end">kingbusiness.com</h5>
                                                    <p className="card-color2 fs-custom text-end">Website</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-custom">Address</h5>
                                                    <p className="card-color2 fs-custom">how are you doing today, hope it's all going well.</p>
                                                </Col>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-custom text-end">Consolidated</h5>
                                                    <p className="card-color2 fs-custom text-end">Category</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11}>
                                            <Row>
                                                <Col>
                                                    <h5 className="text-dark fs-custom fw-bold pt-1">CLIENT INTEGRATION</h5>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row className="my-5">
                                                <p className="text-center card-color1 fs-custom">This business has no client integration Setup</p>
                                                <Button className="mx-auto w-50 fs-custom fw-bold light-blue border-0 color-blue py-3 px-3">
                                                    <ImLab className="me-3"/>
                                                    Setup Client Integration
                                                </Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={6}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11} md={11} sm={11}>
                                            <Row className="flex-row justify-content-between">
                                                <Col>
                                                    <h5 className="card-color1 fs-custom fw-bold">INTEGRATION</h5>
                                                </Col>
                                                <Col className="">
                                                    <h5 className="color-blue fs-custom fw-bold text-end">LIVE</h5>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row className="flex-row justify-content-between">
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-custom">LIVE</h5>
                                                    <p className="card-color2 fs-custom">Integration Status</p>
                                                </Col>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-custom text-end">KING BUSINESS</h5>
                                                    <p className="card-color2 fs-custom text-end">Business Name</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-custom">kfefefeenfn4h3ioh444obj234bjkb4</h5>
                                                    <p className="card-color2 fs-custom">Integration Key</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-custom">KIN000024</h5>
                                                    <p className="card-color2 fs-custom">Business Code</p>
                                                </Col>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-custom text-end">************</h5>
                                                    <p className="card-color2 fs-custom text-end">Secret Key</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <Button className="busi fs-6">
                                                        Switch Account
                                                    </Button>
                                                </Col>
                                                <Col className="d-flex flex-row justify-content-end">
                                                    <Button className="fs-6">
                                                        <MdOutlineAddToPhotos className="me-3"/>
                                                        Test Payment
                                                    </Button>
                                                </Col>
                                            </Row>
                                            <hr/>
                                        </Col>
                                    </Row>
                                </CustomCard>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11} md={11} sm={11}>
                                            <Row>
                                                <Col>
                                                    <h5 className="text-dark fs-custom fw-bold pt-2">DOCUMENT UPLOAD</h5>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color2 fs-custom fw-bold py-3">CAC</h5>
                                                </Col>
                                                <Col className="d-flex flex-row justify-content-end">
                                                    <Button className="fs-custom fw-bold light-blue border-0 color-blue py-2 px-3">
                                                        <MdSimCardDownload className="me-3"/>
                                                        Download
                                                    </Button>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5  className="card-color2 fs-custom fw-bold py-3">Certificate</h5>
                                                </Col>
                                                <Col  className="d-flex flex-row justify-content-end">
                                                    <Button className="fs-custom fw-bold light-blue border-0 color-blue py-2 px-3">
                                                        <MdSimCardDownload className="me-3"/>
                                                        Download
                                                    </Button>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row className="mb-5">
                                                <Col>
                                                    <h5 className="card-color2 fw-bold py-3">Certificate</h5>
                                                </Col>
                                                <Col  className="d-flex flex-row justify-content-end pb-4">
                                                    <Button className="fs-custom fw-bold light-blue border-0 color-blue py-2 px-3">
                                                        <MdSimCardDownload className="me-3"/>
                                                        Download
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default BusinessProfile;
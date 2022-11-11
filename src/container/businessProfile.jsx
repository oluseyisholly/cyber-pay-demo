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
    }, [])

    return(
        <React.Fragment>
            <Container as={"section"} fluid>
                <Row className="flex-row justify-content-center mt-5">
                    <Col lg={11}>
                        <Row className="mb-5">
                            <Col >
                                <div>
                                    <BsPersonFill className="icon-fs color-blue pb-2"/>
                                    <h1 className="fw-acc d-inline pt-3">Business Profile</h1>
                                    <span>
                                        <h5 className="font-generic fs-4">Here are information of your business profile</h5>
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
                                                    <h5 className="card-color1 fs-5 fw-bold">PROFILE</h5>
                                                </Col>
                                                <Col className="">
                                                    <h5 className="color-blue fs-7 fw-bold text-end">Edit</h5>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5">KING BUSINESS</h5>
                                                    <p className="card-color2 fs-5">Name</p>
                                                </Col>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5 text-end">KIN000024</h5>
                                                    <p className="card-color2 fs-5 text-end">Code</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5">king@king.com</h5>
                                                    <p className="card-color2 fs-5">Contact Email</p>
                                                </Col>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5 text-end">kingresolve@king.com</h5>
                                                    <p className="card-color2 fs-5 text-end">Dispute Email</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5">kingsupport@king.com</h5>
                                                    <p className="card-color2 fs-5">Support Email</p>
                                                </Col>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5 text-end">kingbusiness@king.com</h5>
                                                    <p className="card-color2 fs-5 text-end">Business Email</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5">09039158414</h5>
                                                    <p className="card-color2 fs-5">Phone Number</p>
                                                </Col>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5 text-end">kingbusiness.com</h5>
                                                    <p className="card-color2 fs-5 text-end">Website</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5">Address</h5>
                                                    <p className="card-color2 fs-5">how are you doing today, hope it's all going well.</p>
                                                </Col>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5 text-end">Consolidated</h5>
                                                    <p className="card-color2 fs-5 text-end">Category</p>
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
                                                    <h5 className="text-dark fw-bold pt-1">CLIENT INTEGRATION</h5>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row className="my-5">
                                                <p className="text-center card-color1 fs-5">This business has no client integration Setup</p>
                                                <Button className="mx-auto w-50 fs-5 fw-bold light-blue border-0 color-blue py-3 px-3">
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
                                        <Col lg={11}>
                                            <Row className="flex-row justify-content-between">
                                                <Col>
                                                    <h5 className="card-color1 fs-5 fw-bold">INTEGRATION</h5>
                                                </Col>
                                                <Col className="">
                                                    <h5 className="color-blue fs-7 fw-bold text-end">LIVE</h5>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row className="flex-row justify-content-between">
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5">LIVE</h5>
                                                    <p className="card-color2 fs-5">Integration Status</p>
                                                </Col>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5 text-end">KING BUSINESS</h5>
                                                    <p className="card-color2 fs-5 text-end">Business Name</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5">kfefefeenfn4h3ioh444obj234bjkb4</h5>
                                                    <p className="card-color2 fs-5">Integration Key</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5">KIN000024</h5>
                                                    <p className="card-color2 fs-5">Business Code</p>
                                                </Col>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5 text-end">************</h5>
                                                    <p className="card-color2 fs-5 text-end">Secret Key</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <Button className="busi fs-6">
                                                        Switch Account
                                                    </Button>
                                                </Col>
                                                <Col>
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
                                        <Col lg={11}>
                                            <Row>
                                                <Col>
                                                    <h5 className="text-dark fw-bold pt-2">DOCUMENT UPLOAD</h5>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color2 fw-bold py-3">CAC</h5>
                                                </Col>
                                                <Col className="d-flex flex-row justify-content-end">
                                                    <Button className="fs-5 fw-bold light-blue border-0 color-blue py-2 px-3">
                                                        <MdSimCardDownload className="me-3"/>
                                                        Download
                                                    </Button>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5  className="card-color2 fw-bold py-3">Certificate</h5>
                                                </Col>
                                                <Col  className="d-flex flex-row justify-content-end">
                                                    <Button className="fs-5 fw-bold light-blue border-0 color-blue py-2 px-3">
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
                                                    <Button className="fs-5 fw-bold light-blue border-0 color-blue py-2 px-3">
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
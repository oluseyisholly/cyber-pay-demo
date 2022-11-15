import React from "react"
import { Button, Col, Container, InputGroup, Row } from "react-bootstrap"
import CustomTable from "../components/customTable"
import { BiPlus, BiSearch } from "react-icons/bi";
import { BsFillFileTextFill, BsSearch } from "react-icons/bs"
import { MdPayments } from "react-icons/md"
import "../asset/styles/table.css"
import { useDispatch } from "react-redux";
import { setRoute } from "../features/layoutSlice";
import { Form } from "react-bootstrap";
import CustomForm from "../components/customForm";

const jsonData = require("../jsonData.json")
console.log(jsonData.TransactionData)

const PaymentLink = () =>{

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setRoute({
            midRoute: " Payment Link",
            endRoute: "",
            getStartedStyle: "d-inline text-dark",
            otherStyle: "d-none "
           }))
    }, [])
    return(
        <React.Fragment>
            <Container as={"section"} fluid>
                <Row className="flex-row justify-content-center mt-lg-5 mt-3">
                    <Col lg={11} md={11} sm={10}>
                        <Row className="flex-row justify-content-between pt-3 gy-3">
                            <Col lg={6} md={6} sm={12}>
                                <MdPayments className="icon-fs color-blue pb-2"/>
                                <h1 className="fw-acc d-inline pt-3">Payment Link</h1>
                                <span>
                                    <h5 className="font-generic fs-4">Listings of pages created</h5>
                                </span>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="position-relative d-flex flex-row justify-content-end">
                                <Button 
                                    className="rounded-circle my-border text-center text-white d-flex justify-content-center align-items-center" >
                                    <BiPlus className=""/>
                                </Button>
                                <div className="border add-btn text-center w-width rounded my-height pt-3 fs-4">Add Page</div>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col lg={6} md={12} sm={12}>
                                <InputGroup size="lg" className="position-relative">
                                    <Form.Control
                                    placeholder="Search Payment Link"
                                    aria-label="Search Sub Account"
                                    aria-describedby="basic-addon2"
                                    className="inputclass fs-5 rounded-0 card-color-2 ps-4 input-bg "
                                    />
                                    <InputGroup.Text id="basic-addon2" className="border-0 position-absolute no">
                                        <BiSearch className="fs-1 fw-lighter font-generic"/>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <CustomTable bodyData={jsonData.PaymentLinkData}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default PaymentLink;
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { setStages, setTitle } from "../../features/mandateSlice";
import CustomForm from "../customForm"

const PayersDetails = () => {
    const [mandate, setMandate] = React.useState({
        payersDetail: {
            tagName: "",
            payersName: "",
            payersAddress: "",
            emailAddress: "",
            phoneNumber: "",
            callBackUrl: "",
        },
        bankDetails: {
            bank: "",
            accountName: "",
            AccountNumber: "",
            frequency: "",
            amount: "",
            variableAmount: "",
            narration: "",
        },
        mandateDetails: {
            subscriberCode: "",
            product: "",
            businessProduct: "",
            startDate: "",
            endDate: "",
            FirstPayoutDate: "",
            mandateFile: "",
        },
    })

    const [show, setShow] = React.useState(false);

    useSelector((state) => state.user.payersDetail);
    useSelector((state) => state.user.bankDetails);
    useSelector((state) => state.user.mandateDetails);

    const dispatch = useDispatch();

    const nextPage = (e) => {
        e.preventDefault();
        dispatch(setStages({stage: 2})
        )
    }

    return  <Row className="flex-row justify-content-center mb-3">
                <Col lg={10}>
                    <h4 className="py-4 color-blue fw-bold">STEP 1: PAYER'S DETAILS</h4>
                    <Form>
                        <Row className="mb-3 gx-5">
                            <CustomForm
                                as={Col}
                                label={"Tag Name"}
                                placeholder={"Enter Mandate Name"}
                                type={"text"}
                                value={mandate.payersDetail.tagName}
                                id={"formGridProduct"}
                                classStyle={"inputclass"}
                                onchange = {(tagName) => { setMandate({
                                    ...mandate.payersDetail, 
                                    tagName
                                })
                            }}
                            />
                            <CustomForm
                                as={Col}
                                label={"Payer's Name"}
                                placeholder={"Enter Payer's Name"}
                                type={"text"}
                                value={mandate.payersDetail.payersName}
                                id={"formGridCode"}
                                classStyle={"inputclass"}
                                onchange = {(payersName) => { setMandate({
                                    ...mandate.payersDetail, 
                                    payersName
                                })
                            }}
                            />
                        </Row>
                        <Row className="mb-3 gx-5">
                            <CustomForm
                                as={Col}
                                label={"Payer's Address"}
                                placeholder={"Enter Payer's Address"}
                                type={"text"}
                                area={"textarea"}
                                value={mandate.payersDetail.payersAddress}
                                id={"formGridProduct"}
                                classStyle={"area"}
                                onchange = {(payersAddress) => { setMandate({
                                    ...mandate.payersDetail, 
                                    payersAddress
                                })
                            }}
                            />
                            <CustomForm
                                as={Col}
                                label={"Email Address"}
                                placeholder={"Enter Email Address"}
                                type={"email"}
                                value={mandate.payersDetail.emailAddress}
                                id={"formGridCode"}
                                classStyle={"inputclass"}
                                onchange = {(emailAddress) => { setMandate({
                                    ...mandate.payersDetail, 
                                    emailAddress
                                })
                            }}
                            />
                        </Row>
                        <Row className="mb-3 gx-5">
                            <CustomForm
                                as={Col}
                                label={"Phone Number"}
                                placeholder={"Enter Phone Number"}
                                type={"tel"}
                                value={mandate.payersDetail.phoneNumber}
                                id={"formGridProduct"}
                                classStyle={"inputclass"}
                                onchange = {(phoneNumber) => { setMandate({
                                    ...mandate.payersDetail, 
                                    phoneNumber
                                })
                            }}
                            />
                            <CustomForm
                                as={Col}
                                label={"Call Back Url(Optional)"}
                                placeholder={"Enter Call Back Url"}
                                type={"text"}
                                value={mandate.payersDetail.callBackUrl}
                                id={"formGridCode"}
                                classStyle={"inputclass"}
                                onchange = {(callBackUrl) => { setMandate({
                                    ...mandate.payersDetail, 
                                    callBackUrl
                                })
                            }}
                            />
                        </Row>
                
                    </Form>
                    <Row className="gx-5 my-5 ">     
                        <Col xs={6}>
                            <Button 
                                className="w-100 inputclass"
                                onClick={nextPage}
                            >
                                Next
                            </Button>
                        </Col>
                        <Col xs={6}>
                            <Button 
                                variant="outline-primary" 
                                className="w-100 inputclass"
                                onClick={() => setShow(false)}
                            >
                                Cancel
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
}

export default PayersDetails;
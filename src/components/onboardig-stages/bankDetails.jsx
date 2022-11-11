import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { setStages } from "../../features/mandateSlice";
import CustomForm from "../customForm"

const BankDetails = () => {
    const [mandate, setMandate] = React.useState({
        bank: "",
        accountName: "",
        accountNumber: "",
        frequency: "",
        amount: "",
        variableAmount: "",
        narration: "",
    })

    useSelector((state) => state.user.mandateDetails);

    const dispatch = useDispatch();

    const next = (e) => {
        e.preventDefault();
        dispatch(setStages({stage: 3}));
    }

    const back = (e) => {
        e.preventDefault();
        dispatch(setStages({stage: 1}));
    }

    return  <Row className="flex-row justify-content-center mb-3">
                <Col lg={10}>
                    <h4 className="py-4 color-blue fw-bold">STEP 2: BANK DETAILS</h4>
                    <Form>
                        <Row className="mb-3 gx-5">
                            <CustomForm
                                as={Col}
                                label={"Bank"}
                                placeholder={"Enter Bank Name"}
                                type={"text"}
                                value={mandate.bank}
                                id={"formGridProduct"}
                                classStyle={"inputclass"}
                                onchange = {(bank) => { setMandate({
                                    ...mandate, 
                                    bank
                                })
                            }}
                            />
                            <CustomForm
                                as={Col}
                                label={"Account Name"}
                                placeholder={"Enter Payer's Name"}
                                type={"text"}
                                value={mandate.accountName}
                                id={"formGridCode"}
                                classStyle={"inputclass"}
                                onchange = {(accountName) => { setMandate({
                                    ...mandate, 
                                    accountName
                                })
                            }}
                            />
                        </Row>
                        <Row className="mb-3 gx-5">
                            <CustomForm
                                as={Col}
                                label={"Account Number"}
                                placeholder={"Enter Account Number"}
                                type={"text"}
                                value={mandate.accountNumber}
                                id={"formGridProduct"}
                                classStyle={"inputclass"}
                                onchange = {(accountNumber) => { setMandate({
                                    ...mandate, 
                                    accountNumber
                                })
                            }}
                            />
                            <CustomForm
                                as={Col}
                                label={"Frequency"}
                                placeholder={"Enter Frequency"}
                                type={"text"}
                                value={mandate.frequency}
                                id={"formGridCode"}
                                classStyle={"inputclass"}
                                onchange = {(frequency) => { setMandate({
                                    ...mandate, 
                                    frequency
                                })
                            }}
                            />
                        </Row>
                        <Row className="mb-3 gx-5">
                            <CustomForm
                                as={Col}
                                label={"Amount"}
                                placeholder={"Enter Amount"}
                                type={"tel"}
                                value={mandate.amount}
                                id={"formGridProduct"}
                                classStyle={"inputclass"}
                                onchange = {(amount) => { setMandate({
                                    ...mandate, 
                                    amount
                                })
                            }}
                            />
                            <CustomForm
                                as={Col}
                                label={"Variable Amount"}
                                placeholder={"Enter Variable Amount as 1000,2000,3000"}
                                type={"text"}
                                value={mandate.variableAmount}
                                id={"formGridCode"}
                                classStyle={"inputclass"}
                                onchange = {(variableAmount) => { setMandate({
                                    ...mandate, 
                                    variableAmount
                                })
                            }}
                            />
                        </Row>
                        <Row className="mb-3 gx-5">
                            <Col xs={6}>
                                <CustomForm 
                                    label={"Narration"}
                                    placeholder={"Enter Narration"}
                                    type={"text"}
                                    area={"textarea"}
                                    value= {mandate.narration}
                                    id={"formGridDescription"}
                                    classStyle={"area"}
                                    onchange = {(narration) => { setMandate({
                                        ...mandate, 
                                        narration
                                    })
                                }}
                                />
                            </Col>
                        </Row>
                
                    </Form>
                    <Row className="gx-5 my-5 ">     
                        <Col xs={6}>
                            <Button 
                                className="w-100 inputclass"
                                onClick={next}
                            >
                                Next
                            </Button>
                        </Col>
                        <Col xs={6}>
                            <Button 
                                variant="outline-primary" 
                                className="w-100 inputclass"
                                onClick={back}
                            >
                                Back
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
}

export default BankDetails;
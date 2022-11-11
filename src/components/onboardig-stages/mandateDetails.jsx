import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { setStages, setSubmit } from "../../features/mandateSlice";
import CustomForm from "../customForm"

const MandateDetails = (close) => {
    const [mandate, setMandate] = React.useState({
        subscriberCode: "",
        product: "",
        businessProduct: "",
        startDate: "",
        endDate: "",
        FirstPayoutDate: "",
        mandateFile: "",
    })

    const showEnd = useSelector((state) => state.stages.states)


    const dispatch = useDispatch();

    return  <Row className="flex-row justify-content-center mb-3">
                <Col lg={10}>
                    <h4 className="py-4 color-blue fw-bold">STEP 3: MANDATE DETAILS</h4>
                    <Form>
                        <Row className="mb-3 gx-5">
                            <CustomForm
                                as={Col}
                                label={"Subscriber Code"}
                                placeholder={"Enter Subscriber's Code"}
                                type={"text"}
                                value={mandate.subscriberCode}
                                id={"formGridProduct"}
                                classStyle={"inputclass"}
                                onchange = {(subscriberCode) => { setMandate({
                                    ...mandate, 
                                    subscriberCode
                                })
                            }}
                            />
                            <CustomForm
                                as={Col}
                                label={"Product"}
                                placeholder={"Select Product"}
                                type={"text"}
                                value={mandate.product}
                                id={"formGridCode"}
                                classStyle={"inputclass"}
                                onchange = {(product) => { setMandate({
                                    ...mandate, 
                                    product
                                })
                            }}
                            />
                        </Row>
                        <Row className="mb-3 gx-5">
                            <CustomForm
                                as={Col}
                                label={"Business Product"}
                                placeholder={"Select Business Product"}
                                type={"text"}
                                value={mandate.businessProduct}
                                id={"formGridProduct"}
                                classStyle={"inputclass"}
                                onchange = {(businessProduct) => { setMandate({
                                    ...mandate, 
                                    businessProduct
                                })
                            }}
                            />
                            <CustomForm
                                as={Col}
                                label={"Start Date"}
                                placeholder={"mm/dd/yy"}
                                type={"text"}
                                value={mandate.startDate}
                                id={"formGridCode"}
                                classStyle={"inputclass"}
                                onchange = {(startDate) => { setMandate({
                                    ...mandate, 
                                    startDate
                                })
                            }}
                            />
                        </Row>
                        <Row className="mb-3 gx-5">
                            <CustomForm
                                as={Col}
                                label={"End Date"}
                                placeholder={"mm/dd/yy"}
                                type={"text"}
                                value={mandate.endDate}
                                id={"formGridProduct"}
                                classStyle={"inputclass"}
                                onchange = {(endDate) => { setMandate({
                                    ...mandate, 
                                    endDate
                                })
                            }}
                            />
                            <CustomForm
                                as={Col}
                                label={"First PayOut Date"}
                                placeholder={"mm/dd/yy"}
                                type={"text"}
                                value={mandate.FirstPayoutDate}
                                id={"formGridCode"}
                                classStyle={"inputclass"}
                                onchange = {(FirstPayoutDate) => { setMandate({
                                    ...mandate, 
                                    FirstPayoutDate
                                })
                            }}
                            />
                        </Row>
                        <Row className="mb-3 gx-5">
                            <Col xs={6}>
                                <CustomForm 
                                    label={"Mandate File"}
                                    placeholder={"No FIle Chosen"}
                                    type={"text"}
                                    value= {mandate.mandateFile}
                                    id={"formGridDescription"}
                                    classStyle={"inputclass"}
                                    onchange = {(mandateFile) => { setMandate({
                                        ...mandate, 
                                        mandateFile
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
                            >
                                Submit
                            </Button>
                        </Col>
                        <Col xs={6}>
                            <Button 
                                variant="outline-primary" 
                                className="w-100 inputclass"
                                onClick={() => dispatch(setStages({stage: 2}))}
                            >
                                Back
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
}

export default MandateDetails;
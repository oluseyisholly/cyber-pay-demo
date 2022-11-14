import React, { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { RiErrorWarningFill } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CustomForm from "../components/customForm"
import { setRoute } from "../features/layoutSlice"
import { setTestIntegration } from "../features/onBoardingSlice"
import { getStartedRoutes } from "../routes"

export const TestIntegration = () => {
    const [integrate, setIntegrate] = useState({
        integrationStatus: "",
        businessName: "",
        businessCode: "",
        integrationKey: "",
    })
    const test = useSelector((state) => state.onBoarding.testIntegration)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const testInt = dispatch(setTestIntegration(integrate));
        if (testInt) {
            navigate(getStartedRoutes.updateProfile);
        }
    }

    React.useEffect(() => {
        dispatch(setRoute({
        midRoute: " Get Started/",
        endRoute: " Test Integration",
        getStartedStyle: "d-inline ",
        otherStyle: "d-inline text-dark"
       }))
    }, [])

    console.log(integrate);

    return(
        <React.Fragment>
            <Container as={"section"} fluid className="mt-5">
                <Row className="flex-row justify-content-center mt-5">
                    <Col lg={11}>
                        <h1>Step 2 : Test Integration</h1>
                        <div className="border p-4 test-border rounded my-5">
                            <RiErrorWarningFill className="fs-5 mb-1"/>
                            <p className="d-inline ms-3 fs-5">Create a sample account to test and understand your dedicated account</p>
                        </div>
                        <Form>
                            <Row className="gx-5 gy-3">
                                <Col lg={6} md={6} sm={12}>
                                    <CustomForm
                                        placeholder={"DEMO"}
                                        label={"Integration Status"}
                                        value={integrate.integrationStatus}
                                        type={"text"}
                                        classStyle={"inputclass"}
                                            onchange = {(integrationStatus) => { setIntegrate({
                                                ...integrate, 
                                                integrationStatus
                                            })
                                        }}
                                    />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <CustomForm
                                        placeholder={"KINGSCRAFT"}
                                        label={"Business Name"}
                                        type={"text"}
                                        value={integrate.businessName}
                                        classStyle={"inputclass"}
                                            onchange = {(businessName) => { setIntegrate({
                                                ...integrate, 
                                                businessName
                                            })
                                        }}
                                    />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <CustomForm
                                        placeholder={"KIN000014"}
                                        label={"Business Code"}
                                        type={"text"}
                                        value={integrate.businessCode}
                                        classStyle={"inputclass"}
                                            onchange = {(businessCode) => { setIntegrate({
                                                ...integrate, 
                                                businessCode
                                            })
                                        }}
                                    />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <CustomForm
                                        placeholder={"AC2342342JD344N"}
                                        label={"Integration Key"}
                                        type={"text"}
                                        value={integrate.integrationKey}
                                        classStyle={"inputclass"}
                                            onchange = {(integrationKey) => { setIntegrate({
                                                ...integrate, 
                                                integrationKey
                                            })
                                        }}
                                    />
                                </Col>
                            </Row>

                        </Form>
                        <Row className="gx-5 gy-3 mt-5">
                            <Col lg={6} md={6} sm={12}>
                                <Button 
                                    variant="outline-primary" 
                                    className="w-100 inputclass"
                                    onClick={() => {
                                        navigate("/")
                                    }}
                                >
                                    BACK
                                </Button>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <Button 
                                    className="w-100 inputclass"
                                    onClick={handleSubmit} 
                                >
                                    SAVE CHANGES
                                </Button>
                            </Col>
                        </Row>
                            </Col>
                        </Row>
            </Container>
        </React.Fragment>
    )
}
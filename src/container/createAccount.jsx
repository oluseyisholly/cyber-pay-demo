import React, { useState } from "react"
import {Button, Col, Container, Form, Row, Stack} from "react-bootstrap"
import "../asset/styles/myStyle.css"
import CustomForm from "../components/customForm"
import { useDispatch, useSelector } from "react-redux"
import { setCreateAccount } from "../features/onBoardingSlice"
import { useNavigate } from "react-router-dom"
import { getStartedRoutes } from "../routes"
import { setRoute } from "../features/layoutSlice"

export const CreateAccount = () => {
    const [account, setAccount] = useState
    ({
        bank: "",
        accountName: "",
        accountNumber: ""
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(account);

    const createAccount = useSelector((state) => state.onBoarding.createAccount)
    React.useEffect(() => {
        dispatch(setRoute({
        midRoute: " Get Started/",
        endRoute: " Create Account",
        getStartedStyle: "d-inline ",
        otherStyle: "d-inline text-dark"
       }))
    }, [])

   

    const handleSubmit = (e) => {
        e.preventDefault();
        const acc = dispatch(setCreateAccount(account));
        if (acc) {
            navigate(getStartedRoutes.testIntegration);
        }
    }
    console.log(createAccount);
    
    return(
        <React.Fragment>
            <Container as={"section"} fluid className="">
                <Row className="align-items-center justify-content-center mt-5">
                    <Col lg={11}>
                        <Form>
                            <Row className="mb-3">
                                <CustomForm
                                    as={Col}
                                    label={"Bank"}
                                    id={"formGridBank"}
                                    value={["GTBank", "Access", "UBA", "Zenith", "Union", "FirstBank", "Wema"]}
                                    defaultvalue={"Choose Bank"}
                                    classStyle={"inputclass create-text"}
                                    onchange = {(bank) => { setAccount({
                                        ...account, 
                                        bank
                                    })
                                }}
                                />
                                <CustomForm
                                    as={Col}
                                    label={"Account Number"}
                                    placeholder={"ENTER ACCOUNT NUMBER"}
                                    type={"text"}
                                    value={account.accountName}
                                    id={"formGridAccount"}
                                    classStyle={"inputclass"}
                                    onchange = {(accountName) => { setAccount({
                                        ...account, 
                                        accountName
                                    })
                                }}
                                />
                            </Row>
                            <Row className="mt-4">
                                <Col xs={6}>
                                    <CustomForm 
                                        label={"Account Name"}
                                        placeholder={"ENTER ACCOUNT NAME"}
                                        type={"text"}
                                        value= {account.accountNumber}
                                        id={"formGridAccName"}
                                        classStyle={"inputclass"}
                                        onchange = {(accountNumber) => { setAccount({
                                            ...account, 
                                            accountNumber
                                        })
                                    }}
                                    />
                                </Col>
                            </Row>
                        </Form>
                        <Row className="mt-5">
                            <Col xs={6}>
                                <Button 
                                    onClick={handleSubmit} 
                                    className="inputclass btn-width"
                                >
                                    CREATE ACCOUNT
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
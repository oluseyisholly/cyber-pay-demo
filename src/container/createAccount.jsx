import React, { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
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
       // eslint-disable-next-line react-hooks/exhaustive-deps
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
                                <Col lg={6} md={6} sm={12}>
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
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <CustomForm
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
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col lg={6} md={6} sm={12}>
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
                            <Row className="mt-5">
                                <Col lg={6} md={6} sm={12}>
                                    <Button 
                                        onClick={handleSubmit} 
                                        className="inputclass btn-width"
                                        type="button"
                                    >
                                        CREATE ACCOUNT
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
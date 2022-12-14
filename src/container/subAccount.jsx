import React from "react"
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import { BiPlus, BiSearch, BiTransfer } from "react-icons/bi"
import { TbVectorTriangle } from "react-icons/tb"
import { CustomCard } from "../components/customCard"
import CustomModal from "../components/customModal"
import "../asset/styles/myStyle.css"
import { useDispatch } from "react-redux"
import CustomForm from "../components/customForm"
import { setSubAccount } from "../features/userSlice"
import { setRoute } from "../features/layoutSlice"

export const SubAccount = () => {
    const [show, setShow] = React.useState(false)

    const [account, setAccount] = React.useState({
        accountName: "",
        accountNumber: "",
        deposit: "",
    })

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(setSubAccount(account));
    }

    React.useEffect(() => {
        dispatch(setRoute({
            midRoute: " Sub Account",
            endRoute: "",
            getStartedStyle: "d-inline text-dark",
            otherStyle: "d-none "
           }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(account);
    return(
        <React.Fragment>
            <Container as={"section"} fluid>
               <Row className="flex-row justify-content-center mt-lg-5 mt-3">
                    <Col lg={11} md={11} sm={10}>
                        <Row className="flex-row justify-content-between pt-3 gy-3">
                            <Col lg={6} md={6} sm={12}>
                                <TbVectorTriangle className="icon-fs color-blue pb-3"/>
                                <h1 className="fw-acc d-inline pt-3">Sub Account</h1>
                                <span>
                                    <h5 className="font-generic fs-4">Listings of created sub accounts</h5>
                                </span>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="position-relative d-flex flex-row justify-content-end">
                                <Button 
                                    className="rounded-circle my-border text-center text-white d-flex justify-content-center align-items-center" 
                                    onClick={() => setShow(true)}>
                                    <BiPlus />
                                </Button>
                                <CustomModal
                                    setShowModal={setShow} 
                                    show={show}    
                                    title={
                                        <div className="text-white trans-head ps-6 py-3">
                                            <h2>Add Sub Account</h2>
                                            <p>Add sub account to existing accounts</p>
                                        </div>
                                    }  
                                    body={
                                        <div className="">
                                            <Row className="pb-6 flex-row justify-content-center">
                                                <Col lg={10} md={10} sm={10}>
                                                    <h4 className="py-4 color-blue trans-font fw-bold">SUB ACCOUNT INFORMATION</h4>
                                                    <Form>
                                                        <Row className="gy-3 gx-5">
                                                            <Col lg={6} md={12} sm={12}>
                                                                <CustomForm
                                                                    label={"SubAccount Name"}
                                                                    placeholder={"Enter SubAccount Name"}
                                                                    type={"text"}
                                                                    value={account.accountName}
                                                                    id={"formGridProduct"}
                                                                    classStyle={"inputclass"}
                                                                    onchange = {(accountName) => { setAccount({
                                                                        ...account, 
                                                                        accountName
                                                                    })
                                                                }}
                                                                />
                                                            </Col> 
                                                            <Col lg={6} md={12} sm={12}>
                                                                <CustomForm
                                                                    as={Col}
                                                                    label={"SubAccount Number"}
                                                                    placeholder={"Enter SubAccount Number"}
                                                                    type={"text"}
                                                                    value={account.accountNumber}
                                                                    id={"formGridCode"}
                                                                    classStyle={"inputclass"}
                                                                    onchange = {(accountNumber) => { setAccount({
                                                                        ...account, 
                                                                        accountNumber
                                                                    })
                                                                }}
                                                                />
                                                            </Col>
                                                            <Col lg={6} md={12} sm={12}>
                                                                <CustomForm 
                                                                    label={"Deposit"}
                                                                    placeholder={"Enter amount to deposit"}
                                                                    type={"text"}
                                                                    value= {account.deposit}
                                                                    id={"formGridDescription"}
                                                                    classStyle={"textarea"}
                                                                    onchange = {(deposit) => { setAccount({
                                                                        ...account, 
                                                                        deposit
                                                                    })
                                                                }}
                                                                />
                                                            </Col>    
                                                        </Row>
                                                    </Form>
                                                    <Row className="gx-5 gy-5 mt-3">
                                                        <Col xs={6}>
                                                            <Button 
                                                                variant="outline-primary" 
                                                                className="w-100 inputclass"
                                                            >
                                                             BACK
                                                            </Button>
                                                        </Col>
                                                        <Col xs={6}>
                                                            <Button 
                                                                className="w-100 inputclass"
                                                                onClick={handleSubmit} 
                                                            >
                                                                Submit
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </div>
                                    }                          
                                />
                                <div className="border add-btn text-center w-width rounded my-height pt-4 fs-4">Sub Account</div>
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-5">
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
                        <Row className="gy-5 gx-5">
                            <Col lg={6} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-between">
                                        <Col>
                                            <h5 className="card-color1 fs-5 fw-bold">Adewole Tomisin</h5>
                                            <p className="card-color2 fs-5">Name</p>
                                        </Col>
                                        <Col className="">
                                            <h5 className="color-blue fs-7 fw-bold text-end">N 81,428,111</h5>
                                            <p className="card-color2 fs-5 text-end">Available Balance</p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col>
                                            <h5 className="card-color1 fw-bold fs-5">0123456230</h5>
                                            <p className="card-color2 fs-5">Account Number</p>
                                        </Col>
                                        <Col className="ms-4">
                                            <h5 className="fs-7 fw-bold color-blue text-end">N 81,428,111</h5>
                                            <p className="card-color2 fs-5 text-end">Book Balance</p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col>
                                        </Col>
                                        <Col className="d-flex flex-row justify-content-end my-3">
                                            <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                <BiTransfer className=""/>
                                                Transfer
                                            </Button>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-between">
                                        <Col>
                                            <h5 className="card-color1 fs-5 fw-bold">Adewole Tomisin</h5>
                                            <p className="card-color2 fs-5">Name</p>
                                        </Col>
                                        <Col className="">
                                            <h5 className="color-blue fs-7 fw-bold text-end">N 81,428,111</h5>
                                            <p className="card-color2 fs-5 text-end">Available Balance</p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col>
                                            <h5 className="card-color1 fw-bold fs-5">0123456230</h5>
                                            <p className="card-color2 fs-5">Account Number</p>
                                        </Col>
                                        <Col className="ms-4">
                                            <h5 className="fs-7 fw-bold color-blue text-end">N 81,428,111</h5>
                                            <p className="card-color2 fs-5 text-end">Book Balance</p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col>
                                        </Col>
                                        <Col className="d-flex flex-row justify-content-end my-3">
                                            <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                <BiTransfer className=""/>
                                                Transfer
                                            </Button>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-between">
                                        <Col>
                                            <h5 className="card-color1 fs-5 fw-bold">Adewole Tomisin</h5>
                                            <p className="card-color2 fs-5">Name</p>
                                        </Col>
                                        <Col className="">
                                            <h5 className="color-blue fs-7 fw-bold text-end">N 81,428,111</h5>
                                            <p className="card-color2 fs-5 text-end">Available Balance</p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col>
                                            <h5 className="card-color1 fw-bold fs-5">0123456230</h5>
                                            <p className="card-color2 fs-5">Account Number</p>
                                        </Col>
                                        <Col className="ms-4">
                                            <h5 className="fs-7 fw-bold color-blue text-end">N 81,428,111</h5>
                                            <p className="card-color2 fs-5 text-end">Book Balance</p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col>
                                        </Col>
                                        <Col className="d-flex flex-row justify-content-end my-3">
                                            <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                <BiTransfer className=""/>
                                                Transfer
                                            </Button>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-between">
                                        <Col>
                                            <h5 className="card-color1 fs-5 fw-bold">Adewole Tomisin</h5>
                                            <p className="card-color2 fs-5">Name</p>
                                        </Col>
                                        <Col className="">
                                            <h5 className="color-blue fs-7 fw-bold text-end">N 81,428,111</h5>
                                            <p className="card-color2 fs-5 text-end">Available Balance</p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col>
                                            <h5 className="card-color1 fw-bold fs-5">0123456230</h5>
                                            <p className="card-color2 fs-5">Account Number</p>
                                        </Col>
                                        <Col className="ms-4">
                                            <h5 className="fs-7 fw-bold color-blue text-end">N 81,428,111</h5>
                                            <p className="card-color2 fs-5 text-end">Book Balance</p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col>
                                        </Col>
                                        <Col className="d-flex flex-row justify-content-end my-3">
                                            <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                <BiTransfer className=""/>
                                                Transfer
                                            </Button>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-between">
                                        <Col>
                                            <h5 className="card-color1 fs-5 fw-bold">Adewole Tomisin</h5>
                                            <p className="card-color2 fs-5">Name</p>
                                        </Col>
                                        <Col className="">
                                            <h5 className="color-blue fs-7 fw-bold text-end">N 81,428,111</h5>
                                            <p className="card-color2 fs-5 text-end">Available Balance</p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col>
                                            <h5 className="card-color1 fw-bold fs-5">0123456230</h5>
                                            <p className="card-color2 fs-5">Account Number</p>
                                        </Col>
                                        <Col className="ms-4">
                                            <h5 className="fs-7 fw-bold color-blue text-end">N 81,428,111</h5>
                                            <p className="card-color2 fs-5 text-end">Book Balance</p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col>
                                        </Col>
                                        <Col className="d-flex flex-row justify-content-end my-3">
                                            <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                <BiTransfer className=""/>
                                                Transfer
                                            </Button>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-between">
                                        <Col>
                                            <h5 className="card-color1 fs-5 fw-bold">Adewole Tomisin</h5>
                                            <p className="card-color2 fs-5">Name</p>
                                        </Col>
                                        <Col className="">
                                            <h5 className="color-blue fs-7 fw-bold text-end">N 81,428,111</h5>
                                            <p className="card-color2 fs-5 text-end">Available Balance</p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col>
                                            <h5 className="card-color1 fw-bold fs-5">0123456230</h5>
                                            <p className="card-color2 fs-5">Account Number</p>
                                        </Col>
                                        <Col className="ms-4">
                                            <h5 className="fs-7 fw-bold color-blue text-end">N 81,428,111</h5>
                                            <p className="card-color2 fs-5 text-end">Book Balance</p>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col>
                                        </Col>
                                        <Col className="d-flex flex-row justify-content-end my-3">
                                            <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                <BiTransfer className=""/>
                                                Transfer
                                            </Button>
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
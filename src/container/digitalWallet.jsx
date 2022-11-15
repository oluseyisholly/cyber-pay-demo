import React from "react"
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import { BiPlus, BiSearch } from "react-icons/bi"
import { RiWallet3Fill } from "react-icons/ri"
import { MdOutlineAddToPhotos } from "react-icons/md"
import { useDispatch } from "react-redux"
import "../asset/styles/myStyle.css"
import { CustomCard } from "../components/customCard"
import CustomForm from "../components/customForm"
import CustomModal from "../components/customModal"
import { setDigitalWallet } from "../features/userSlice"
import { setRoute } from "../features/layoutSlice"

export const DigitalWallet = () => {
    const [show, setShow] = React.useState(false)

    const [wallet, setWallet] = React.useState({
        walletName: "",
        walletAmount: "",
        walletCode: "",
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setDigitalWallet(wallet));
    }

    React.useEffect(() => {
        dispatch(setRoute({
            midRoute: " Digital Wallet",
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
                                <RiWallet3Fill className="icon-fs color-blue pb-3"/>
                                <h1 className="fw-acc d-inline pt-3">Digital Wallet</h1>
                                <span>
                                    <h5 className="font-generic fs-4">Here are listings of created wallets</h5>
                                </span>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="position-relative d-flex flex-row justify-content-end">
                                <Button 
                                    className="rounded-circle my-border text-center text-white d-flex justify-content-center align-items-center" 
                                    onClick={() => setShow(true)}>
                                    <BiPlus className=""/>
                                </Button>
                                <CustomModal
                                    setShowModal={setShow} 
                                    show={show}    
                                    title={
                                        <div className="text-white trans-head ps-6 py-3">
                                            <h2>Add Wallets</h2>
                                            <p>Add new wallet to existing wallets</p>
                                        </div>
                                    }  
                                    body={
                                        <div className="">
                                            <Row className="flex-row justify-content-center mb-3">
                                                <Col lg={10} md={10} sm={10}>
                                                    <h4 className="py-4 color-blue trans-font fw-bold">WALLETS INFORMATION</h4>
                                                    <Form>
                                                        <Row className="gy-3 gx-5">
                                                            <Col lg={6} md={12} sm={12}>
                                                                <CustomForm
                                                                    label={"Wallet Name"}
                                                                    placeholder={"Enter Wallet Name"}
                                                                    type={"text"}
                                                                    value={wallet.walletName}
                                                                    id={"formGridProduct"}
                                                                    classStyle={"inputclass"}
                                                                    onchange = {(walletName) => { setWallet({
                                                                        ...wallet, 
                                                                        walletName
                                                                    })
                                                                }}
                                                                />
                                                            </Col>  
                                                            <Col lg={6} md={12} sm={12}>
                                                                <CustomForm
                                                                    label={"Wallet Amount"}
                                                                    placeholder={"Enter amount"}
                                                                    type={"text"}
                                                                    value={wallet.walletAmount}
                                                                    id={"formGridCode"}
                                                                    classStyle={"inputclass"}
                                                                    onchange = {(walletAmount) => { setWallet({
                                                                        ...wallet, 
                                                                        walletAmount
                                                                    })
                                                                }}
                                                                />
                                                            </Col>
                                                            <Col lg={6} md={12} sm={12}>
                                                                <CustomForm 
                                                                    label={"WalletCode"}
                                                                    placeholder={"Enter Wallet Code"}
                                                                    type={"text"}
                                                                    value= {wallet.walletCode}
                                                                    id={"formGridDescription"}
                                                                    classStyle={"inputclass"}
                                                                    onchange = {(walletCode) => { setWallet({
                                                                        ...wallet, 
                                                                        walletCode
                                                                    })
                                                                }}
                                                                />
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                    <Row className="gx-5 my-5 ">
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
                                <div className="border add-btn text-center w-width rounded my-height pt-3 fs-4">Add Wallet</div>
                            </Col>
                        </Row>
                        <Row className="my-5">
                            <Col lg={6} md={12} sm={12}>
                                <InputGroup size="lg" className="position-relative">
                                    <Form.Control
                                    placeholder="Search Digital Wallets"
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
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11}>
                                            <Row className="flex-row justify-content-between ">
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-5 fw-bold">Pompano Wallet</h5>
                                                    <p className="card-color2 fs-5">Wallet</p>
                                                </Col>
                                                <Col className="mt-5">
                                                    <h5 className="color-blue fs-5 fw-bold text-end">N 81,428,111</h5>
                                                    <p className="card-color2 fs-5 text-end">Available Balance</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5">0123456230-3342-ddw-321</h5>
                                                    <p className="card-color2 fs-5">Wallet Code</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                </Col>
                                                <Col className="d-flex flex-row justify-content-end my-3">
                                                    <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                        <MdOutlineAddToPhotos className="me-3"/>
                                                        Top-Up
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11}>
                                            <Row className="flex-row justify-content-between ">
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-5 fw-bold">Pompano Wallet</h5>
                                                    <p className="card-color2 fs-5">Wallet</p>
                                                </Col>
                                                <Col className="mt-5">
                                                    <h5 className="color-blue fs-5 fw-bold text-end">N 81,428,111</h5>
                                                    <p className="card-color2 fs-5 text-end">Available Balance</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5">0123456230-3342-ddw-321</h5>
                                                    <p className="card-color2 fs-5">Wallet Code</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                </Col>
                                                <Col className="d-flex flex-row justify-content-end my-3">
                                                    <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                        <MdOutlineAddToPhotos className="me-3"/>
                                                        Top-Up
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11}>
                                            <Row className="flex-row justify-content-between ">
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-5 fw-bold">Pompano Wallet</h5>
                                                    <p className="card-color2 fs-5">Wallet</p>
                                                </Col>
                                                <Col className="mt-5">
                                                    <h5 className="color-blue fs-5 fw-bold text-end">N 81,428,111</h5>
                                                    <p className="card-color2 fs-5 text-end">Available Balance</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5">0123456230-3342-ddw-321</h5>
                                                    <p className="card-color2 fs-5">Wallet Code</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                </Col>
                                                <Col className="d-flex flex-row justify-content-end my-3">
                                                    <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                        <MdOutlineAddToPhotos className="me-3"/>
                                                        Top-Up
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11}>
                                            <Row className="flex-row justify-content-between ">
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-5 fw-bold">Pompano Wallet</h5>
                                                    <p className="card-color2 fs-5">Wallet</p>
                                                </Col>
                                                <Col className="mt-5">
                                                    <h5 className="color-blue fs-5 fw-bold text-end">N 81,428,111</h5>
                                                    <p className="card-color2 fs-5 text-end">Available Balance</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5">0123456230-3342-ddw-321</h5>
                                                    <p className="card-color2 fs-5">Wallet Code</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                </Col>
                                                <Col className="d-flex flex-row justify-content-end my-3">
                                                    <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                        <MdOutlineAddToPhotos className="me-3"/>
                                                        Top-Up
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11}>
                                            <Row className="flex-row justify-content-between ">
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-5 fw-bold">Pompano Wallet</h5>
                                                    <p className="card-color2 fs-5">Wallet</p>
                                                </Col>
                                                <Col className="mt-5">
                                                    <h5 className="color-blue fs-5 fw-bold text-end">N 81,428,111</h5>
                                                    <p className="card-color2 fs-5 text-end">Available Balance</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5">0123456230-3342-ddw-321</h5>
                                                    <p className="card-color2 fs-5">Wallet Code</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                </Col>
                                                <Col className="d-flex flex-row justify-content-end my-3">
                                                    <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                        <MdOutlineAddToPhotos className="me-3"/>
                                                        Top-Up
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard>
                                    <Row className="flex-row justify-content-center">
                                        <Col lg={11}>
                                            <Row className="flex-row justify-content-between ">
                                                <Col className="mt-5">
                                                    <h5 className="card-color1 fs-5 fw-bold">Pompano Wallet</h5>
                                                    <p className="card-color2 fs-5">Wallet</p>
                                                </Col>
                                                <Col className="mt-5">
                                                    <h5 className="color-blue fs-5 fw-bold text-end">N 81,428,111</h5>
                                                    <p className="card-color2 fs-5 text-end">Available Balance</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                    <h5 className="card-color1 fw-bold fs-5">0123456230-3342-ddw-321</h5>
                                                    <p className="card-color2 fs-5">Wallet Code</p>
                                                </Col>
                                            </Row>
                                            <hr/>
                                            <Row>
                                                <Col>
                                                </Col>
                                                <Col className="d-flex flex-row justify-content-end my-3">
                                                    <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                        <MdOutlineAddToPhotos className="me-3"/>
                                                        Top-Up
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
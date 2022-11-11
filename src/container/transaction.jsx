import React from "react"
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import CustomTable from "../components/customTable"
import { BiPlus, BiSearch } from "react-icons/bi";
import { BsFillFileTextFill, BsSearch } from "react-icons/bs"
import "../asset/styles/table.css"
import { useDispatch } from "react-redux";
import { setRoute } from "../features/layoutSlice";
import CustomForm from "../components/customForm";
import CustomModal from "../components/customModal";
import { setTransaction } from "../features/userSlice";

const jsonData = require("../jsonData.json")
console.log(jsonData.TransactionData)

const Transaction = () =>{
    const [show, setShow] = React.useState(false)

    const [transact, setTransact] = React.useState({
        payersName: "",
        merchantReference: "",
        amount: "",
        reference: "",
    })

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(setTransaction(transact));
    }

    React.useEffect(() => {
        dispatch(setRoute({
            midRoute: " Transaction",
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
                        <Row>
                            <Col className="d-flex flex-row justify-content-between pt-3">
                                <div>
                                    <BsFillFileTextFill className="icon-fs color-blue pb-2"/>
                                    <h1 className="fw-acc d-inline pt-3">Transaction</h1>
                                    <span>
                                        <h5 className="font-generic fs-4">Here are the list of transaction on this account</h5>
                                    </span>
                                </div>
                                <div className="position-relative">
                                    <Button 
                                        className="rounded-circle my-border text-center text-white d-flex justify-content-center align-items-center" 
                                        onClick={() => setShow(true)}
                                    >
                                        <BiPlus />
                                    </Button>
                                    <CustomModal
                                        setShowModal={setShow} 
                                        show={show}    
                                        title={
                                            <div className="text-white ps-6 py-3">
                                                <h2>Add Transaction</h2>
                                                <p>Add transaction to existing transactions</p>
                                            </div>
                                        }  
                                        body={
                                            <div className="">
                                                <Row className="pb-6 flex-row justify-content-center">
                                                    <Col lg={10}>
                                                        <h4 className="py-4 color-blue fw-bold">TRANSACTION INFORMATION</h4>
                                                        <Form>
                                                            <Row className="mb-3 gx-5">
                                                                <CustomForm
                                                                    as={Col}
                                                                    label={"Payer's Name"}
                                                                    placeholder={"Enter Name"}
                                                                    type={"text"}
                                                                    value={transact.payersName}
                                                                    id={"formGridProduct"}
                                                                    classStyle={"inputclass"}
                                                                    onchange = {(payersName) => { setTransact({
                                                                        ...transact, 
                                                                        payersName
                                                                    })
                                                                }}
                                                                />
                                                                <CustomForm
                                                                    as={Col}
                                                                    label={"Merchant Reference"}
                                                                    placeholder={"Enter Merchant Reference"}
                                                                    type={"text"}
                                                                    value={transact.merchantReference}
                                                                    id={"formGridCode"}
                                                                    classStyle={"inputclass"}
                                                                    onchange = {(merchantReference) => { setTransact({
                                                                        ...transact, 
                                                                        merchantReference
                                                                    })
                                                                }}
                                                                />
                                                            </Row>
                                                            <Row className="mb-3 gx-5">
                                                                <CustomForm
                                                                    as={Col}
                                                                    label={"Amount"}
                                                                    placeholder={"Enter amount"}
                                                                    type={"text"}
                                                                    value={transact.amount}
                                                                    id={"formGridProduct"}
                                                                    classStyle={"inputclass"}
                                                                    onchange = {(amount) => { setTransact({
                                                                        ...transact, 
                                                                        amount
                                                                    })
                                                                }}
                                                                />
                                                                <CustomForm
                                                                    as={Col}
                                                                    label={"Reference"}
                                                                    placeholder={"Enter Reference"}
                                                                    type={"text"}
                                                                    value={transact.reference}
                                                                    id={"formGridCode"}
                                                                    classStyle={"inputclass"}
                                                                    onchange = {(reference) => { setTransact({
                                                                        ...transact, 
                                                                        reference
                                                                    })
                                                                }}
                                                            />
                                                        </Row>
                                                    </Form>
                                                <Row className="gx-5 pt-4">
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
                                    <div className="border add-btn text-center w-width rounded my-height pt-3 fs-4">Add Transaction</div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col lg={6}>
                                <InputGroup size="lg" className="position-relative">
                                    <Form.Control
                                        placeholder="Search Transactions"
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
                            <CustomTable bodyData={jsonData.TransactionData}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Transaction
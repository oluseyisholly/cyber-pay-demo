import React from "react"
import { Button, Col, Container, Form, InputGroup, Modal, Row, Stack } from "react-bootstrap"
import { BiPlus, BiSearch } from "react-icons/bi"
import { RiFileCopy2Fill } from "react-icons/ri"
import { MdOutlineAddToPhotos } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import "../asset/styles/myStyle.css"
import { CustomCard } from "../components/customCard"
import CustomForm from "../components/customForm"
import CustomModal from "../components/customModal"
import { setPayersDetail } from "../features/userSlice"
import Stage1 from "../components/onboardig-stages/payersDetails"
import PayersDetails from "../components/onboardig-stages/payersDetails"
import BankDetails from "../components/onboardig-stages/bankDetails"
import MandateDetails from "../components/onboardig-stages/mandateDetails"
import { setRoute } from "../features/layoutSlice"
import CustomTable from "../components/customTable"

const jsonData = require("../jsonData.json")

export const Mandate = () => {
    const [show, setShow] = React.useState(false);

    const stages = useSelector((state) => state.stages.stage);
    const showEnd =  useSelector((state) => state.stages.states)
    console.log(showEnd)

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    React.useEffect(() => {
        dispatch(setRoute({
            midRoute: " Mandates",
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
                                    <RiFileCopy2Fill className="icon-fs color-blue pb-2"/>
                                    <h1 className="fw-acc d-inline pt-3">Mandates</h1>
                                    <span>
                                        <h5 className="font-generic fs-4">Listings of mandate created</h5>
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
                                                {stages === 1 && (
                                                    <div>
                                                        <h2>Add Mandates</h2>
                                                        <p>Add new mandates and Payer's Details</p>
                                                    </div>
                                                )}
                                                {stages === 2 || 3 && (
                                                    <div>
                                                        <h2>Add Mandates</h2>
                                                        <p>Add new mandate and instruction</p>
                                                    </div>
                                                )}
                                            </div>
                                        }  
                                        body={
                                            <div className="">
                                                {stages === 1 && <PayersDetails />}
                                                {stages === 2 && <BankDetails />}
                                                {stages === 3 && <MandateDetails />}
                                            </div>
                                        }                          
                                    />
                                    <div className="border add-btn text-center w-width rounded my-height pt-3 fs-4">Add Wallet</div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col xs={6}>
                                <InputGroup size="lg" className="position-relative">
                                    <Form.Control
                                    placeholder="Search Mandates"
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
                            <CustomTable bodyData={jsonData.MandateData}/>
                        </Row>
                    </Col>
               </Row>
            </Container>
        </React.Fragment>
    )
}
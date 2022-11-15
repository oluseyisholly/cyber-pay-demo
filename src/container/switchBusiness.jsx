import { Fragment } from "react"
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import { RiFileCopy2Fill } from 'react-icons/ri';
import { BiPlus, BiSearch  } from 'react-icons/bi';
import { AiFillEye } from 'react-icons/ai'
import {  BsSearch } from 'react-icons/bs';
import CustomForm from "../components/customForm";
import { CustomCard } from "../components/customCard";
import "../asset/styles/paymentLink.css"
import "../asset/styles/switch.css"
import CustomModal from "../components/customModal";
import React from"react";
import { useDispatch, useSelector } from "react-redux";
import { setBusinessInfo } from "../features/userSlice";
import { setRoute } from "../features/layoutSlice";

const Switch =() => {
    const [show, setShow] = React.useState(false);

    const [business, setBusiness] = React.useState({
        businessName: "",
        phoneNumber: "",
        website: "",
        businessEmailAddress: "",
        contactEmailAddress: "",
        supportEmail: "",
        payersAddress: "",
        businessCode: "",
    });

    useSelector((state) => state.user.businessInfo)
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(setBusinessInfo(business))
    }

    React.useEffect(() => {
        dispatch(setRoute({
            midRoute: " Switch Business",
            endRoute: "",
            getStartedStyle: "d-inline text-dark",
            otherStyle: "d-none "
           }))
    }, [])
    console.log(business);
    return(
        <Fragment>
            <Container as={"section"} fluid className="">
                <Row className="flex-row justify-content-center  mt-lg-5 mt-3">
                    <Col lg={11} md={11} sm={10}>
                        <Row className="flex-row justify-content-between pt-3 gy-3">
                            <Col lg={6} md={6} sm={12}>
                                <RiFileCopy2Fill className="icon-fs color-blue pb-2"/>
                                <h1 className="fw-acc d-inline pt-3">Switch Business</h1>
                                <span>
                                    <h5 className="font-generic fs-4">Listings of business can be switched</h5>
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
                                        <div className="cus-div">
                                            <h3>Add Business</h3>
                                            <p className="p-fs">Add new business to an existing business</p>
                                        </div>
                                    }   
                                    body={
                                        <div className="">
                                            <Row>
                                                <Col className="cus-div">
                                                    <h5 className="payment-div mb-3">BUSINESS INFORMATION</h5>
                                                </Col>
                                            </Row>
                                            <Row className="my-margin-8">
                                                <Col lg={5} className=" mt-3 ">
                                                    <CustomForm
                                                        as={Col}
                                                        type={"text"} 
                                                        placeholder={"Enter Business Name"} 
                                                        label={"Business Name"}
                                                        className={"myinputs"} 
                                                        value={business.businessName}
                                                        onchange={(businessName) => {setBusiness({
                                                            ...business, businessName
                                                        })}}
                                                    />
                                                </Col>
                                                <Col lg={5} className="mt-3  ">
                                                    <CustomForm
                                                        as={Col}
                                                        type={"text"} 
                                                        placeholder={"Enter Phone Number"} 
                                                        label={"Phone Number"}
                                                        className={"myinputs"}
                                                        value={business.phoneNumber}
                                                        onchange={(phoneNumber) => {setBusiness({
                                                            ...business, phoneNumber
                                                        })}} 
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="my-margin-8">
                                                <Col lg={5} className=" mt-3 ">
                                                    <CustomForm
                                                        as={Col}
                                                        type={"text"} 
                                                        placeholder={"Enter Website"} 
                                                        label={"Website"}
                                                        className={"myinputs"} 
                                                        value={business.website}
                                                        onchange={(website) => {setBusiness({
                                                            ...business, website
                                                        })}}
                                                    />
                                                </Col>
                                                <Col lg={5} className=" mt-3 ">
                                                    <CustomForm
                                                        as={Col}
                                                        type={"text"} 
                                                        placeholder={"Enter Email Address"} 
                                                        label={"Business Email Address"}
                                                        className={"myinputs"} 
                                                        value={business.businessEmail}
                                                        onchange={(businessEmail) => {setBusiness({
                                                            ...business, businessEmail
                                                        })}}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="my-margin-8">
                                                <Col lg={5} className="mt-3  ">
                                                    <CustomForm
                                                        as={Col}
                                                        type={"text"} 
                                                        placeholder={"Enter Contact Email"} 
                                                        label={"Contact Mail Address"}
                                                        className={"myinputs"} 
                                                        value={business.contactEmail}
                                                        onchange={(contactEmail) => {setBusiness({
                                                            ...business, contactEmail
                                                        })}}
                                                    />
                                                </Col>
                                                <Col lg={5} className="mt-3  ">
                                                    <CustomForm
                                                        as={Col}
                                                        type={"text"} 
                                                        placeholder={"Enter Support Email"} 
                                                        label={"Support Email Address"}
                                                        className={"myinputs"} 
                                                        value={business.supportEmail}
                                                        onchange={(businessName) => {setBusiness({
                                                            ...business, businessName
                                                        })}}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="my-margin-8">
                                                <Col lg={5} className=" mt-3">
                                                    <CustomForm
                                                        as={Col}
                                                        type={"text"} 
                                                        placeholder={"Enter Payer's Address"} 
                                                        label={"Payer's Address"}
                                                        classStyle={"my-h-30"} 
                                                        value={business.payersAddress}
                                                        onchange={(payersAddress) => {setBusiness({
                                                            ...business, payersAddress
                                                        })}}
                                                    />
                                                </Col>
                                                <Col lg={5}></Col>
                                            </Row>
                                            <Row className="my-margin-8 mt-3 gy-4">
                                                <Col lg={5} className="  ">
                                                    <Button className= "w-100 btn-height" onClick={handleSubmit}>
                                                        Submit
                                                    </Button>
                                                </Col>
                                                <Col lg={5} className="  ">
                                                    <Button className= "w-100 my-cancel btn-height">
                                                        Cancel
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    }
                                />  
                                <div className="border add-btn text-center w-width rounded my-height pt-3 fs-4">Add Business</div>
                            </Col>
                        </Row>
                        <Row className="my-5">
                            <Col lg={6} md={12} sm={12}>
                                <InputGroup size="lg" className="position-relative">
                                    <Form.Control
                                    placeholder="Search Businesses"
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
                                <CustomCard className={" mar-minus ps-4 py-5"}>
                                    <Row className=" mt-0 border-bot ">
                                        <Col className="p-0 ">
                                            <div className=" mb-3 card-color1"><h5 className="fw-bold">All Weather </h5></div>
                                            <div className=" mb-3 busi card-color2 fs-7"><p>Business name </p></div>
                                        </Col>
                                        <Col className="dflex">
                                        </Col>
                                        <Col className="p-0  ">
                                            <div className=" mb-3 card-color1"><h5 className="fw-bold">KIN*388892</h5></div>
                                            <div className=" mb-3 busi card-color2 fs-7"><p>Business No</p> </div>
                                        </Col>  
                                    </Row>
                                    <Row className=" mt-3">
                                        <Col className="p-0 ">
                                            <div className="fs-7 card-color2"><p>Address</p></div>
                                            <div className="fs-7 card-color1"><p>mjdjsgvds ns sgvdhkdsgvsb vxvdsdsdsbd sgvdsgvdsgsdvgdv v vd </p></div>
                                        </Col>
                                    </Row> 
                                    <Row className=" mt-3 mb-3">
                                        <Col className=""> 
                                            <Button className="mycolour icon-color fw-bold fs-5 px-4">
                                                Set Current
                                            </Button>
                                        </Col>
                                        <Col className="busi"> 
                                            <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                <AiFillEye className=""/>
                                                View Details
                                            </Button>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard className={" mar-minus ps-4 py-5"}>
                                    <Row className=" mt-0 border-bot ">
                                        <Col className="p-0 ">
                                            <div className=" mb-3 card-color1"><h5 className="fw-bold">All Weather </h5></div>
                                            <div className=" mb-3 busi card-color2 fs-7"><p>Business name </p></div>
                                        </Col>
                                        <Col className="dflex">
                                        </Col>
                                        <Col className="p-0  ">
                                            <div className=" mb-3 card-color1"><h5 className="fw-bold">KIN*388892</h5></div>
                                            <div className=" mb-3 busi card-color2 fs-7"><p>Business No</p> </div>
                                        </Col>  
                                    </Row>
                                    <Row className=" mt-3">
                                        <Col className="p-0 ">
                                            <div className="fs-7 card-color2"><p>Address</p></div>
                                            <div className="fs-7 card-color1"><p>mjdjsgvds ns sgvdhkdsgvsb vxvdsdsdsbd sgvdsgvdsgsdvgdv v vd </p></div>
                                        </Col>
                                    </Row> 
                                    <Row className=" mt-3 mb-3">
                                        <Col className=""> 
                                            <Button className="mycolour icon-color fw-bold fs-5 px-4">
                                                Set Current
                                            </Button>
                                        </Col>
                                        <Col className="busi"> 
                                            <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                <AiFillEye className=""/>
                                                View Details
                                            </Button>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard className={" mar-minus ps-4 py-5"}>
                                    <Row className=" mt-0 border-bot ">
                                        <Col className="p-0 ">
                                            <div className=" mb-3 card-color1"><h5 className="fw-bold">All Weather </h5></div>
                                            <div className=" mb-3 busi card-color2 fs-7"><p>Business name </p></div>
                                        </Col>
                                        <Col className="dflex">
                                        </Col>
                                        <Col className="p-0  ">
                                            <div className=" mb-3 card-color1"><h5 className="fw-bold">KIN*388892</h5></div>
                                            <div className=" mb-3 busi card-color2 fs-7"><p>Business No</p> </div>
                                        </Col>  
                                    </Row>
                                    <Row className=" mt-3">
                                        <Col className="p-0 ">
                                            <div className="fs-7 card-color2"><p>Address</p></div>
                                            <div className="fs-7 card-color1"><p>mjdjsgvds ns sgvdhkdsgvsb vxvdsdsdsbd sgvdsgvdsgsdvgdv v vd </p></div>
                                        </Col>
                                    </Row> 
                                    <Row className=" mt-3 mb-3">
                                        <Col className=""> 
                                            <Button className="mycolour icon-color fw-bold fs-5 px-4">
                                                Set Current
                                            </Button>
                                        </Col>
                                        <Col className="busi"> 
                                            <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                <AiFillEye className=""/>
                                                View Details
                                            </Button>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard className={" mar-minus ps-4 py-5"}>
                                    <Row className=" mt-0 border-bot ">
                                        <Col className="p-0 ">
                                            <div className=" mb-3 card-color1"><h5 className="fw-bold">All Weather </h5></div>
                                            <div className=" mb-3 busi card-color2 fs-7"><p>Business name </p></div>
                                        </Col>
                                        <Col className="dflex">
                                        </Col>
                                        <Col className="p-0  ">
                                            <div className=" mb-3 card-color1"><h5 className="fw-bold">KIN*388892</h5></div>
                                            <div className=" mb-3 busi card-color2 fs-7"><p>Business No</p> </div>
                                        </Col>  
                                    </Row>
                                    <Row className=" mt-3">
                                        <Col className="p-0 ">
                                            <div className="fs-7 card-color2"><p>Address</p></div>
                                            <div className="fs-7 card-color1"><p>mjdjsgvds ns sgvdhkdsgvsb vxvdsdsdsbd sgvdsgvdsgsdvgdv v vd </p></div>
                                        </Col>
                                    </Row> 
                                    <Row className=" mt-3 mb-3">
                                        <Col className=""> 
                                            <Button className="mycolour icon-color fw-bold fs-5 px-4">
                                                Set Current
                                            </Button>
                                        </Col>
                                        <Col className="busi"> 
                                            <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                <AiFillEye className=""/>
                                                View Details
                                            </Button>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard className={" mar-minus ps-4 py-5"}>
                                    <Row className=" mt-0 border-bot ">
                                        <Col className="p-0 ">
                                            <div className=" mb-3 card-color1"><h5 className="fw-bold">All Weather </h5></div>
                                            <div className=" mb-3 busi card-color2 fs-7"><p>Business name </p></div>
                                        </Col>
                                        <Col className="dflex">
                                        </Col>
                                        <Col className="p-0  ">
                                            <div className=" mb-3 card-color1"><h5 className="fw-bold">KIN*388892</h5></div>
                                            <div className=" mb-3 busi card-color2 fs-7"><p>Business No</p> </div>
                                        </Col>  
                                    </Row>
                                    <Row className=" mt-3">
                                        <Col className="p-0 ">
                                            <div className="fs-7 card-color2"><p>Address</p></div>
                                            <div className="fs-7 card-color1"><p>mjdjsgvds ns sgvdhkdsgvsb vxvdsdsdsbd sgvdsgvdsgsdvgdv v vd </p></div>
                                        </Col>
                                    </Row> 
                                    <Row className=" mt-3 mb-3 flex-row justify-content-between">
                                        <Col className=""> 
                                            <Button className="mycolour icon-color fw-bold fs-5 px-4">
                                                Set Current
                                            </Button>
                                        </Col>
                                        <Col className="busi"> 
                                            <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                <AiFillEye className=""/>
                                                View Details
                                            </Button>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <CustomCard className={" mar-minus ps-4 py-5"}>
                                    <Row className=" mt-0 border-bot ">
                                        <Col className="p-0 ">
                                            <div className=" mb-3 card-color1"><h5 className="fw-bold">All Weather </h5></div>
                                            <div className=" mb-3 busi card-color2 fs-7"><p>Business name </p></div>
                                        </Col>
                                        <Col className="dflex">
                                        </Col>
                                        <Col className="p-0  ">
                                            <div className=" mb-3 card-color1"><h5 className="fw-bold">KIN*388892</h5></div>
                                            <div className=" mb-3 busi card-color2 fs-7"><p>Business No</p> </div>
                                        </Col>  
                                    </Row>
                                    <Row className=" mt-3">
                                        <Col className="p-0 ">
                                            <div className="fs-7 card-color2"><p>Address</p></div>
                                            <div className="fs-7 card-color1"><p>mjdjsgvds ns sgvdhkdsgvsb vxvdsdsdsbd sgvdsgvdsgsdvgdv v vd </p></div>
                                        </Col>
                                    </Row> 
                                    <Row className=" mt-3 mb-3">
                                        <Col> 
                                            <Button className="mycolour icon-color fw-bold fs-5 px-4">
                                                Set Current
                                            </Button>
                                        </Col>
                                        <Col className="busi"> 
                                            <Button className="fs-5 fw-bold topNav border-0 py-2 px-3">
                                                <AiFillEye className=""/>
                                                View Details
                                            </Button>
                                        </Col>
                                    </Row>
                                </CustomCard>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>                         
        </Fragment>
    )
}
export default Switch
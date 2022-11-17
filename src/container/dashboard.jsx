import React from "react";
import { Col, Row, Container, Button, Stack } from "react-bootstrap";
import {MdDashboard} from "react-icons/md";
import {TiShoppingBag} from "react-icons/ti";
import { CustomCard } from "../components/customCard";
import "../asset/styles/dashboard.css";
import {MdAccountBalanceWallet} from "react-icons/md"
import {BsFillBookmarksFill} from "react-icons/bs";
import {BsWallet} from "react-icons/bs"
import {IoIosPerson} from "react-icons/io"
import Naira from "react-naira";
import {IoIosArrowDown} from "react-icons/io"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { setRoute } from "../features/layoutSlice";
import { useDispatch } from "react-redux";

const Dashboard = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setRoute({
            midRoute: "",
            endRoute: "",
            getStartedStyle: "",
            otherStyle: ""
           }))
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log("dashboard");
    const data = [
        {channels: "0", cash: 32},
        {channels: "4", cash: 38},
        {channels: "8", cash: 25},
        {channels: "12", cash: 40},
        {channels: "16", cash: 55},
        {channels: "20", cash: 37},
        {channels: "28", cash: 95},
    ];
    return(
        <Container className={"my-2 py-3 overflow-hidden"} as={"section"} fluid>
            <Row className="flex-row justify-content-center">
                <Col lg={11}>
                    <Row>
                        <Col lg={8} md={8}>
                            <div>
                                <h1 className=" fw-bolder">
                                    <MdDashboard className="mb-2 color-blue "/>
                                    Dashboard
                                </h1>
                                <h6 className="ash-color fs-4 fw-normal"> Welcome to CyberPay Merchant Dashboard!</h6>
                            </div>
                        </Col>
                        <Col lg={4} md={4}>
                            <div className={"w-100"}>
                                <CustomCard 
                                    className={"shadow-none card-bg bg-color-lt-blue position-relative"} 
                                    classNameBody={"w-100 d-flex flex-row align-items-center"}
                                >
                                    <TiShoppingBag style={{color: "#2F8ED6"}} className="me-2 icon-size d-inline"/>
                                    <span className={"d-inline line-height-6"}>
                                        <h4 className="fs-5 fw-bolder d-inline">Filter Period</h4>
                                        <div className="ms-2"><h6 className="fs-6 ash-color ms-5">Monthly</h6></div>
                                    </span> 
                                    <IoIosArrowDown className="fs-3 ms-auto position-absolute arrow" style={{color: "#2F8ED6"}}/>
                                </CustomCard>
                            </div>
                        </Col>
                    </Row>
                    <Row className="my-4 gx-5 gy-3">
                        <Col lg={4} md={6} sm={12}>
                            <CustomCard className={" shadow-none db-card-1"} classNameBody={"w-100 py-4 d-flex flex-row align-items-center"}>
                               <Stack direction="horizontal" className="my-card">
                                    <div className={"me-3 db-icon-wrapper ms-4 db-icon-wrapper-1 d-flex align-items-center justify-content-center"}>
                                        <MdAccountBalanceWallet className="text-white icon-size"/>  
                                    </div>
                                    <span className="text-white">
                                        <h4 className="fs-1 fw-bolder my-auto"><Naira>{62000.00}</Naira></h4>
                                        <h6 className="my-auto fs-5 fw-bold">Available Balance</h6>
                                    </span>
                               </Stack>
                            </CustomCard>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <CustomCard className={"shadow-none db-card-2"} classNameBody={"w-100 py-4 d-flex flex-row align-items-center"}>
                               <Stack direction="horizontal" className="my-card">
                                    <div className={"me-3 db-icon-wrapper ms-4 db-icon-wrapper-2 d-flex align-items-center justify-content-center"}>
                                        <BsFillBookmarksFill className="text-white icon-size"/>  
                                    </div>
                                    <span className="text-white">
                                        <h4 className="fs-1 fw-bolder my-auto"><Naira>{2500.00}</Naira></h4>
                                        <h6 className="my-auto fs-5 fw-bold">Book Balance</h6>
                                    </span>
                               </Stack>
                            </CustomCard>
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <CustomCard className={"shadow-none db-card-3"} classNameBody={"w-100 py-4 d-flex flex-row align-items-center"}>
                                <Stack direction="horizontal" className="my-card">
                                    <div className={" me-3 db-icon-wrapper ms-4 db-icon-wrapper-3 d-flex align-items-center justify-content-center"}>
                                        <BsWallet className="fs-1 icon-size"/>  
                                    </div>
                                    <span className="text-white">
                                        <h4 className="fs-1 fw-bolder my-auto"><Naira>{12500.00}</Naira></h4>
                                        <h6 className="my-auto fs-5 fw-bold">Transaction Today</h6>
                                    </span>
                                </Stack>
                            </CustomCard>
                        </Col>
                    </Row>
                    <Row className={"mb-5 gx-5"}>
                        <Col lg={8} md={7} sm={12}>
                            <CustomCard className={"h-100 pt-4"}>
                                <ResponsiveContainer className={"mx-auto"} width={"90%"} height={"90%"}>
                                    <AreaChart className=""
                                        data={data}
                                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                    >
                                        <defs>
                                            <linearGradient id="colorChannel" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs> 
                                        <XAxis dataKey="channels" />
                                        <YAxis dataKey="cash"/>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="cash" stroke="#8884d8" fillOpacity={1} fill="url(#colorChannel)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                                <h3 className="ash-color fs-5 fw-light text-center">Channels</h3>
                            </CustomCard>
                        </Col>
                        <Col lg={4} md={5} sm={12}>
                            <CustomCard className={"py-5"}>
                                <div className="mb-2">
                                    <div  className="mx-auto bg-light db-row-3-icon-wrapper rounded-circle d-flex flex-column align-items-center justify-content-center">
                                        <IoIosPerson className="icon-size"/>
                                    </div>
                                    <div className="mt-4 profile-col2" style={{lineHeight: "3px"}} >
                                        <p className="text-center fs-4 fw-bold">Owoyemi Olusola</p>
                                        <p className="text-center fs-5 mt-4 fw-light">owoyemisholly@gmail.com</p>
                                    </div>
                                </div>
                                <hr className="mx-auto my-4 w-75"/>
                                <div style={{lineHeight: "15px"}} className="mt-3 pt-2 profile-col">
                                    <h5 className="text-center">Total Balance</h5>
                                    <h1 className=" text-center" style={{fontWeight: "800"}}><Naira>{21500.00}</Naira></h1>
                                </div>
                                <div className="mb-4 mt-5">
                                    <Button className="mx-auto btn-rd-br w-65 text-nowrap d-block db-card-1 py-3 px-5 fs-5 fw-bold">
                                        View Statement
                                    </Button>
                                </div>
                            </CustomCard>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
} 

export default Dashboard;
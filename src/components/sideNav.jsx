import { useNavigate } from 'react-router-dom';
import "../asset/styles/sideNavStyle.css"
import { routes } from '../routes';
import { IoIosSwitch, IoMdSettings } from 'react-icons/io';
import { HiCalendar, HiOutlineDocumentDuplicate} from 'react-icons/hi';
import { MdPayments,MdProductionQuantityLimits,MdDashboard,MdOutlineLiveHelp } from 'react-icons/md';
import { RiWallet3Fill,RiFileCopy2Fill, RiSettings4Fill } from 'react-icons/ri';
import { VscTypeHierarchySub } from 'react-icons/vsc';
import { BsFillFileTextFill, BsPersonFill, BsFillBellFill } from 'react-icons/bs';
import { Button, Col, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { IMAGES } from '../asset/images/image';

const SideNav = () => {

    const navigate = useNavigate()
    return (
        <Navbar expand={"lg"} className='align-nav'>
            <Navbar.Brand>
                <img src={IMAGES.logo} alt='' width='150' height='45' className={" mt-lg-4 mb-lg-5"}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='sidebar-nav'/>
            <Navbar.Offcanvas id='sidebar-nav'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id='sidebar-nav' >
                        <Nav className=" w-100">
                            <Row className="nav-width flex-row justify-content-between">
                                <Col>
                                    <img width={"50px"} height="50" className={" ms-4 rounded-circle my-circle"} src={IMAGES.avatar} alt={'avatar'}/>
                                    <p className={"fs-6 fw-bold my-auto text-nowrap ps-3 d-inline"}>Hello, Olusola</p>
                                </Col>
                                <Col className='d-flex flex-row justify-content-end'>
                                    <BsFillBellFill className="color-blue me-4 fs-2 my-auto"/>
                                    <IoMdSettings className="color-blue settgsIcon my-auto" />
                                </Col>
                            </Row>
                        </Nav>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='flex-column'>
                    <Button onClick={() => {navigate(routes.dashboard)}} className={"d-flex flex-row justify-content-between side-link-wrp"}>
                        <MdDashboard className='icons-color fs-3 '/>
                        <span className='text-start me-3'>Dashboard</span> 
                    </Button>

                    <Button onClick={()=> { navigate(routes.transaction)}}  className={"d-flex flex-row justify-content-between side-link-wrp"}>
                        <BsFillFileTextFill className='icons-color fs-3'/>
                        <span className="side-link me-3">Transaction</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.subAccount)}} className={"d-flex flex-row justify-content-between side-link-wrp"}>
                        <VscTypeHierarchySub className='icons-color fs-3'/>
                        <span className="side-link ms-4">Sub Account</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.digitalwallet)}} className={"d-flex flex-row justify-content-between side-link-wrp"}>
                        <RiWallet3Fill className='icons-color fs-3'/>
                        <span className="side-link ms-3">Digital Wallet</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.products)}} className={"d-flex flex-row justify-content-between side-link-wrp"}>
                        <MdProductionQuantityLimits className='icons-color fs-3'/>
                        <span className="side-link me-5">Products</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.paymentLink)}} className={"d-flex flex-row justify-content-between side-link-wrp"}>
                        <MdPayments className='icons-color fs-3'/>          
                        <span className="side-link ">Payment Link</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.payouts)}} className={"d-flex flex-row justify-content-between side-link-wrp"}>
                        <HiCalendar className='icons-color fs-3'/>
                        <span className="side-link me-5">Payouts</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.mandates)}}  className={"d-flex flex-row justify-content-between side-link-wrp"}>
                        <RiFileCopy2Fill className='icons-color fs-3'/>
                        <span className="side-link me-4">Mandates</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.profile)}} className={"d-flex flex-row justify-content-between side-link-wrp"}>
                        <BsPersonFill className='icons-color fs-3 me-3'/>
                        <span  className="side-link me-5">Profiles</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.switchBiz)}} className={"d-flex flex-row justify-content-between side-link-wrp"}>
                        <IoIosSwitch className='icons-color fs-3 '/>
                        <span  className="side-link me-4">Switch Biz</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.settings)}} className={"d-flex flex-row justify-content-between side-link-wrp"}>
                        <RiSettings4Fill className='icons-color fs-3' />
                        <span  className="side-link me-5">Settings</span>
                    </Button>

                    <div className='mt-5 w-100'>
                        <Button className='btn-border fw-bold fs-5'><HiOutlineDocumentDuplicate className='me-1 ms-1 fs-4 text-white'/>Documentation</Button>
                    </div>

                    <div className='mt-3 w-100'>
                        <Button className='btn-border fw-bold px-4 fs-5'><MdOutlineLiveHelp className='me-1 fs-4 text-white'/>Help & FAQ</Button>
                    </div>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
  };
  
  export default SideNav;


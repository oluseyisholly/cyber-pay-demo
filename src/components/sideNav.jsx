import { useNavigate } from 'react-router-dom';
import "../asset/styles/sideNavStyle.css"
import { routes } from '../routes';
import { IoIosSwitch, IoMdSettings } from 'react-icons/io';
import { HiCalendar, HiOutlineDocumentDuplicate} from 'react-icons/hi';
import { MdPayments,MdProductionQuantityLimits,MdDashboard,MdOutlineLiveHelp } from 'react-icons/md';
import { RiWallet3Fill,RiFileCopy2Fill, RiSettings4Fill } from 'react-icons/ri';
import { VscTypeHierarchySub } from 'react-icons/vsc';
import { BsFillFileTextFill, BsPersonFill, BsFillBellFill } from 'react-icons/bs';
import { Button, Nav, Navbar, Offcanvas } from 'react-bootstrap';
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
                    <Offcanvas.Title id='sidebar-nav'>
                        <Nav className="justify-content-end d-flex w-50">
                            <div className="nav-width flex-row align-items-center justify-content-end">
                                <BsFillBellFill className="color-blue me-4 fs-2 my-auto"/>
                                <IoMdSettings className="color-blue settgsIcon" />
                                <img width={"50px"} height="50" className={" ms-4 rounded-circle my-circle"} src={IMAGES.avatar} alt={'avatar'}/>
                                <p className={"fs-6 fw-bold my-auto text-nowrap ps-3 d-inline"}>Hello, Olusola</p>
                            </div>
                        </Nav>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='flex-column'>
                    <Button onClick={()=> {navigate(routes.dashboard)}} className={"my-1 ps-2 side-link-wrp"}>
                        <MdDashboard className='icon-color fs-3 mb-2 me-3'/>
                        <span className="side-link ">Dashboard</span>
                    </Button>

                    <Button onClick={()=> { navigate(routes.transaction)}}  className={"my-1 ps-2 side-link-wrp"}>
                        <BsFillFileTextFill className='icon-color fs-3 mb-2 me-3'/>
                        <span className="side-link ">Transaction</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.subAccount)}} className={"my-1 ps-2 side-link-wrp ms-3"}>
                        <VscTypeHierarchySub className='icon-color fs-3 mb-2 me-3'/>
                        <span className="side-link ">Sub Account</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.digitalwallet)}} className={"my-1 ps-2 side-link-wrp ms-4"}>
                        <RiWallet3Fill className='icon-color fs-3 mb-2  me-3'/>
                        <span className="side-link ">Digital Wallet</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.products)}} className={"my-1 ps-2 side-link-wrp me-4"}>
                        <MdProductionQuantityLimits className='icon-color fs-3 mb-2  me-3'/>
                        <span className="side-link ">Products</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.paymentLink)}} className={"my-1 ps-2 side-link-wrp ms-4"}>
                        <MdPayments className='icon-color fs-3 mb-2  me-3'/>          
                        <span className="side-link ">Payment Link</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.payouts)}} className={"my-1 ps-2 side-link-wrp me-4  "}>
                        <HiCalendar className='icon-color fs-3 mb-2  me-3'/>
                        <span className="side-link">Payouts</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.mandates)}}  className={"my-1 ps-2 side-link-wrp"}>
                        <RiFileCopy2Fill className='icon-color fs-3 mb-2  me-3'/>
                        <span className="side-link ">Mandates</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.profile)}} className={"my-1 ps-2 side-link-wrp me-4"}>
                        <BsPersonFill className='icon-color fs-3 mb-2  me-3'/>
                        <span  className="side-link ">Profiles</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.switchBiz)}} className={"my-1 ps-2 side-link-wrp"}>
                        <IoIosSwitch className='icon-color fs-3 mb-2  me-3'/>
                        <span  className="side-link ">Switch Biz</span>
                    </Button>

                    <Button onClick={() => {navigate(routes.settings)}} className={"my-1 ps-2 side-link-wrp me-3"}>
                        <RiSettings4Fill className='icon-color fs-3 mb-2  me-3' />
                        <span  className="side-link ">Settings</span>
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


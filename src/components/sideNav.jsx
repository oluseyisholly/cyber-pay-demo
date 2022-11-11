import Stack from 'react-bootstrap/Stack';
import { Link, useNavigate } from 'react-router-dom';
import "../asset/styles/sideNavStyle.css"
import { routes } from '../routes';
import { IoIosSwitch } from 'react-icons/io';
import { HiCalendar, HiOutlineDocumentDuplicate} from 'react-icons/hi';
import { MdPayments,MdProductionQuantityLimits,MdDashboard,MdOutlineLiveHelp } from 'react-icons/md';
import { RiWallet3Fill,RiFileCopy2Fill, RiSettings4Fill } from 'react-icons/ri';
import { VscTypeHierarchySub } from 'react-icons/vsc';
import { BsFillFileTextFill, BsPersonFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { IMAGES } from '../asset/images/image';

const SideNav = () => {

    const navigate = useNavigate()
    return (
        <Stack direction="vertical" className="ps-3 pt-4 side-borders flex-column align-items-center">
            <div>
                <img src={IMAGES.logo} width='150' height='45' className={" mt-4 mb-5"}></img>
            </div>

            <Button onClick={()=> { navigate(routes.dashboard)}}  className={"my-1 ps-2 side-link-wrp"}>
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
        </Stack>
    );
  };
  
  export default SideNav;


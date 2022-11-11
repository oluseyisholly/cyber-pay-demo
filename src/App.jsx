import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import React from 'react';
import {routes, getStartedRoutes} from "./routes"
import { CreateAccount } from './container/createAccount';
import { UpdateProfile } from './container/updateProfile';
import { TestIntegration } from './container/testIntegration';
import { SubAccount } from './container/subAccount';
import UploadDocument from './container/uploadDocument';
import { Products } from './container/products';
import Switch from './container/switchBusiness';
import { DigitalWallet } from './container/digitalWallet';
import { Mandate } from './container/mandate';
import BusinessProfile from './container/businessProfile';
import Settings from './container/settings';
import CustomNav from './components/navbar';
import Layout from './components/layout/layouts';
import Dashboard from './container/dashboard';
import Transaction from './container/transaction';
import PaymentLink from './container/paymentLink';
import Payout from './container/payout';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
        <Routes>
            <Route path="/" element={<Navigate to={getStartedRoutes.createAccount}/>} />
            <Route path={getStartedRoutes.createAccount} element={<CreateAccount />}/>
            <Route path ={getStartedRoutes.updateProfile } element={<UpdateProfile />}/>
            <Route path ={getStartedRoutes.testIntegration} element={<TestIntegration/>}/>
            <Route path ={routes.subAccount} element={<SubAccount/>}/>
            <Route path ={getStartedRoutes.updateDocument} element={<UploadDocument />}/>
            <Route path ={routes.products} element={<Products />}/>
            <Route path ={routes.switchBiz} element={<Switch />}/>
            <Route path ={routes.digitalwallet} element={<DigitalWallet />}/>
            <Route path ={routes.mandates} element={<Mandate />}/>
            <Route path={routes.profile} element={<BusinessProfile />}/>
            <Route path ={routes.settings} element={<Settings />}/>
            <Route path={routes.dashboard} element={<Dashboard />}/>
            <Route path ={routes.transaction} element={<Transaction />}/>
            <Route path ={routes.paymentLink} element={<PaymentLink />}/>
            <Route path ={routes.payouts} element={<Payout />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
    
  )
}

export default App;

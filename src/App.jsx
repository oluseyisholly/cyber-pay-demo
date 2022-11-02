import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import React from 'react';
import {routes} from "./routes"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={routes.createAccount} />
            <Route path ={routes.testIntegration} />
            <Route path ={routes.updateProfile } />
            <Route path ={routes.updateDocument} />
            <Route path={routes.dashboard} />
            <Route path ={routes.transaction} />
            <Route path ={routes.subAccount} />
            <Route path ={routes.digitalwallet} />
            <Route path ={routes.products} />
            <Route path ={routes.paymentLink} />
            <Route path ={routes.payouts} />
            <Route path ={routes.mandates} />
            <Route path ={routes.switchBiz} />
            <Route path ={routes.settings}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
    
  )
}

export default App;

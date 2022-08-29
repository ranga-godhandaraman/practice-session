import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Container } from "react-bootstrap";

import Footer from "./footer/footer";
import Header from "./header/header";
import Login from "./login/login.js";
import Registerform from './registerform/registerform';


function App() {
  return (<Container>
    <Header/>
        <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/registerform" element={<Registerform/>} />
        </Routes>
        </BrowserRouter>

    <Footer/>
  </Container>

     );
}

export default App;

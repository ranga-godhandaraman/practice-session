import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import List from "./create/list";
import Footer from "./footer/footer";
import Header from "./header/header";
import Login from "./login/login.js";
import Registerform from './registerform/registerform';
import AddEmployeeForm from "./operations/addempoyee";
import EditEmployeeForm from "./operations/editemployee";
function App() {
  return (
    <Container>
      <Header />
       <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/registerform" element={<Registerform/>} />
          <Route path="/list" element={<List/>} />
          <Route path="/addemployeeform" element={<AddEmployeeForm/>} />
          <Route path= "/editemployeeform" element= {<EditEmployeeForm/> } /> 
        </Routes>
        </BrowserRouter>  
      {/* <EditEmployeeForm/> */}


        <Footer />

  </Container>

     );
}

export default App;

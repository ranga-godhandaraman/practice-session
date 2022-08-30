
import React, { useState } from 'react';
import { Row, Col, FormGroup, Button, Form, Card } from "react-bootstrap"
import './login.css';
// import List from "./create/login.js";
// import { Routes, Route, useNavigate } from 'react-router-dom';

// function Login() {
//     const [showLoading, setShowLoading] = useState(false);
//     const login = (e) => {
//         setShowLoading(true); // show loading
//     }

//     const loadRegister = () => {
//         window.location.href = "/registerform";
    // }
    function Login() {
        const [showLoading, setShowLoading] = useState(false);
        const Login = (e) => {
          setShowLoading(true);
        }
      
        const loadLogin = () => {
          window.location.href = "/list";
        };
        
        const [showRegister, setShowRegister] = useState(false);
        const Registerform = (e) => {
          setShowLoading(true);
        }
      
        const loadRegisterForm = () => {
          window.location.href = "/registerform";
        }
      return (
        <div className="section">
            <Row>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Form>
                                <FormGroup>
                                    <Form.Label Col={4}>
                                        E-mail ID:
                </Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                    <Col sm={8}>
                                    </Col>
                                </FormGroup>
                                {<div>Please enter a valid email</div>}
                                <FormGroup>
                                    <Form.Label Col={4}>
                                        Password:
                </Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                    <Col sm={8}>
                                    </Col>
                                </FormGroup>

                                <Form.Group as={Row} className="mb-3">
                                    <Col >
                                        
                                        <div className='spacing'>
                                            {/* {
                                                (!showLoading) ?
                                                    <Button type="button" onClick={login}>Sign in</Button>
                                                    : // just to show a loding sign
                                                    <Button type="button" onClick={login} disabled>Loading...</Button>
                                            } */}
                                            <Button onClick={loadLogin}>Sign in</Button> {/* Redirection to list page*/}

                                            <Col>
                                            Not yet signed in? then 
                                            <Button variant= 'link' onClick={loadRegisterForm}>Register</Button> yourself 
                                            </Col>
                                        </div>

                                    </Col>
                                </Form.Group>


                            </Form>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </div>

    )
}

export default Login;
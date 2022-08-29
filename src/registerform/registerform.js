

import React from 'react';
import { Row, Col, Button, Form } from "react-bootstrap"

function Registerform() {
    return (
        
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
        
                <Form.Group as={Col} controlId="Password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>
        
              <Form.Group className="mb-3" controlId="Address1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Door No., Main Address" />
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="Address2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Area, Apartment" />
              </Form.Group>
        
              <Row className="mb-3">
                <Form.Group as={Col} controlId="City">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>
        
                <Form.Group as={Col} controlId="State">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Andhra Pradesh</option>
                    <option>Goa</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Tamilnadu</option>
                  </Form.Select>
                </Form.Group>
        
                <Form.Group as={Col} controlId="Pin-code">
                  <Form.Label>Pin-code</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <Form.Group as={Col} controlId="bottom">
              <Button variant="dark" type="submit">
                Register
              </Button>
              <Col sm={{ span: 2, offset: 10 }}>
              <a href="/?">Sign in</a>
              </Col>
              </Form.Group>
  </Form>
          );
        }

export default Registerform;
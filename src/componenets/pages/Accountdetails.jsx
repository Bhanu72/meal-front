import React from "react";
import "./adetails.scss";
import Card from "../Card/Card";
import {Form , Row , Col} from 'react-bootstrap';
import {useHistory , Link} from "react-router-dom";

function Accountdetails() {
  let history = useHistory();
  return (
    <div className="container">
      <div className="container-fluid">
        <h3 className="adt text-left">Account Details</h3>
        <Card className="card">
          <Form className = 'fcontrol'>
            <Row>
              <Col>
                <Form.Label>Full Name</Form.Label>
                <Form.Control plaintext readOnly defaultValue="John Smith" /> <br />
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control  plaintext readOnly defaultValue="1234567890"/><br />
                <Form.Label>Gender</Form.Label>
                <Form.Control  plaintext readOnly defaultValue="Male"/><br />
                <Form.Label>User Type</Form.Label>
                <Form.Control  plaintext readOnly defaultValue="Patient"/><br />
                <Form.Label>Height</Form.Label>
                <Form.Control  plaintext readOnly defaultValue="175cm"/>
              </Col>
              <Col>
              <Form.Label>Email Address</Form.Label>
                <Form.Control  plaintext readOnly defaultValue="johnsmith@example.com"/><br />
                <Form.Label>Address</Form.Label>
                <Form.Control  plaintext readOnly defaultValue="1234"/><br />
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control  plaintext readOnly defaultValue="21/05/1995"/><br />
                <Form.Label>Weight</Form.Label>
                <Form.Control  plaintext readOnly defaultValue="80kg"/><br />
                <Form.Label>BMI</Form.Label>
                <Form.Control  plaintext readOnly defaultValue="64"/>

                <div className="bt row">
              <div className="col">
              <button className="update btn btn-light" onClick={()=> {history.push('/testpro')}}> Update Account</button>
              <button className="change btn btn-light" onClick={()=> {history.push('/changepassword')}}>Change Password</button>
              </div>
              
             
              
          </div>
              </Col>
            </Row>
          </Form>
         
          
          
        </Card>
        
      </div>
    </div>
  );
}

export default Accountdetails;

import React from 'react';
import "./accpro.scss";
import Card from "../Card/Card";
import {Form , Row , Col} from 'react-bootstrap';
import {useHistory , Link} from "react-router-dom";

function AccountDetailsPro() {
     let history = useHistory();
    return (
        <div className='container'>
            <h3 className="proadt text-left">Account Details</h3>
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
                <Form.Control  plaintext readOnly defaultValue="Professional"/><br />
                
              </Col>
              <Col>
              <Form.Label>Email Address</Form.Label>
                <Form.Control  plaintext readOnly defaultValue="johnsmith@example.com"/><br />
                <Form.Label>Address</Form.Label>
                <Form.Control  plaintext readOnly defaultValue="25/B Melbourne, Australia"/><br />
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control  plaintext readOnly defaultValue="21/05/1995"/><br />
                
                
<br/><br/><br/><br/><br/><br/>
                <div className="probt row">
              <div className="col">
              <button className="proupdate btn btn-light"> Update Account</button>
              <button className="prochange btn btn-light" onClick={()=> {history.push('/changepassword')}}>Change Password</button>
              </div>
              
             
              
          </div>
              </Col>
            </Row>
          </Form>
         
          
          
        </Card>
        </div>
    )
}

export default AccountDetailsPro

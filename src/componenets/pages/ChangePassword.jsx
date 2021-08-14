import React from 'react'
import './changpass.scss';
import {Form , Row , Col , Button} from 'react-bootstrap';


function ChangePassword() {
    return (
        <div className='container'>
        <h2 className='changepass'>Change Password</h2>
      <Form>
  <Row>
    <Col sm='5'>
     <Form.Label>Enter New Password</Form.Label>
      <Form.Control plaintext type="password" placeholder="New Password" />
    </Col>
    <Col sm='4'>
    <Form.Label>Confirm New Password</Form.Label>
      <Form.Control type="password" placeholder="Confirm Password" />
      <br/>
      <Button className='changepbtn'>Save</Button>
    </Col>
    
  </Row>
</Form>

        </div>
    )
}

export default ChangePassword

/* eslint-disable no-unused-vars */

import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="contact d-flex  contact">
        <div className="col-md-6">
        <img className='mt-5 pt-5 me-1 img10 w-50' src='./../../../images/contact.png'></img>
        </div>
    <div className=" col-md-6 pt-5">
        <Row>
<Col>
</Col>
        </Row>
        <h1 style={{color:'green',fontFamily:'cursive'}} className="text py-4">Contact Us</h1>
        <Col>
     
          <form
  action="https://formspree.io/f/mayrypww"
  method="POST"
>
<input  className="w-75 mb-4 py-2" type="text" name="" placeholder="Enter Your Name" id="" />
              <br/>
             
       
              <input  className="w-75 mb-4 py-2 " type="email" name="username" placeholder="Enter Your Email" id="userid"required />
              <br/>
          
              <input  className="w-75 mb-4 py-2" type="number" name="useremail" placeholder="Enter Your mobile number" id="emailid" required />
              <br/>
             
              <br/>
              {/* <br/>
              <textarea style={{height:'200px'}} className="w-75 "name="Message" placeholder="Message" form="usrform" required></textarea>
              <br/> */}
              <label>
    Your message:
    <br/>
    <textarea style={{height:'200px',width:'800px'}}name="message"></textarea>
  </label>
 
  <button style={{height:'40px',width:'250px',backgroundColor:'#355e3b',color:'white'}} type="submit">Submit</button>
</form>
          </Col>
      </div>
      </div>
    );
};

export default Contact;
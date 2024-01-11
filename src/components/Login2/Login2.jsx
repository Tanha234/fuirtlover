/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import app from '../firbase_init';

const auth = getAuth(app);

const Login2 = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const emailRef = useRef();

  const form = location.state?.form?.pathname || '/';
  const myLogin=()=>{
    
  }

  const handleSubmitEmail = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userEmailCredential) => {
        const user = userEmailCredential.user;
        console.log('User:', user);
        setSuccess('Successfully logged in');
       
        console.log('Navigating to:', form);
        navigate('/upload', { replace: true });

        setError('');
        event.target.reset();
      
      })
      .catch((error) => {
        setError('Login failed. ' + error.message); // Display the error message
        setSuccess('');
      });
      
  };

  const resetEmail = (event) => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please provide email");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email for a password reset link");
        event.target.reset();
      })
      .catch((error) => {
        console.error("Password reset email not sent:", error.message);
      });
  };



  return (
    <div>
      <p>{success}</p>
      <p>{error}</p>

      <Row className='pt-5 '>
        <Col>
          <img className='login_img' src="../../../images/e1f31675df5ba775a33d5b53f6fc5fc3-removebg-preview (1).png" alt="login" />
        </Col>
        <Col className='pe-5 me-5 pt-5'>
          <form onSubmit={handleSubmitEmail}>
            <div className="form-group pt-4">
              <label className='mt-4 mb-2' htmlFor="email">Email address</label>
              <input ref={emailRef} type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group pt-4">
              <label className='mt-2 mb-2' htmlFor="password">Password</label>
              <input type="password" className="form-control mb-4" id="password" placeholder="Enter your password" />
            </div>
            <Button onClick={myLogin} className="px-5 mt-4" variant="secondary" type="submit">
              Login
            </Button>
            <p className='text-danger me-4 fs-5'>{error}</p>
            <Row>
              <Col>
                <p className='pt-5 fs-5 ms-5 ps-5'>New User?<Link to="/registration">SignUp</Link></p>
              </Col>
              <Col>
                <button onClick={resetEmail} className="secondd mt-5 fs-5 ms-3" type="button">
                  Forgot Password?
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Login2;

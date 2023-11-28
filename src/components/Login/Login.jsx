/* eslint-disable no-unused-vars */
import { getAuth, signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Login.css'

import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../firbase_init';

const auth = getAuth(app);

const Login = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const location=useLocation();
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const emailRef=useState();
  //private route
  const form=location.state?.form?.pathname||'/contact';



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsEmailVerified(user.emailVerified);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmitEmail = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
   
   
      signInWithEmailAndPassword(auth, email, password)
        .then((userEmailCredential) => {
          const user = userEmailCredential.user;
          console.log(user);
          setSuccess('Successfully logged in');
          setError('');
          event.target.reset();
          navigate(form,{replace:true});
        })
        .catch((error) => {
          setError('Login failed. ');
          setSuccess('');
        });
    }


  const resetEmail=()=>{
    const email=emailRef.current.value;
    if(!email){
        alert("Please provide email");
        return;
    }
    sendPasswordResetEmail(auth,email)
        .then(() => {
            alert("Please check your email for a password reset link");
            event.target.reset(); // Reset the form to clear the email field
        })
        .catch((error) => {
            // Handle errors, e.g., email not found, etc.
            console.error("Password reset email not sent:", error.message);
        });
    }


  return (
    <div>
      <p>{success}</p>
      <p>{error}</p>

      <Row className='pt-5 '>
      <Col>
      <img className='login_img' src="../../../images/e1f31675df5ba775a33d5b53f6fc5fc3-removebg-preview (1).png"/>
        </Col>
      <Col className='pe-5 me-5 pt-5'>
     
      <form onSubmit={handleSubmitEmail}>
        <div className="form-group pt-4">
          <label className='mt-4 mb-2' htmlFor="email">Email address</label>
          <input  ref={emailRef} type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>

        <div className="form-group pt-4">
          <label  className='mt-2 mb-2' htmlFor="password">Password</label>
          <input type="password" className="form-control mb-4" id="password" placeholder="Enter your password" />
        </div>

        <Button className="px-5 mt-4" variant="secondary" type="submit">
          Login
        </Button>
        <p className='text-danger me-4 fs-5'>{error}</p>
   <Row>
     <Col>
     <p className='pt-5 fs-5 ms-5 ps-5'>New User?<Link to="/registration">SignUp</Link></p>
       
     </Col>
     <Col>
    <button onClick={resetEmail} className=" secondd mt-5 fs-5 ms-3 "  type="submit">
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

export default Login;

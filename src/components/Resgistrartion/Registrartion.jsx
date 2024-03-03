/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Button } from 'react-bootstrap';
import './Registrartion.css'
import { GoogleAuthProvider, sendEmailVerification, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import img from '../../../images/Screenshot_2023-11-26_152707-removebg-preview (1).png'
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import app from '../firbase_init';

const auth = getAuth(app);

const Registration = () => {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const provider = new GoogleAuthProvider();
  const provider2 = new FacebookAuthProvider();
  const navigate = useNavigate();

  // email verification
  const verifiedEmail = (user) => {
    sendEmailVerification(user)
      .then(() => {
        alert("Please verify your email address");
      })
      .catch((error) => {
        setError(`Email verification failed: ${error.message}`);
      });
  }

  // sign in with facebook
  const facebookSignIn = () => {
    signInWithPopup(auth, provider2)
      .then(result => {
        const user1 = result.user;
        console.log(user1);
        navigate('/');
      })
      .catch(error => {
        setError(`Facebook sign-in failed: ${error.message}`);
      });
  }

  // sign in with google
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const users = result.user;
        console.log(users);
        navigate('/');
      })
      .catch(error => {
        setError(`Google sign-in failed: ${error.message}`);
      });
  }

  // sign in with email and password
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value
    const password = event.target.password.value
    const confirmPassword = event.target.confirmpassword.value;
    const phone = event.target.phone.value;

    // password and confirm password validation
    if (password !== confirmPassword) {
      setError('Password and Confirm Password do not match.');
      return;
    }

    // password regex
    const passwordRegex = /^(?=.*[@#$%^&+=])(?=\S+).{4,}$/
    if (!passwordRegex.test(password)) {
      setError('Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:');
      return;
    }

    // name regex
    const nameRegex = /^(?=.*\d)[A-Za-z\d]{6,}$/
    if (!nameRegex.test(name)) {
      setError('User name should meet the specified criteria.');
      return;
    }

    // email regex
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // phone regex
    const bangladeshiPhoneNumberRegex = /^\+8801[3-9]\d{8}$/;
    if (!bangladeshiPhoneNumberRegex.test(phone)) {
      setError('Please enter a Bangladeshi phone number-11 digits and include +880');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        console.log(newUser);

        // update user display name and photo URL
        updateProfile(newUser, {
          displayName: name,
          photoURL: 'URL_OF_YOUR_DEFAULT_PROFILE_IMAGE', // You can set a default profile image URL here
        }).then(() => {
          // Verification email and other actions if needed
          verifiedEmail(newUser);
          navigate('/login');
          setSuccess('Successfully Registered');
        });

      })
      .catch(error => {
        setError(`Registration failed: ${error.message}`);
      });
  };
  
  return (
     
   
    <Row className='regis'>
      <Col className='col-md-6 img1'>
      <img className="  img1" src={img}/>
    </Col>
      
      <Col className="mt-5 pt-5 pe-5 me-5">
      <form onSubmit={handleSubmit}>
    <div className="form-group pt-4">
      <label htmlFor="name">Name</label>
      <input type="text" className="form-control" id="name" placeholder="Enter your name" />
    </div>

    <div className="form-group pt-4">
      <label htmlFor="email">Email address</label>
      <input  type="email" className="form-control" id="email" placeholder="Enter your email" />
      <small className="form-text text-muted">
      
      </small>
    </div>
    <div className="form-group pt-4">
<label htmlFor="phone">Phone Number</label>
<input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
</div>


    <div className="form-group pt-4">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control" id="password" placeholder="Enter your password" />
    </div>
    <div className="form-group pt-4">
      <label htmlFor="password">Confirm Password</label>
      <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm password" />
    </div>
  
    <Button className="px-5 mt-4 btn py-2" type="submit" variant="secondary">
     Register
    </Button>
    <p className='text-danger me-4 fs-5'>{error}</p>
    <h5 className='text-fix  fs-5 pt-4'>Or,Sign in with</h5>
  </form>
  <Row>
    <Col className='ms-5 ps-5'>
    <Button onClick={googleSignIn} className="px-5 mt-4 ms-5 ps-5 me-5 "   variant="secondary"type="submit"><FontAwesomeIcon icon={faGoogle} style={{ fontSize: '24px', color: 'yellow', marginRight:'10px'}} />Google Sign In</Button>
    <Button onClick={facebookSignIn}  className="px-5 mt-4 ms-5 ps-5"variant="secondary"type="submit"> <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '24px', color: 'blue', marginRight:'10px'}} /> Facebook Sign In</Button>
    <div className='ms-5 ps-5'>
    <h5 className='ms-5 ps-5 pt-5'>Already Registered?<Link to="/login">SignIn</Link></h5>
   
    <p className='text-info'>{success}</p>
    </div>
    </Col>
  </Row>
      </Col>
      
    </Row>
 

 
);

};

export default Registration;
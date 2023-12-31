/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
const Header = () => {
  const [users, setUsers] = useState('');

  const signnOut = () => {
    signOut(getAuth()).then(() => {
      setUsers(null);
      <Navigate to='/home'></Navigate>
    });
  };

  const { user } = useContext(AuthContext);
  const auth = getAuth();

  return (
    
    <div>
      {/* <Link to="/registration">Signup</Link>
      {user && <span>{user.email}</span>}
      {user && <Button onClick={signnOut}>Sign Out</Button>} */}
         <Navbar  className='py-4 ps-5 navi sticky'>
      
          <Navbar.Brand >
          <div>
            <img className='img_fit' src="./../../../images/logo.png"/>
          </div>
          </Navbar.Brand>
          <Nav className="me-auto nav">
            <Nav.Link href="/" className='fs-5'>Home</Nav.Link>
            <NavDropdown title="Fruits" className='fs-5 mx-2' id="navbarScrollingDropdown">
            <NavDropdown.Item href="/fruit" className='fs-5'>About Fruits</NavDropdown.Item>
              <NavDropdown.Item href="/season" className='fs-5'>
                Seasonal Fruits
              </NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href="/tut" className='fs-5'>NutriCraze</Nav.Link>
            
       
          
              <NavDropdown title="Activites" className='fs-5 mx-2' id="navbarScrollingDropdown">
              <NavDropdown.Item href="/rest" className='fs-5'>Calculate Nuitrition</NavDropdown.Item>
              
              <NavDropdown.Item href="/tan" className='fs-5'>
               Games
              </NavDropdown.Item>
              <NavDropdown.Item href="/tutorial" className='fs-5'>
               Tutorials
              </NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href="/upload" className='fs-5 mx-2'>Identify Fruit</Nav.Link>
            <Nav.Link href="/contact" className='fs-5 mx-2'>Contact</Nav.Link>
            <NavDropdown title="User?" className='fs-5' id="navbarScrollingDropdown">
              <NavDropdown.Item href="/registration" className='fs-5'>Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="/login" className='fs-5'>
                Sign In
              </NavDropdown.Item>
            
            
            </NavDropdown>
          </Nav>
          {user && <span className='me-4 ' >{user.email}</span>}
      {user && <Button className='me-2' onClick={signnOut}>Sign Out</Button>} 
       
      </Navbar>
    </div>
  );
};

export default Header;

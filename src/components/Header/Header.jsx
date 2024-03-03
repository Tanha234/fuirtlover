/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

const Header = () => {
  const [users, setUsers] = useState('');
  const navigate = useNavigate();

  const signnOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        setUsers(null);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar className='py-4 ps-5 '>
        <Navbar.Brand>
          <div>
            <img className='img_fit' src="./../../../images/logo.png" alt="Logo" />
          </div>
        </Navbar.Brand>
        <Nav className="me-auto nav">
          <Nav.Link href="/" className='fs-5'>Home</Nav.Link>
          <NavDropdown title="Fruits" className='fs-5 mx-3' id="navbarScrollingDropdown">
            <NavDropdown.Item href="/fruit" className='fs-5'>About Fruits</NavDropdown.Item>
            <NavDropdown.Item href="/category" className='fs-5'>Fruits Category</NavDropdown.Item>
            <NavDropdown.Item href="/season" className='fs-5'>
              Seasonal Fruits
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/tut" className='fs-5'>NutriCraze</Nav.Link>
          {/* <Nav.Link href="/category" className='fs-5 mx-3'>Fruits Category</Nav.Link> */}
          <NavDropdown title="Users" className='fs-5 mx-3' id="navbarScrollingDropdown">
            <NavDropdown.Item href="/review" className='fs-5'>Feedback</NavDropdown.Item>
        
          </NavDropdown>

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
          <NavDropdown title="Access" className='fs-5 navUser' id="navbarScrollingDropdown">
            <NavDropdown.Item href="/registration" className='fs-5'>Sign Up</NavDropdown.Item>
            <NavDropdown.Item href="/login" className='fs-5'>
              Sign In
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/profile" className="logo-link">
        <img src='../../../images/7554431-removebg-preview.png' alt="Logo" className="logo-image" />
      </Nav.Link>
          
        </Nav>
        {user && <span className='me-5'>{user.displayName}</span>}
        {user && <Button className='me-5' onClick={signnOut}>Sign Out</Button>}
      </Navbar>
    </div>
  );
};

export default Header;

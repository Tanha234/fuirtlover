/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true); // Initialize loading as true
  const location = useLocation();

  useEffect(() => {
    // Simulate an asynchronous check (you might want to replace this with an actual authentication check)
    const checkAuthentication = async () => {
     
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Adjust the delay as needed
    };

    checkAuthentication();
  }, []); // Run the effect only once on mount

  if (loading) {
    return <div>Loading...........</div>;
  }

  if (user) {
    return children;
  }

  // Redirect to the login page if the user is not authenticated
  return <Navigate to="/loginn" state={{ from: location }} replace />;
};

export default PrivateRoute;

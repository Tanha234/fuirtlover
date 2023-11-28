/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext);
    const location=useLocation();
  
       if(user){
           return children;

       }
       return <Navigate state={{from:location}} to='/login' replace></Navigate>
    
};

export default PrivateRoute;
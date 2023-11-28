/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react'; // Add this import statement
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
import app from './firbase_init';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const authInfo = {
        user,
    };
    useEffect(()=>{
        const unsuscribe=onAuthStateChanged(auth,(curretUser)=>{
            setUser(curretUser);
        });
        return () => {
            unsuscribe();
        };
    }, []);
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

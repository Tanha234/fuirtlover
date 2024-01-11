/* eslint-disable react/prop-types */
import  { useContext } from 'react';
import { AuthContext } from './AuthProvider';


const Profile = () => {
  const { user } = useContext(AuthContext);
  

  
  

  return (
    <div>
      <h2>Profile Page</h2>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <p>Email: {user.email}</p>

         
        </div>
      ) : (
        <p>Please sign in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;

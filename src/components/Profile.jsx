import  { useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthProvider';
import defaultProfileImage from '../../images/7554431-removebg-preview.png'; // Import your default image
import { Row } from 'react-bootstrap';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Load the user's profile image from localStorage when the component mounts
    const savedImage = localStorage.getItem(`profileImage_${user?.uid}`);
    if (savedImage) {
      setImage(savedImage);
    } else {
      // If no user-uploaded image, set the default image
      setImage(defaultProfileImage);
    }
  }, [user]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
        // Save the profile image to localStorage
        localStorage.setItem(`profileImage_${user?.uid}`, reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    // Remove the profile image from localStorage and set default image
    localStorage.removeItem(`profileImage_${user?.uid}`);
    setImage(defaultProfileImage);
  };

  return (
    <div>
      <Row style={{backgroundColor:'rgb(150, 197, 155)',height:'700px',width:'1500px',marginLeft:'240px',marginTop:'50px'}}>
     
      {user ? (
        <div>
       
          <img src={image} alt="Profile" style={{ maxWidth: '200px',marginTop:'60px',marginLeft:'100px'}} />
          <br/>

          <input
            type="file"
            accept="image/*"
            id="profileImage"
            onChange={handleImageChange}
            style={{paddingTop:'-180px',marginLeft:'100px'}}
          />

          {image !== defaultProfileImage && (
            <button onClick={handleRemoveImage} style={{marginRight:'-200px'}}>Remove Image</button>
          )}
          <p>Welcome, {user.displayName}!</p>
          <p>Email: {user.email}</p>

         
        </div>
      ) : (
        <p>Please sign in to view your profile.</p>
        
      )}
      </Row>
    </div>
  );
};

export default Profile;

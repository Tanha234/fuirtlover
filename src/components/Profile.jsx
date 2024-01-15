import  { useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthProvider';
import defaultProfileImage from '../../images/7554431-removebg-preview.png'; // Import your default image
import { Col, Row } from 'react-bootstrap';

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
      
      <Row style={{backgroundColor:'rgb(150, 197, 155)',height:'700px',width:'1100px',marginLeft:'440px',marginTop:'50px'}}>
     <Col>
      {user ? (
        <div>
       
          <img src={image} alt="Profile" style={{ width: '210px',height:'220px',marginTop:'60px',marginLeft:'160px',marginBottom:'50px',borderRadius:'50%'}} />
          <br/>

          <input
            type="file"
            accept="image/*"
            id="profileImage"
            onChange={handleImageChange}
            style={{paddingTop:'-160px',marginLeft:'100px'}}
          />

          {image !== defaultProfileImage && (
            <button onClick={handleRemoveImage} style={{backgroundColor:'green',color:'white'}}>Remove Image</button>
          )}
          

          <p className='text-center fs-5 pt-4 text-primary'>Welcome,<span>{user.displayName}!</span> </p>
        </div>
      ) : (
        <p>Please sign in to view your profile.</p>
        
      )}
      </Col>
      <Col style={{backgroundColor:'#D3D3D3'}}>
        <h2 className='pt-4 pb-3'>Information</h2>
        {/* <hr/>
        {user ?():(
          <h5>Email: {user.email}</h5>
          <p>Please sign in to view your profile.</p>
        )} */}
          <h5>Mobile:</h5>
          <hr/>
      </Col>
      </Row>
    </div>
  );
};

export default Profile;

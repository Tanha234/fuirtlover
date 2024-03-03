import { useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthProvider';
import defaultProfileImage from '../../images/7554431-removebg-preview.png';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const users = useLoaderData();

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
    // Remove the profile image from localStorage and set the default image
    localStorage.removeItem(`profileImage_${user?.uid}`);
    setImage(defaultProfileImage);
  };

  // Debugging: Log the content of users
  useEffect(() => {
    console.log('Users:', users);
  }, [users]);

  return (
    <div>
      <Row style={{ backgroundColor: 'rgb(150, 197, 155)', height: '700px', width: '1100px', marginLeft: '440px', marginTop: '50px' }}>
        <Col>
          {user ? (
            <div>
              <img src={image} alt="Profile" style={{ width: '210px', height: '220px', marginTop: '60px', marginLeft: '160px', marginBottom: '50px', borderRadius: '50%' }} />
              <br />
              <input
                type="file"
                accept="image/*"
                id="profileImage"
                onChange={handleImageChange}
                style={{ paddingTop: '-160px', marginLeft: '100px' }}
              />
              {image !== defaultProfileImage && (
                <button onClick={handleRemoveImage} style={{ backgroundColor: 'green', color: 'white' }}>
                  Remove Image
                </button>
              )}
              <h3 className='text-center fs-5 pt-4 text-primary'>Welcome,<span>{user.displayName}!</span> </h3>
              <h5 className='ps-5 ms-3 pt-3'>
                <span className='text-danger'>Email:</span> {user.email}
              </h5>
            </div>
          ) : (
            <p>Please sign in to view your profile.</p>
          )}
        </Col>
        <Col style={{ backgroundColor: '#D3D3D3' }}>
          <h2 className='pt-4 pb-3'>Information</h2>
          {/* Check if users is an array and has a length property */}
          <h4>Total Favourite Fruits: {Array.isArray(users) ? users.length : 'Loading...'}</h4>
          <hr />
          <h3 className='text-danger'>Your favourite fruits-</h3>
          {/* Display fruitName for each user in the array */}
          {Array.isArray(users) && users.map((user) => (
            <li className='fs-5' key={user._id}>{user.name?.fruitName}</li>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Profile;

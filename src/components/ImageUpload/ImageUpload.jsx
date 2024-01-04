import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
const ImageUpload = () => {
  const defaultImage = './../../../images/cum.jpg'; // Set your default image path
  const [imageURL, setImageURL] = useState(defaultImage);
  // const navigate = useNavigate();

  const sumbitButton=()=>{
    alert("Are you sure for uploading?");
    // navigate('/user');


  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const imageInput = event.target.elements.image;

    if (imageInput.files.length > 0) {
      const imageFile = imageInput.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const imageDataURL = reader.result;
        setImageURL(imageDataURL);

        const user = { name, image: imageDataURL };
        console.log(user);

      

        fetch('http://localhost:5001/upload', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              alert('Inserted Successfully');
              event.target.reset();
              setImageURL(defaultImage); // Reset to the default image after successful upload
            }
          });
      };

      reader.readAsDataURL(imageFile);
    } else {
      // Handle the case where no image is selected
      console.log('No image selected');
    }
  };

  return (
    <div>
      <Row>
        
        <Col className='ps-5 ms-5'>
   
          <img className='mt-5 pt-5 me-5 pe-5 img10 w-75' src='../../../images/imk.png' alt="Default" />
          <h1 style={{color:'green',fontFamily:'cursive',fontSize:'30px'}} className="text ms-5">Select an image for identification</h1>
        </Col>
        <Col style={{ marginTop: '50px' }}>
        
          <form onSubmit={handleFormSubmit}>
            <Row className="pt-5 mt-5">
              {imageURL && <img src={imageURL} alt="Selected" style={{ maxWidth: '50%', maxHeight: '500px', marginBottom: '50px',marginLeft:'130px',marginTop:'90px' }} />}
            </Row>

            <input type="text" name="name" id="name" />
            <input type="file" name="image" id="image" accept="image/png,image/gif,image/jpg,image/jpeg" />

            <button onClick={sumbitButton}  style={{height:'32px',width:'250px',backgroundColor:'#355e3b',color:'white'}}type="submit">
              Upload
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default ImageUpload;

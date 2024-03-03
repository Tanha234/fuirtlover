import { useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import img from '../../../images/Screenshot_2023-11-26_152707-removebg-preview (1).png'

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState('../../../images/mongo.png');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const previewURL = URL.createObjectURL(file);
    setImagePreview(previewURL);
  };

  const handleImageUpload = () => {
    setLoading(true);

    const formData = new FormData();
    formData.append('file', selectedImage);

    fetch('http://127.0.0.1:8000/predict', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        setPrediction(result.prediction);
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getClassLabel = () => {
    if (!prediction || !prediction[0]) {
      return 'No Prediction';
    }

    const classIndex = prediction[0].indexOf(Math.max(...prediction[0]));
    const classNames = ['Apple', 'Banana', 'Grape', 'Mango', 'Strawberry'];

    if (classIndex >= 0 && classIndex < classNames.length) {
      return classNames[classIndex];
    } else {
      return 'Fruit not in dataset';
    }
  };

  return (
    <Row>
     <Col className='col-md-3 img1'>
      <img className="  img1" src={img}/>
    </Col>
      
    
      <Col style={{ marginLeft: '700px' }}>
        <div>
          <Row>
            <img style={{ width: '600px', height: '500px' }} className='mt-5 pt-3 me-5 pe-5 img10  ' src={imagePreview} alt="Default" />
          </Row>
          <Row>
            <input className='mt-5 ms-5 ps-5' type="file" onChange={handleImageChange} />
            {selectedImage && (
              <>
                <button style={{ width: '300px', marginTop: '20px', height: '37px', marginLeft: '130px', backgroundColor: '#639354' }} onClick={handleImageUpload}>
                  {loading ? 'Please wait...' : 'Predict'}
                </button>
                {loading && <div style={{ marginLeft: '190px', marginTop: '5px' }}>Please wait... <Spinner animation="border" role="status" style={{ marginLeft: '5px',color:'black',marginTop:'10px' }} /></div>}
              </>
            )}

            {prediction && (
              <div className='mt-5'>
                <h3 className='text-primary ms-5'>Prediction Result:The Fruit is {getClassLabel()}</h3>
            
              </div>
            )}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default ImageUpload;

/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
// import Spinner from 'react-bootstrap/Spinner';

import appleImage from '../../images/eeee.png';
import bananaImage from '../../images/banana.png';
import pineImage from '../../images/download__1_-removebg-preview - Copy (2).png';
import orangeImage from '../../images/ee.png';
import grapeImage from '../../images/download__1_-removebg-preview (1).png';
import kiwiImage from '../../images/e1f31675df5ba775a33d5b53f6fc5fc3-removebg-preview (1).png';
import mangoImage from '../../images/green-mango-flat-illustration-free-vector-removebg-preview.png';
import strawberryImage from '../../images/www.png';
import watermelonImage from '../../images/sm_5af5a9faaff48-removebg-preview.png';

const wordsData = [
  { word: 'apple', image: appleImage, hints: ['It is red and tasty.', 'It grows on trees.', 'Common in pies and juices.'] },
  { word: 'banana', image: bananaImage, hints: ['It is yellow and curved.', 'Rich in potassium.', 'Popular in smoothies.'] },
  { word: 'pineapple', image: pineImage, hints: ['It has a spiky outer layer.', 'Sweet and tropical.'] },
  { word: 'orange', image: orangeImage, hints: ['It is citrus and round.', 'Common breakfast fruit.'] },
  { word: 'grape', image: grapeImage, hints: ['It grows in clusters and can be purple or green.', 'Used to make wine.'] },
  { word: 'avocado', image: kiwiImage, hints: ['It has a green, rough exterior and a creamy interior.', 'Used in guacamole.'] },
  { word: 'mango', image: mangoImage, hints: ['It is tropical and has a large pit.', 'Sweet and juicy.'] },
  { word: 'coconut', image: strawberryImage, hints: ['It has a hard shell and a sweet, white interior.', 'Used in coconut milk.'] },
  { word: 'watermelon', image: watermelonImage, hints: ['It is juicy and has black seeds.', 'Refreshing summer fruit.'] },
  // Add more words and images as needed
];

function TranslatorComponent() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [correctMessage, setCorrectMessage] = useState('');

  const currentWord = wordsData[currentWordIndex];

  useEffect(() => {
    setIsCorrect(false);
    setErrorMessage('');
    setCorrectMessage('');
  }, [currentWordIndex]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
    setErrorMessage('');
    setCorrectMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isGuessCorrect = inputValue === currentWord.word.toLowerCase();

    if (isGuessCorrect) {
      setCorrectMessage('Correct! Move on to the next word.');
      // Move to the next word after a short delay
      setTimeout(() => {
        setInputValue('');
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsData.length);
        setIsCorrect(false);
        setErrorMessage('');
        setCorrectMessage('');
      }, 1500);
    } else {
      setIsCorrect(false);
      setErrorMessage('Incorrect guess. Try again!');
    }
  };

  return (
    <div   className="App">
     
     <Row style={{ marginLeft: '10px', marginRight: '10px', height: '700px', borderColor: '#FF0000' }} className='pt-5 mt-5'>


        <Col style={{ backgroundColor: 'rgb(150, 197, 150)', height: '500px', width: '500px',marginLeft:'150px' }} className="col-md-4 mt-5 px-4">
        <h3 style={{ fontFamily: 'cursive', color: "green", height: '100px', paddingTop: '30px',fontSize:'40px' }} className=' text-center'>Guess the fruit</h3>
    
          {currentWord.hints.map((hint, index) => (
            <li key={index} style={{ marginLeft: "57px",fontSize:'28px',color:'black' }}>{hint}</li>
          ))}
         
        </Col>
        

        <Col style={{ backgroundColor: 'RGB( 220, 220, 220)',width:'1150px'}} className='col-md-8 pe-5 '>
          <img style={{ height: "400px", marginLeft: "400px",marginBottom:'40px' }} src={currentWord.image} alt={currentWord.word} />
          <br/>
          {/* <div className='pt-5 mx-5 px-4'>
          <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />
      </div> */}
         
          <form onSubmit={handleSubmit}>
            <input style={{ height: "40px", width: "500px", marginLeft: "360px" }}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              disabled={isCorrect}
              placeholder="Enter your guess"
            />
            <br />
            <button style={{ marginLeft: "460px", width: "300px", marginTop: '30px', height: '40px', backgroundColor: "#2F5233" ,color:'white'}} type="submit" disabled={isCorrect}>
              Submit
            </button>
          </form>

          {errorMessage && <h4 style={{ color: 'red', paddingLeft: '510px', marginTop: '40px' }}>{errorMessage}</h4>}
          {correctMessage && <h5 style={{ color: 'green', paddingLeft: '480px', marginTop: '40px' }}>{correctMessage}</h5>}
        </Col>
      </Row>
    </div>
  );
}

export default TranslatorComponent;

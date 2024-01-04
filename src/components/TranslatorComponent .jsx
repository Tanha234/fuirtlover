/* eslint-disable no-undef */
import { useState, useEffect } from 'react';

import appleImage from '../../images/download-removebg-preview (1).png';
import bananaImage from '../../images/banana.png';
import pineImage from '../../images/download__1_-removebg-preview - Copy (2).png';
import orangeImage from '../../images/ee.png';
import grapeImage from '../../images/download__1_-removebg-preview (1).png';
import kiwiImage from '../../images/e1f31675df5ba775a33d5b53f6fc5fc3-removebg-preview (1).png';
import mangoImage from '../../images/green-mango-flat-illustration-free-vector-removebg-preview.png';
import strawberryImage from '../../images/www.png';
import watermelonImage from '../../images/sm_5af5a9faaff48-removebg-preview.png';

const wordsData = [
  { word: 'apple', image: appleImage },
  { word: 'banana', image: bananaImage },
  { word: 'pineapple', image: pineImage },
  { word: 'orange', image: orangeImage },
  { word: 'grape', image: grapeImage },
  { word: 'avacado', image: kiwiImage },
  { word: 'mango', image: mangoImage },
  { word: 'coconut', image: strawberryImage },
  { word: 'watermelon', image: watermelonImage },
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
    <div className="App">
      <h1>Guess the Word Game</h1>

      <img src={currentWord.image} alt={currentWord.word} />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          disabled={isCorrect}
          placeholder="Enter your guess"
        />
        <button type="submit" disabled={isCorrect}>
          Submit
        </button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {correctMessage && <p style={{ color: 'green' }}>{correctMessage}</p>}
    </div>
  );
}

export default TranslatorComponent;

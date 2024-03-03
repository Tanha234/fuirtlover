import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Review.css';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const user=useLoaderData();

  const handleRatingChange = (newRating) => {
    // const updatedRating = newRating === rating ? 0 : newRating;
    setRating(newRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      text,
      rating,
    };

    fetch('http://localhost:4000/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server if needed
        console.log(data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });

    // After sending the data, you can reset the form
    setName('');
    setEmail('');
    setText('');
    setRating(0);
  };

  return (
    <div>
      <h1 style={{ fontFamily: 'sans-serif', color: 'green', marginLeft: '1210px' }} className="mt-5">Leave Us a Review</h1>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            style={{ height: '50px', width: '800px', marginLeft: '1000px', marginTop: '20px' }}
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlEmail">
          <Form.Control
            type="email"
            style={{ height: '50px', width: '800px', marginLeft: '1000px', marginTop: '20px' }}
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form.Control
            as="textarea"
            name="text"
            placeholder="Enter your review  (100-150 words)"
            style={{ height: '200px', width: '800px', marginLeft: '1000px', marginTop: '20px' }}
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
        <div style={{ marginLeft: '1020px', marginTop: '30px' }}>
          <div>
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;

              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => handleRatingChange(currentRating)}
                  />
                  <FaStar
                    color={currentRating <= (hover || rating) ? 'orange' : 'rgb(150, 197, 155)'}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                    className='star'
                    size={50}
                  />
                </label>
              );
            })}
            <p style={{ color: "black" }}>Rate Us: {rating}</p>
          </div>
        </div>
        <Button
          onClick={handleSubmit}
          style={{ marginLeft: '1250px', height: '50px', width: '300px', marginTop: '30px' }}
        >
          Submit
        </Button>
      </Form>
      <div style={{ borderRadius: '50%', height: '110px', width: '110px', backgroundColor: 'rgb(150, 197, 155)', marginLeft: '150px', marginTop: '-200px' }} />
      <img style={{ borderRadius: '50%', height: '240px', width: '250px', marginLeft: '200px', border: '10px solid rgb(150, 197, 155) ', marginTop: "-600px" }} src="../../../images/man2.jpg" />
      <img style={{ borderRadius: '50%', height: '240px', width: '250px', marginLeft: '-40px', marginTop: '-400px', border: '10px solid rgb(150, 197, 155) ' }} src="../../../images/man3.jpg" />
      <div style={{ borderRadius: '50%', height: '110px', width: '110px', border: '7px solid rgb(150, 197, 155)', marginLeft: '270px', marginTop: '-170px' }} />
      <div style={{ borderRadius: '50%', height: '110px', width: '110px', border: '7px solid rgb(150, 197, 155)', marginLeft: '260px', marginTop: '59px' }} />
      <div style={{ borderRadius: '50%', height: '110px', width: '110px', backgroundColor: 'rgb(150, 197, 155)', marginLeft: '460px', marginTop: '-620px' }} />
      <h1 style={{ fontFamily: 'cursive', color: 'orange', marginLeft: '910px', marginTop: '600px' }} className="pb-5">Users Review:{user.length}</h1>

      <div className='d-flex'>
      <Row  style={{marginLeft:'50px',marginTop:'20px'}} className="justify-content-between g-2 ">
  {user.map((user) => (
    <Col  key={user.id}>
      <Card style={{ width: '32rem', border: '2px solid rgb(150, 197, 155)',marginTop:'20px' }}>
        
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text><span style={{fontStyle:'bold',color:'red'}}>Email:</span>{user.email}</Card.Text>
          <Card.Text>{user.text}</Card.Text>
          <div className="d-flex">
            <span>Rating</span>
      <FontAwesomeIcon
       
        icon={faStar}
        style={{ fontSize: '17px', color: 'orange', marginRight: '10px' ,height:'25px'}}
      />
   {user.rating}  Star 
    </div>
  
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


      </div>



    </div>
  );
};

export default Review;

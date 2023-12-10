/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const User = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>{users.length}</h2>
      <Row xs={1} md={3} className="g-2 mx-5 px-5">
        {users.map((user) => (
          <Col key={user._id}>
            <Card className="w-75 products">
              <Card.Img className="w-100" src={user.image} alt={`User ${user._id} Avatar`} />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
               
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default User;

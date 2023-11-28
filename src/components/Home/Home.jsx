/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div>
              <Row className='mx-5  back '>
           <Col className=''>
           {/* <img className=' ' src='./../../../images/img11.png'></img> */}
           <img className='mt-5 pt-5 img10' src='./../../../images/img11.png'></img>
           </Col>
           <Col>
           <Row>
           <Col>
          
               <h1 className='textt'>Explore Natures Palette: Discover the <span>Vibrant World of Fruits </span> </h1>
               </Col>
               <Col className="ps-5 ms-5">
            
           <img className='ms-5 ps-5' src='./../../../images/Screenshot_2023-11-27_223347-removebg-preview.png'></img>
     
               </Col>
               
           </Row>
          
          
           </Col>
          
       </Row>
       <h1   className='text-center font-fix'>Top Favorite Fruits</h1>
       <Row style={{ marginLeft:'150px'}} className="pb-5 ">
           
         
           <Card className="pt-5 mt-5  backk" style={{ width: '14rem',marginLeft:'50px',borderColor:'green' }}>
      <Card.Img  className="img12" variant="top" src="./../../../images/green-mango-flat-illustration-free-vector-removebg-preview.png" />
   
        <Card.Title className='text-center'>Mango</Card.Title>
       
         
          </Card>
          <Card className="pt-5 mt-5" style={{ width: '14rem',marginLeft:'50px' ,borderColor:'green'}}>
      <Card.Img  className="w-50 mx-auto" variant="top" src="./../../../images/download__1_-removebg-preview.png" />
   
        <Card.Title className='text-center'>Pineapple</Card.Title>
       
         
          </Card>
          <Card className="pt-5 mt-5" style={{ width: '14rem',marginLeft:'50px',borderColor:'green' }}>
      <Card.Img  className="img12" variant="top" src="./../../../images/download__1_-removebg-preview (1).png" />
   
        <Card.Title className='text-center'>Grape</Card.Title>
       
         
          </Card>
          <Card className="pt-5 mt-5" style={{ width: '14rem',marginLeft:'50px' ,borderColor:'green'}}>
      <Card.Img  className="w-50 mx-auto" variant="top" src="./../../../images/download__2_-removebg-preview.png" />
   
        <Card.Title className='text-center'>Mango</Card.Title>
       
         
          </Card>
          <Card className="pt-5 mt-5" style={{ width: '14rem',marginLeft:'50px',borderColor:'green' }}>
      <Card.Img  className="w-50 mx-auto" variant="top" src="./../../../images/pngtree-cartoon-hand-drawn-fruit-avocado-green-fruit-png-image_4221779-removebg-preview (1).png" />
   
        <Card.Title className='text-center'>Avacado</Card.Title>
       
         
          </Card>
          <Card className="pt-5 mt-5" style={{ width: '14rem',marginLeft:'50px',borderColor:'green' }}>
      <Card.Img  className="w-50 mx-auto" variant="top" src="./../../../images/download-removebg-preview (1).png" />
   
        <Card.Title className='text-center'>Apple</Card.Title>
       
         
          </Card>
       </Row>
        </div>
    );
};

export default Home;
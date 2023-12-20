/* eslint-disable no-unused-vars */

import { AOS } from 'aos';
import React from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Row } from 'react-bootstrap'; // Update this line
import './Home.css';
import { Carousel } from 'react-bootstrap'; // Add this line



const Home = () => {
 
    return (
      
        <div>
              <Row className='mx-5  back '>
           <Col className='imo'>
           {/* <img className=' ' src='./../../../images/img11.png'></img> */}
           <img className='mt-5 pt-5 img10' src='./../../../images/DSC_7799-removebg-preview.png'></img>
           </Col>
           <Col>
           <Row>
           <Col>
          
               <h1 className='textt'
     
     >Explore Natures Palette: Discover the <span>Vibrant World of Fruits </span> </h1>
      {/* <button style={{height:'40px',width:'250px',backgroundColor:'#355e3b',color:'white'}} >Learn More<button/> */}
      <button style={{height:'45px',width:'270px',backgroundColor:'#355e3b',color:'white'}}>Learn More</button>
 
               </Col>
               <Col className="ps-5 ms-5 ">
            
           <img className='ms-5 ps-5' src='./../../../images/Screenshot_2023-11-27_223347-removebg-preview.png'></img>
     
               </Col>
               
           </Row>
          
          
           </Col>
          
       </Row>
      
       <Row style={{ marginLeft:'250px',marginRight:'100px'}} className="pb-5  ">
       <h1   className=' font-fix'
    >
Top Favorite Fruits</h1>
         
           <Card className="pt-5 mt-5  backk" style={{ width: '19rem',marginLeft:'50px',borderColor:'green',}}>
             <Row>
               <Col className='me-1'>
               <Card.Title className='text-center pt-5 fs-2 text-danger'>Mango</Card.Title>
       
        <Card.Title className='pt-3 text-center' style={{fontSize:'14px'}}>Protein: 0.82 grams</Card.Title>
        <Card.Title className=' text-center pb-3' style={{fontSize:'14px'}}>Sugar:13.66 grams</Card.Title>
        <div>
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} />
        
       
        </div>

               </Col>
               
               <Col>
               <Card.Img  className="img12" variant="top" src="./../../../images/360_F_529796145_VrgaweyykbCRBIpqJ6s4pKqo1MtcuCBS-removebg-preview (1).png" />
               </Col>
             </Row>
     
   
       
       
       
         
          </Card>
          <Card className="pt-5 mt-5  backk" style={{ width: '19rem',marginLeft:'50px',borderColor:'green',}}>
             <Row>
               <Col className='me-1'>
               <Card.Title className='text-center pt-5 fs-2 text-danger'>Pineapple</Card.Title>
       
        <Card.Title className='pt-3 text-center' style={{fontSize:'14px'}}>Protein: 0.82 grams</Card.Title>
        <Card.Title className=' text-center pb-3' style={{fontSize:'14px'}}>Sugar:13.66 grams</Card.Title>
        <div>
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} />
        
 
       
        </div>

               </Col>
               
               <Col>
               <Card.Img  className="img12" variant="top" src="./../../../images/download__1_-removebg-preview.png" />
               </Col>
             </Row>
     
   
       
       
       
         
          </Card>
          <Card className="pt-5 mt-5  backk" style={{ width: '19rem',marginLeft:'50px',borderColor:'green' }}>
             <Row>
               <Col className='me-1'>
               <Card.Title className='text-center pt-5 fs-2 text-danger'>Avacado</Card.Title>
       
        <Card.Title className='pt-3 text-center' style={{fontSize:'14px'}}>Protein: 0.82 grams</Card.Title>
        <Card.Title className=' text-center pb-3' style={{fontSize:'14px'}}>Sugar:13.66 grams</Card.Title>
        <div>
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'white', marginRight: '10px' }} />
        
       
        </div>

               </Col>
               
               <Col>
               <Card.Img  className="img12" variant="top" src="./../../../images/pngtree-cartoon-hand-drawn-fruit-avocado-green-fruit-png-image_4221779-removebg-preview (1).png"/>
               </Col>
             </Row>
     
   
       
       
       
         
          </Card>


          <Card className="pt-5 mt-5  backk" style={{ width: '19rem',marginLeft:'50px',borderColor:'green' }}>
             <Row>
               <Col className='me-1'>
               <Card.Title className='text-center pt-5 fs-2 text-danger'>Apple</Card.Title>
       
        <Card.Title className='pt-3 text-center' style={{fontSize:'14px'}}>Protein: 0.82 grams</Card.Title>
        <Card.Title className=' text-center pb-3' style={{fontSize:'14px'}}>Sugar:13.66 grams</Card.Title>
        <div>
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} /><FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} /><FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} />
        
 
       
        </div>

               </Col>
               
               <Col>
               <Card.Img  className="img12 w-100" variant="top" src="./../../../images/download-removebg-preview (1).png" />
               </Col>
             </Row>
     
   
       
       
       
         
          </Card>
       
          <Card className="pt-5 mt-5  backk" style={{ width: '19rem',marginLeft:'50px',borderColor:'green'  }}>
             <Row>
               <Col className='me-1'>
               <Card.Title className='text-center pt-5 fs-2 text-danger'>Guava</Card.Title>
       
        <Card.Title className='pt-3 text-center' style={{fontSize:'14px'}}>Protein: 0.82 grams</Card.Title>
        <Card.Title className=' text-center pb-3' style={{fontSize:'14px'}}>Sugar:13.66 grams</Card.Title>
        <div>
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} /><FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} /><FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} />
        
 
       
        </div>

               </Col>
               
               <Col>
               <Card.Img  className="img12" variant="top" src="./../../../images/download__2_-removebg-preview.png" />
               </Col>
             </Row>
     
   
       
       
       
         
          </Card>
          
          <Card className="pt-5 mt-5  backk" style={{ width: '19rem',marginLeft:'50px',borderColor:'green' }}>
             <Row>
               <Col className='me-1'>
               <Card.Title className='text-center pt-5 fs-2 text-danger'>Banaya</Card.Title>
       
        <Card.Title className='pt-3 text-center' style={{fontSize:'14px'}}>Protein: 0.82 grams</Card.Title>
        <Card.Title className=' text-center pb-3' style={{fontSize:'14px'}}>Sugar:13.66 grams</Card.Title>
        <div>
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} />
       
        </div>

               </Col>
               
               <Col>
               <Card.Img  className="img12" variant="top" src="./../../../images/hh.png"/>
               </Col>
             </Row>
     
   
       
       
       
         
          </Card>


         
       
          <Card className="pt-5 mt-5  backk" style={{ width: '19rem',marginLeft:'50px',borderColor:'green' }}>
             <Row>
               <Col className='me-1'>
               <Card.Title className='text-center pt-5 fs-2 text-danger'>Orange</Card.Title>
       
        <Card.Title className='pt-3 text-center' style={{fontSize:'14px'}}>Protein: 0.82 grams</Card.Title>
        <Card.Title className=' text-center pb-3' style={{fontSize:'14px'}}>Sugar:13.66 grams</Card.Title>
        <div>
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} /><FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} />
       
        </div>

               </Col>
               
               <Col>
               <Card.Img  className="img12" variant="top" src="./../../../images/ee.png" />
               </Col>
             </Row>
     
   
       
       
       
         
          </Card>
          <Card className="pt-5 mt-5  backk" style={{ width: '19rem',marginLeft:'50px',borderColor:'green' }}>
             <Row>
               <Col className='me-1'>
               <Card.Title className='text-center pt-5 fs-2 text-danger'>Coconut</Card.Title>
       
        <Card.Title className='pt-3 text-center' style={{fontSize:'14px'}}>Protein: 0.82 grams</Card.Title>
        <Card.Title className=' text-center pb-3' style={{fontSize:'14px'}}>Sugar:13.66 grams</Card.Title>
        <div>
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} />
        
       
        </div>

               </Col>
               
               <Col>
               <Card.Img  className="img12" variant="top" src="./../../../images/www.png" />
               </Col>
             </Row>
     
   
       
       
       
         
          </Card>
         
          
       </Row>


       {/* how it works */}

       <Row  className="mx-5 px-5 g-1" style={{backgroundColor:' #afe1af42'}}>
         <Col className="ms-4">
         <Row>
           
           <Col>
           <img className='mt-5 pt-5 me-2  w-25' src='./../../../images/6102-08952036en_Masterfile.jpg'></img>
          
           <img className='mt-5 pt-5 w-25 pb-1 ' src='./../../../images/yrr.jpg'></img>

           </Col>
         </Row>
         <Row>
           <Col>
           <img className=' me-2  w-25' src='./../../../images/uploading-process-on-desktop-screen-concept-person-working-on-computer-modern-flat-design-for-web-banner-website-element-brochures-or-book-cover-vector.jpg'></img>
          
           <img className='w-25 ' src='./../../../images/istockphoto-1194994154-612x612.jpg'></img>

           </Col>
         </Row>
         </Col>
         <Col className='ps-1'>
         <h1 className='pt-4 mt-5 text-primary'>How it works?</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta delectus ad dolores similique tempora porro eligendi ipsam unde, ratione sit. Deleniti modi laboriosam quibusdam quaerat rem non illum hic, ex quae ut iste veritatis autem esse, assumenda distinctio mollitia pariatur qui nam, cum earum eos minus vel quo. Rerum?</p>
         <Row>
           <Col className='d-flex'>
         <img style={{width:'40px'}} className=' ' src='./../../../images/ttt.png'></img>
         <h5 className='pt-4 text-secondary'>Upload Image for detecting fruit</h5>
         </Col>
         
         </Row>
         <Row>
           <Col className='d-flex'>
         <img style={{width:'40px'}} className=' ' src='./../../../images/eed.png'></img>
         <h5 className='pt-4 text-secondary'>Detect the fruit name and show it to the user</h5>
         </Col>
         
         </Row>
         <Row>
           <Col className='d-flex'>
         <img style={{width:'30px'}} className=' ' src='./../../../images/ii.png'></img>
         <h5 className='pt-4 text-secondary'>Save the data in the database</h5>
         </Col>
         
         </Row>
         </Col>
       </Row>

       {/* About us */}
       <Row style={{marginLeft:'300px'}}className=''>
         <h1 className='pt-5 mt-5 text-danger'>About Us</h1>
         <Col>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis alias ipsam aliquam ut aspernatur natus quaerat possimus tempore iure! Impedit quia obcaecati repellendus non earum saepe reprehenderit enim sed incidunt voluptatem? Corrupti molestiae consectetur tenetur earum cum sunt fugiat, nesciunt eum, repellat temporibus exercitationem, dolorem laboriosam aliquam in nostrum. Incidunt dicta error unde repellat, cupiditate ullam fugiat ab est beatae minima vitae?</p>
         </Col>
         <Col>
         <img style={{width:'500px', marginLeft:'200px'}} className=' ' src='./../../../images/istockphoto-1194994154-612x612.jpg'></img>
         </Col>
         <Col>
         </Col>
       </Row>
       <Row>
        <h2 className='text-center pt-5'>Customers Review</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-25 mx-auto"
              src="../../../images/6102-08952036en_Masterfile.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Customer Review 1</h3>
              <p>Description for the first slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-25 mx-auto"
              src="../../../images/18562160-fresh-fruits-with-water-splash-isolated-on-white-removebg-preview.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 style={{marginTop:'1400px'}}>Customer Review 2</h3>
              <p>Description for the second slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-25 mx-auto"
              src="../../../images/18562160-fresh-fruits-with-water-splash-isolated-on-white-removebg-preview.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Customer Review 3</h3>
              <p>Description for the third slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Add more Carousel.Items for additional slides */}
        </Carousel>
      </Row>

        </div>
    );
};

export default Home;
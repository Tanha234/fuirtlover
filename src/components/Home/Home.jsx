/* eslint-disable no-unused-vars */

import { AOS } from 'aos';
import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';

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

       <Row  className="mx-5 px-5 g-1 pt-5 mt-5 " style={{backgroundColor:' #afe1af42'}}>
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
         <h1 className='pt-5 mt-5 text-danger pb-5'>About Us</h1>
         <Col className='md-8'>
         <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis alias ipsam aliquam ut aspernatur natus quaerat possimus tempore iure! Impedit quia obcaecati repellendus non earum saepe reprehenderit enim sed incidunt voluptatem? Corrupti molestiae consectetur tenetur earum cum sunt fugiat, nesciunt eum, repellat temporibus exercitationem, dolorem laboriosam aliquam in nostrum. Incidunt dicta error unde repellat, cupiditate ullam fugiat ab est beatae minima vitae?</p>
         </Col>
         <Col className='md-4'>
         <img style={{width:'500px', marginLeft:'150px'}} className=' ' src='./../../../images/6-Capture0053-75-2-600x600.jpg'></img>
         </Col>
         <Col>
         </Col>
       </Row>
      <Row className='mx-auto px-5'>
        <h2 className='text-center pt-5 mt-5 pb-5 fs-1 text-primary'>Our Freatures</h2>

        
        

        


        <Col style={{backgroundColor:'   rgb(150, 197, 150)'}} className=' mx-5 px-5'>
     
     <img style={{width:'170px',marginLeft:'60px'}} className='pt-5 ' src='./../../../images/rr.png'></img>
     
      <h5 className='pt-2 text-white '>Upload & detect fruit name </h5>
     
     
     </Col>
     
        <Col style={{backgroundColor:'   rgb(150, 197, 150)'}} className=' mx-5 px-5'>
     
        <img style={{width:'80px',marginLeft:'90px'}} className='pt-5 mt-5 ' src='./../../../images/1574972-removebg-preview.png'></img>
        
         <h5 className='pt-5 text-white text-center'>Learn  Nuitrtion about fruits </h5>
        
        
        </Col>
        <Col style={{backgroundColor:'   rgb(150, 197, 150)'}} className=' mx-5 px-5'>
     
        <img style={{width:'110px',marginLeft:'100px'}} className=' pt-5 mt-5 pe-3' src='./../../../images/bas.png'></img>
         <h5 className='pt-4 text-white text-center'>Preservation fruits </h5>
        </Col>
        <Col style={{backgroundColor:'   rgb(150, 197, 150)',borderColor:'blue'}} className=' mx-5 px-5'>
     
        <img style={{width:'100px',marginLeft:'90px'}} className='pt-5 mt-5 ' src='./../../../images/eed.png'></img>
         <h5 className='pt-4 text-white text-center'>Contact with nutritionist</h5>
        </Col>
        
      </Row>

      <Row className='mx-5 px-auto mt-5 '>
        <h2 className='text-center text-danger pt-5 mt-5 pb-5 mb-5 fs-1'>Customers Review</h2>
        <CardGroup className='container-fluid mx-auto'>
      <Card className='mx-3 w-50 border-0 '>
        <Card.Img  class="rounded-img " src="../../../images/man5.jpg" rounded />
     
 
        <Card.Body>
          <Card.Title className='text-center text-primary fs-2' >Evan Olsen</Card.Title>
          <Card.Text className='text-center px-5 pb-4'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer
<br/>
<br/>

     <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px',marginTop:'3' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} />
        
          </Card.Text>
        </Card.Body>
       
      </Card>
     
      <Card className='mx-3 w-50 border-0 '>
        <Card.Img  class="rounded-img " src="../../../images/man3.jpg" rounded />
     
 
        <Card.Body>
          <Card.Title className='text-center text-primary fs-2' >Umama Usah</Card.Title>
          <Card.Text className='text-center px-5'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer
            <br/>


            <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px',marginTop:'30px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} />
        
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card className='mx-3 w-50 border-0 '>
        <Card.Img  class="rounded-img " src="../../../images/man2.jpg" rounded />
     
 
        <Card.Body>
          <Card.Title className='text-center text-primary fs-2' >Afran Soda</Card.Title>
          <Card.Text className='text-center px-5'>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer
            <br/>


            <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px',marginTop:'30px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
        <FontAwesomeIcon icon={faStar} style={{ fontSize: '17px', color: 'green', marginRight: '10px' }} />
        
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
      </Row>
{/* footer */}

<Row className="imff pt-5 mt-5">
  {/* <h2>Fruit Lover</h2> */}

  <p style={{ marginLeft: '919px', color: 'blue', paddingTop: '30px',fontSize:'22px' }}>Follow Us</p>

  <div style={{ marginLeft: '890px' }}>
    <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px', margin: '5px', color: 'blue' }} />
    <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px', margin: '5px', color: 'purple' }} />
    <FontAwesomeIcon icon={faTelegram} style={{ fontSize: '30px', margin: '5px', color: 'sky' }} />
    <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '30px', margin: '5px', color: 'red' }} />
  </div>

  <p style={{ color: 'black', marginLeft: '890px' }}>Info Support Marketing</p>
  <p style={{ color: 'black', marginLeft: '875px' }}>Terms of use Privacy Policy</p>
  <p style={{ color: 'black', marginLeft: '895px' }}>&copy; 2023, FruitLover</p>
</Row>
</div>
  );
};
    
    


export default Home;
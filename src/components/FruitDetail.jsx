// import { motion } from 'framer-motion';
// import {  Col, Row } from 'react-bootstrap';

import {  Col, Row } from "react-bootstrap";

const FruitDetail = () => {
  return (
   
<Row className="pt-5 mx-3 mt-2 pb-5">

 {/* <h2 style={{marginLeft:'880px',fontSize:'40px',fontFamily:'cursive'}}>Fruits</h2> */}
<Col>
<img style={{height:'600px',marginLeft:'110px'}}src="../../images/d5fdda69ee30495fcc3911402f41c84f-removebg-preview.png"/>
<h2 style={{marginLeft:'130px',color:'#4f7942',fontFamily:'cursive',fontSize:'40px'}} >What can we do with fruits!!</h2>
</Col>
<Col>
<div className="d-flex" style={{ height: '250px', width: '880px', backgroundColor: '#f5f5f5', border: '1px solid rgb(150, 197, 150)' }}>
    <img style={{height:'210px',marginLeft:'50px',backgroundColor:"rgb(150, 197, 150)",width:'200px',borderRadius:'50%'}} src="../../images/png1-removebg-preview.png"/>
   <div style={{marginLeft:'80px'}} className="d-flex mt-4">
     <div >
     <h1 style={{fontSize:'180px',color:'#587246'}} className="me-2 mb-5 pb-5">1</h1>
     </div>
     <div>
     <h4 style={{marginLeft:'',color:'green',marginTop:'20px'}}>Fruit Recipes</h4>
  <p style={{marginLeft:''}}>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, laborum?</p>
  <button style={{marginLeft:'',backgroundColor:'#4f7942',borderRadius:'16%',color:'white',width:'100px'}}>DETAIL</button>
     </div>
   </div>
  
  </div>
  <div className="d-flex mt-3 pe-3" style={{ height: '250px', width: '880px', backgroundColor: '#f5f5f5', border: '1px solid rgb(150, 197, 150)' }}>
    <img style={{height:'210px',marginLeft:'50px',backgroundColor:"rgb(150, 197, 150)",width:'200px',borderRadius:'50%'}} src="../../images/bas.png"/>
   <div style={{marginLeft:'80px'}} className="d-flex mt-4">
     <div >
     <h1 style={{fontSize:'180px',color:'#587246'}} className="me-2 mb-5 pb-5">2</h1>
     </div>
     <div>
     <h4 style={{marginLeft:'',color:'green',marginTop:'20px'}}>Cooking Tips</h4>
  <p style={{marginLeft:''}}>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, laborum?</p>
  <button style={{marginLeft:'',backgroundColor:'#4f7942',borderRadius:'16%',color:'white',width:'100px'}}>DETAIL</button>
     </div>
   </div>
  
  </div>
  <div className="d-flex mt-3 pe-3" style={{ height: '250px', width: '880px', backgroundColor: '#f5f5f5', border: '1px solid rgb(150, 197, 150)' }}>
    <img style={{height:'210px',marginLeft:'50px',backgroundColor:"rgb(150, 197, 150)",width:'200px',borderRadius:'50%'}} src="../../images/ova-removebg-preview.png"/>
   <div style={{marginLeft:'80px'}} className="d-flex mt-4">
     <div >
     <h1 style={{fontSize:'180px',color:'#587246'}} className="me-2 mb-5 pb-5">3</h1>
     </div>
     <div>
     <h4 style={{marginLeft:'',color:'green',marginTop:'20px'}}>Health Info</h4>
  <p style={{marginLeft:''}}>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, laborum?</p>
  <button style={{marginLeft:'',backgroundColor:'#4f7942',borderRadius:'16%',color:'white',width:'100px'}}>DETAIL</button>
     </div>
   </div>
  
  </div>
  </Col>
  
 </Row>
 



    

   
  );
};

export default FruitDetail;

import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const March = () => {
    return (
        <div>
              <p style={{fontFamily:"cursive",marginTop:'50px',marginLeft:'160px',fontSize:'52px'}} className="text-center text-danger"></p>
     
             
            <Row>
            <Link style={{fontSize:'30px',marginLeft:"1800px"}} to="/season">Back to</Link>
                <Col style={{backgroundColor:'firebrick',height:'500px',width:'500px'}}className="col-md-4 px-5 mx-5 mt-5">
                <p className="fs-4 text-white pt-5"> In Bangladesh, March marks the transition from winter to spring, and during this time, various fruits become available. While the availability can vary based on factors like climate and local conditions, here are some fruits that are commonly in season in Bangladesh during March:</p>
              
                
                </Col>
                
                
                <Col className="mt-5 pt-5">
                    <Row>
                        <Col> <img className="w-75 ps-3 ms-5" src="../../../images/360_F_529796145_VrgaweyykbCRBIpqJ6s4pKqo1MtcuCBS-removebg-preview (1).png"/>
                        <h2 className="text-center text-info">Mango </h2>
                        </Col>
                        <Col> <img className="w-100 pe-4" src="../../images/or2.jpg"/>
                        <h2 className="text-center text-info">Guava</h2>
                        </Col>
                        <Col> <img className="w-100 pe-4" src="../../images/or3.jpg"/>
                        <h2 className="text-center text-info">Papaya</h2>
                        </Col>
                        <Col> <img className="w-100 pe-4" src="../../images/or4.jpg"/>
                        <h2 className="text-center text-info">Banana</h2>
                        </Col>
              
               

                    </Row>
                    <Row className="mt-5">
                    <Col> <img className="w-100 pe-4" src="../../images/or11.jpg"/>
                        <h2 className="text-center text-info pt-5 mt-2">Orange</h2>
                        </Col>
                        <Col> <img className="w-100 pe-4 pt-3" src="../../images/or6.jpg"/>
                        <h2 className="text-center text-info pt-5 mt-4">Lichi</h2>
                        </Col>
                        <Col> <img className="w-100 pe-4" src="../../images/or7.jpg"/>
                        <h2 className="text-center text-info">Pineapple</h2>
                        </Col>
                 
                 
                        <Col> <img className="w-100 pe-4" src="../../images/or9.jpg"/>
                        <h2 className="text-center text-info pt-5 mt-4">Sapodilla </h2>
                        </Col>
              
         

                    </Row>
             
             
               
                </Col>


                
                
            </Row>
        </div>
    );
};

export default March;
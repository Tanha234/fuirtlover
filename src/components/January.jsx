import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const January = () => {
    return (
        <div>
            <p style={{fontFamily:"cursive",marginTop:'50px',marginLeft:'160px',fontSize:'52px'}} className="text-center text-danger "></p>
            <Link style={{fontSize:'30px',marginLeft:"1800px"}} to="/season">Back to</Link>
            <Row>
                
                <Col style={{backgroundColor:'peru',height:'500px',width:'500px'}}className="col-md-4 px-5 mx-5 mt-5">
                <p className="fs-4 text-white pt-5"> In Bangladesh, January falls during the winter season, and certain fruits are typically in season during this time.Its important to note that the availability of fruits can vary based on the specific region within Bangladesh and local farming practices. . Here are some fruits that are commonly available in Bangladesh in January:</p>
                </Col>
                <Col className="mt-5 pt-5">
                    <Row>
                        <Col> <img className="w-100 pe-4" src="../../images/or5.jpg"/>
                        <h2 className="text-center text-danger">Pomegranate </h2>
                        </Col>
                        <Col> <img className="w-100 pe-4" src="../../images/or2.jpg"/>
                        <h2 className="text-center text-danger">Guava</h2>
                        </Col>
                        <Col> <img className="w-100 pe-4" src="../../images/or3.jpg"/>
                        <h2 className="text-center text-danger">Papaya</h2>
                        </Col>
                        <Col> <img className="w-100 pe-4" src="../../images/or4.jpg"/>
                        <h2 className="text-center text-danger">Banana</h2>
                        </Col>
              
               

                    </Row>
                    <Row className="mt-5">
                    <Col> <img className="w-100 pe-4" src="../../images/or11.jpg"/>
                        <h2 className="text-center text-danger pt-5 mt-2">Orange</h2>
                        </Col>
                        <Col> <img className="w-100 pe-4 pt-3" src="../../images/or6.jpg"/>
                        <h2 className="text-center text-danger pt-5 mt-4">Lichi</h2>
                        </Col>
                        <Col> <img className="w-100 pe-4" src="../../images/or7.jpg"/>
                        <h2 className="text-center text-danger">Pineapple</h2>
                        </Col>
                 
                 
                        <Col> <img className="w-100 pe-4" src="../../images/or9.jpg"/>
                        <h2 className="text-center text-danger pt-5 mt-4">Sapodilla </h2>
                        </Col>
              
         

                    </Row>
             
             
               
                </Col>


                
                
            </Row>
           </div>
    );
};

export default January;
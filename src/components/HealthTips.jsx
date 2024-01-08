import { Col, Row } from "react-bootstrap";


const HealthTips = () => {
    return (
        <div>
         <Row style={{ marginRight:'150px',marginLeft:'150px',marginTop:'30px',backgroundColor: ' rgb(150, 197, 150)',marginBottom:'40px',border: '5px solid green'}}>
             <Col className="ms-5 ps-5 mt-4">
             <h1 style={{marginLeft:'300px',marginTop:'90px',fontFamily:'cursive',color:"green"}}>Fruits benefits in health</h1>
             <h2>1.Nutrient-Rich:</h2>

<p style={{fontSize:'20px'}}>Fruits are excellent sources of essential vitamins such as vitamin C, potassium, folate, and various B vitamins.</p>
<h2 className="pt-2">2.Dietary Fiber:</h2>

<p style={{fontSize:'20px'}}>Fruits contain dietary fiber, which promotes digestive health, helps prevent constipation, and may contribute to weight management by promoting a feeling of fullness.</p>
<h2>3.Antioxidants:</h2>

<p style={{fontSize:'20px'}}>Many fruits are rich in antioxidants, which help combat oxidative stress in the body. Antioxidants play a role in reducing the risk of chronic diseases and supporting overall health.</p>
<h2>4.Heart Health:</h2>

<p style={{fontSize:'20px'}}>Consuming fruits has been linked to a lower risk of heart disease. The fiber, potassium, and antioxidants in fruits contribute to maintaining healthy blood pressure and cholesterol levels.</p>

<h2>5.Reduced Risk of Chronic Diseases:</h2>
<p style={{fontSize:'20px'}}>Regular fruit consumption is associated with a lower risk of certain chronic diseases, including type 2 diabetes and certain types of cancers.</p>
             </Col>
             <Col className="mt-5 pt-5">
             <img src="../../images/green-apple-juice-soda-fruit-fruit-juices_44353_wh1200-removebg-preview.png"/>
             <img style={{marginLeft:'260px',marginTop:'-210px'}}src="../../images/394aa914ded0ba6f1d03ec033c1188b5-removebg-preview.png"/>
             </Col>
         </Row>
        </div>
    );
};

export default HealthTips;
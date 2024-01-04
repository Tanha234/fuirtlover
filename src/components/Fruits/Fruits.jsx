import { Col, Row } from "react-bootstrap";
import "../Fruits/Fruits.css"


const Fruits = () => {
    return (
        <div>
           
           <Row className="me-5">
  <Col className="col-4 pt-5 mt-5">
    <img className="mt-5 w-100"  src="../../../images/161558831-gardener-holding-citrus-fruits-vector-illustration-removebg-preview.png" />
    
           
  </Col>

  <Col className="col-8">
    <h2 className="pt-5 fruit text-center pb-5 fs-1">All about fruits</h2>
    <Row>
    <Col style={{backgroundColor:'rgb(102, 158, 174)',height:'400px'}}  className=" p-3 ">
     <h2 className="pb-3 mb-3">Raw Fruits</h2>
     <p className="text-white" >Raw fruits are fresh, uncooked fruits that have not been processed or heated. They are typically consumed in their natural state, providing a rich source of vitamins, minerals, fiber, and antioxidants. Common examples of raw fruits include apples, oranges, bananas, berries, and melons.</p>
      </Col>
      <Col className=" imos mx-2">
      <img  className=" pe-5 imoo" src="../../../images/download__2_-removebg-preview.png"/>
      </Col>
      <Col style={{backgroundColor:'rgb(102, 158, 174)',height:'400px'}}  className=" p-3 ">
     <h2 className="pb-3 mb-3">Fruit Diet</h2>
     <p className="text-white" >Raw fruits are fresh, uncooked fruits that have not been processed or heated. They are typically consumed in their natural state, providing a rich source of vitamins, minerals, fiber, and antioxidants. Common examples of raw fruits include apples, oranges, bananas, berries, and melons.</p>
      </Col>
    </Row>
    <Row className="mt-4 mb-5">

    <Col className=" imos mx-2">
      <img  className=" pe-5 imoo" src="../../../images/e1f31675df5ba775a33d5b53f6fc5fc3-removebg-preview (1).png"/>
 
      </Col>
      <Col style={{backgroundColor:'rgb(82, 158, 194)',height:'400px'}}  className=" p-3 ">
     <h2 className="pb-3 mb-3">Fruits Recipe</h2>
     <p className="text-white" >Baked, poached, roasted, grilled, brûléed, sautéed, or broiled - fresh cooked fruit quickly and easily becomes a seasonally delicious and healthy dessert! To note: not cooking fruit and just easting is as it is also technically a dessert!Baked, poached, roasted, grilled, brûléed, sautéed, or broiled - fresh cooked fruit quickly and easily becomes a seasonally delicious and healthy dessert! To note: not cooking fruit and just easting is as it is also technically a dessert!

</p>
      </Col>
      <Col className=" imos mx-2">
      <img  className=" pe-5 imoo" src="../../../images/hh.png"/>
      </Col>
      
    </Row>
  </Col>
</Row>

            
        </div>
    );
};

export default Fruits;
/* eslint-disable react-hooks/rules-of-hooks */
import  { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Recommenndation from './Recommenndation';

const Fruitsandwater = () => {
  const [weight, setWeight] = useState(); // 
  const [activityLevel, setActivityLevel] = useState(''); // Active, moderate, sedentary
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
    setShowRecommendations(false); 
  };

  const handleActivityLevelChange = (event) => {
    setActivityLevel(event.target.value);
    setShowRecommendations(false); //
  };

  const handleCalculateRecommendations = () => {
    setShowRecommendations(true); 
  };

  return (
    <div>
        <Row className="pt-5 mt-3">
            <Col className="col-md-6 pt-5 mt-5 ms-5 ps-5">
<img src="../../images/pagg.png"></img>

            </Col>
            <Col style={{backgroundColor:'silver',width:'700px',marginTop:'60px'}} className="col-md-6">
          
    
      <h2 style={{color:'green',fontFamily:'cursive',marginTop:'80px',marginLeft:'50px'}}>Hydration and Nutrition Calculator</h2>
      <label className="pt-5 fs-5 me-5 ps-5">
        Weight (kg):
        <input style={{width:'300px',marginLeft:'20px',height:'30px',borderColor:'green'}} type="number" value={weight} onChange={handleWeightChange} />
      </label>
      <br />
      <label className="pt-3 fs-5 ps-5" >
        Activity Level:
        <select  style={{width:'300px',marginLeft:'10px',height:'30px'}} value={activityLevel} onChange={handleActivityLevelChange}>
          <option value="sedentary">Sedentary</option>
          <option value="moderate">Moderate</option>
          <option value="active">Active</option>
        </select>
      </label>
      <br />
      <button style={{width:'300px',marginLeft:'160px',height:'40px',marginTop:'40px',backgroundColor:'#355e3b',color:'white'}} onClick={handleCalculateRecommendations}>Calculate Recommendations</button>
      {showRecommendations && <Recommenndation weight={weight} activityLevel={activityLevel} />}
      </Col>
      </Row>
    </div>
  );
};

export default Fruitsandwater;

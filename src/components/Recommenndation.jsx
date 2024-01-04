/* eslint-disable react/prop-types */
// src/components/Recommendations.js


const Recommenndation= ({ weight, activityLevel }) => {
  const calculateWaterIntake = () => {
  
    // It assumes that a person needs approximately 3% of their body weight in water per day.
    const waterIntake = (weight * 0.03) + (activityLevel === 'active' ? 500 : 250);
    return Math.round(waterIntake);
  };

  const calculateFruitConsumption = () => {
  //It assumes that a person needs approximately 5% of their body weight in fruits per day if they are active (activityLevel === 'active'), and 3% if they are not active.
    const fruitConsumption = weight * (activityLevel === 'active' ? 0.05 : 0.03);
    return Math.round(fruitConsumption);
  };

  return (
    <div className="mx-auto">
      <h3 style={{marginLeft:'180px',marginTop:'40px',color:'green'}}>Recommendations</h3>
      <p style={{marginLeft:'195px'}}  >Water Intake: {calculateWaterIntake()} ml per day</p>
      <p  style={{marginLeft:'166px'}}>Fruit Consumption: {calculateFruitConsumption()} servings per day</p>
    </div>
  );
};

export default Recommenndation;

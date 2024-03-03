import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const Tutorialss = () => {
    const navigate = useNavigate(); 
    const oneClick = () => {
        // Handle the click event for each month
        console.log("Button clicked for January");
        navigate('/season');
    };
    const twoClick = () => {
        // Handle the click event for each month
        console.log("Button clicked for January");
        navigate('/category');
    };
    const thirdClick = () => {
        // Handle the click event for each month
        console.log("Button clicked for January");
        navigate('/youtube');
    };
    return (
        <div style={{backgroundColor:'whitesmoke'}}>
            <h2 style={{color:'chocolate',fontFamily:'cursive',marginLeft:'700px',fontSize:'50px',paddingTop:'30px'}}>Educational Contents</h2>
            <Row>
                <Col>
                
                <img style={{ borderRadius: '50%', height: '460px', width: '360px', marginLeft: '440px', border: '2px solid rgb(150, 197, 155) ', marginTop: "70px" ,backgroundColor:'wheat'}} src="../../images/Screenshot_2024-01-15_205717-removebg-preview.png" />
                <div style={{height:'500px',width:'400px',backgroundColor:'ButtonShadow',border: '3px solid rgb(150, 197, 155)',marginTop:'-500px',marginLeft:'100px'}}>
                    <p style={{color:'darkmagenta',fontFamily:'revert',fontSize:'16px'}}className="px-5 pt-3 ">Dive into the world of fruits with our engaging YouTube tutorials! Explore the secrets of nutritious and delicious fruits, from exotic varieties to everyday favorites. Discover the art of selecting, storing, and preparing fruits for a healthy lifestyle. Our expert guides provide insightful tips on incorporating fruits into your diet, sharing delightful recipes and innovative serving ideas. Whether youre a fruit enthusiast or a novice, our tutorials cater to all levels of curiosity. Join us on a vibrant journey through orchards and kitchens, unlocking the vibrant palette of flavors and health benefits that fruits bring to your table. Subscribe now for a fruity adventure!.</p>
                    <Button onClick={thirdClick} style={{height:'40px',width:'200px',marginLeft:'110px'}}>Tutorials</Button>
                </div>
                </Col>
                <Col>
                <div  style={{height:'330px',width:'500px',marginLeft:'500px',backgroundColor:'lightcyan',border: '3px solid rgb(150, 197, 155) '}}>
                    <div className="d-flex">
                    <img style={{height:'90px'}} src="../../images/394aa914ded0ba6f1d03ec033c1188b5-removebg-preview.png"/>
                    <h3 className="pt-4 fst-italic text-danger">Learn about sesonal fruits</h3>
                    </div>
                  
                    <p className="px-3">Understanding and appreciating seasonal fruits goes beyond taste; its an insightful journey into natures rhythm and nutritional abundance. Our educational content on seasonal fruits aims to enlighten you about the cyclical availability of natures bounty. Explore the distinct flavors and benefits each season brings, fostering an appreciation for the freshness and sustainability .</p>
                    <Button onClick={oneClick} className="pb-3 mt-3 " style={{height:'33px',width:'200px',marginLeft:'170px',marginTop:'-30px'}}>Learn More-</Button></div>
                    
                <div  style={{height:'400px',width:'650px',marginRight:'400px',marginTop:'-93px',backgroundColor:'lightgrey',border: '3px solid rgb(150, 197, 155) '}}>
                <div className="d-flex">
                    <img style={{height:'90px'}} src="../../images/ova-removebg-preview.png"/>
                    <h3 className="pt-4 fst-italic text-primary">Learn about different types of  fruits</h3>
                    </div><p className="px-3">Embark on a tantalizing journey through a cornucopia of fruits, each a unique treasure with its own flavor, texture, and health benefits. Our educational content delves into the world of diverse fruits, from the familiar to the exotic. Explore the rich hues of berries bursting with antioxidants, savor the tropical delights of mangoes and pineapples, and unearth the creamy goodness of avocados. Learn about lesser-known gems like dragon fruit, jackfruit, and passion fruit, each offering a distinctive culinary adventure. Our comprehensive guides provide insights into the nutritional profiles, uses in cooking, and the cultural significance of these fruits, enriching your knowledge and inspiring a newfound appreciation for natures sweet and nutritious gifts.</p><Button onClick={twoClick} className="pb-3 mt-3 " style={{height:'36px',width:'200px',marginLeft:'200px',marginTop:'-30px'}}>Learn More-</Button></div>
                <div style={{height:'220px',width:'500px',backgroundColor:'honeydew',marginLeft:'500px',marginTop:'-10px',border: '3px solid rgb(150, 197, 155) '}}>
                <div className="d-flex">
                    <img style={{height:'50px'}} src="../../images/stock-vector-fruits-illustration-vector-file-removebg-preview.png"/>
                    <h5 className="pt-4 fst-italic text-danger">How fruits impact on health</h5>
                    </div>
                  <p className="py-2">
The impact of fruits on health is profound, contributing to overall well-being and vitality. Packed with essential vitamins, minerals, fiber, and antioxidants, fruits offer a natural arsenal against illnesses. Regular consumption supports immune function, aids digestion, and promotes heart health. The diverse array of fruits provides a spectrum of nutrients, each playing a vital role in maintaining optimal bodily,</p>

                </div>

                </Col>
            </Row>
        </div>
    );
};

export default Tutorialss;
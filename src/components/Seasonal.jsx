/* eslint-disable react-hooks/rules-of-hooks */
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Seasonal = () => {
    const navigate = useNavigate(); 
  
    const myclick = () => {
        // Handle the click event for each month
        console.log("Button clicked for January");
        navigate('/jan');
    };
    //feb
    const febclick = () => {
        // Handle the click event for each month
        console.log("Button clicked for January");
        navigate('/feb');
    };
    const marclick = () => {
        // Handle the click event for each month
        console.log("Button clicked for January");
        navigate('/mar');
    };
    const aprclick = () => {
        // Handle the click event for each month
        console.log("Button clicked for January");
        navigate('/apr');
    };
    const mayclick = () => {
        // Handle the click event for each month
        console.log("Button clicked for January");
        navigate('/may');
    };

    return (
        <div>
            <Row className="mb-4 g-5 ">
                <h1 style={{ fontFamily: 'cursive', marginLeft: '150px' }} className="text-center text-primary mt-5 pt-5 fs-1">Select a month</h1>
                <h3 style={{ fontFamily: 'sans-serif', marginLeft: '150px', color: 'grey' }} className="text-center"> You can know about monthly fruits</h3>
                <Col className="col-md-4 pe-5 ">
                    <img className="w-100" src="../../images/man-with-fruits-and-vegetables-vector-removebg-preview.png" alt="Man with fruits" />
                </Col>

                <Col className="col-md-8 ps-5 pt-5 mt-5 ">
                    <button
                     onClick={myclick}
                        style={{ width: '300px', height: '90px' }}
                        type="button"
                        className="btn btn-secondary mx-3 mt-5"
                       
                    >
                        January
                    </button>
                    <button
                       onClick={febclick}
                        style={{ width: '300px', height: '90px' }}
                        type="button"
                        className="btn btn-secondary mx-3 mt-5"
                        
                    >
                        February
                    </button>
                    <button
                     onClick={marclick}
                        style={{ width: '300px', height: '90px' }}
                        type="button"
                        className="btn btn-secondary mx-3 mt-5"
                        
                    >
                        March
                    </button>
                    <button
                         onClick={aprclick}
                        style={{ width: '300px', height: '90px' }}
                        type="button"
                        className="btn btn-secondary mx-3 mt-5"
                      
                    >
                        April
                    </button>
                    <button
                        onClick={mayclick}
                        style={{ width: '300px', height: '90px' }}
                        type="button"
                        className="btn btn-secondary mx-3 mt-5"
                       
                    >
                        May
                    </button>
                    <button
                        style={{ width: '300px', height: '90px' }}
                        type="button"
                        className="btn btn-secondary mx-3 mt-5"
                      
                    >
                        June
                    </button>
                    <button
                        style={{ width: '300px', height: '90px' }}
                        type="button"
                        className="btn btn-secondary mx-3 mt-5"
                      
                    >
                        July
                    </button>
                    <button
                        style={{ width: '300px', height: '90px' }}
                        type="button"
                        className="btn btn-secondary mx-3 mt-5"
                      
                    >
                        August
                    </button>
                    <button
                        style={{ width: '300px', height: '90px' }}
                        type="button"
                        className="btn btn-secondary mx-3 mt-5"
                        
                    >
                        September
                    </button>
                    <button
                        style={{ width: '300px', height: '90px' }}
                        type="button"
                        className="btn btn-secondary mx-3 mt-5"
                       
                    >
                        October
                    </button>
                    <button
                        style={{ width: '300px', height: '90px' }}
                        type="button"
                        className="btn btn-secondary mx-3 mt-5"
                       
                    >
                        November
                    </button>
                    <button
                        style={{ width: '300px', height: '90px' }}
                        type="button"
                        className="btn btn-secondary mx-3 mt-5"
                      
                    >
                        December
                    </button>
                </Col>
            </Row>
        </div>
    );
};

export default Seasonal;

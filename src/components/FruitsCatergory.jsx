import {  Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const FruitsCatergory = () => {
    const addToFavorite = async (fruitName) => {
        try {
          // Send a POST request to the backend API endpoint
          const response = await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fruitName }),
          });
    
          if (response.ok) {
          alert('Favorite added successfully');
          } else {
            alert('Not added the fruit');
          }
        } catch (error) {
          console.error('Error adding favorite:', error);
        }
      };
    
    return (
        <div>
            <h2 className=" pt-4 fs-1" style={{fontFamily:'cursive',color:'#ffa07a',marginLeft:'800px'}}>Fruits Category</h2>
           
<Row className="mt-5">
    <Col style={{marginLeft:'100px',paddingLeft:'10px'}} className="">
    <div style={{backgroundColor:'#997950',width:'700px',height:'300px',marginLeft:'100px'}} className="d-flex px-3">
        <div>
        <h1 className="pt-3">Coconut</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quam? Dolore, quasi? Accusamus, doloribus, voluptates placeat praesentium consequatur in repellendus id ipsum rem facere asperiores, consequuntur itaque molestiae voluptatum! Minima mollitia voluptas libero error vitae natus pariatur obcaecati qui dicta eveniet unde cum asperiores sapiente consequatur, aut est. Alias, sequi?</p>
    <div className="d-flex">
    <button
                  style={{ width: '170px', borderRadius: '', marginTop: '10px' }}
                  onClick={() => addToFavorite('Coconut')}
                >
                  Add to Favourite <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
                </button>

    </div>
   
        </div>
        <div>
        <img style={{height:'210px',marginTop:'50px'}} src="../../images/92-925054_coconut-euclidean-vector-tropical-fruit-vector-graphics-removebg-preview.png"/>  
        </div>

    </div>
    </Col>
    
    <Col>
    <div style={{backgroundColor:'#E9EC6B',width:'700px',height:'300px',marginRight:'335px'}} className="d-flex px-3">
        <div>
        <h1 className="pt-3">Banana</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quam? Dolore, quasi? Accusamus, doloribus, voluptates placeat praesentium consequatur in repellendus id ipsum rem facere asperiores, consequuntur itaque molestiae voluptatum! Minima mollitia voluptas libero error vitae natus pariatur obcaecati qui dicta eveniet unde cum asperiores sapiente consequatur, aut est. Alias, sequi?</p>
    <button
                  style={{ width: '170px', borderRadius: '', marginTop: '10px' }}
                  onClick={() => addToFavorite('Banana')}
                >
                  Add to Favourite <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
                </button>
        </div>
        <div>
        <img style={{height:'210px',marginTop:'50px'}} src="../../images/hh.png"/>  
        </div>

    </div>
    </Col>
    
</Row>
<Row className="mt-5">
    <Col style={{marginLeft:'100px',paddingLeft:'10px'}} className="">
    <div style={{backgroundColor:'#99aa7a',width:'700px',height:'300px',marginLeft:'100px'}} className="d-flex px-3">
        <div>
        <h1 className="pt-3">Guava</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quam? Dolore, quasi? Accusamus, doloribus, voluptates placeat praesentium consequatur in repellendus id ipsum rem facere asperiores, consequuntur itaque molestiae voluptatum! Minima mollitia voluptas libero error vitae natus pariatur obcaecati qui dicta eveniet unde cum asperiores sapiente consequatur, aut est. Alias, sequi?</p>
    <button
                  style={{ width: '170px', borderRadius: '', marginTop: '10px' }}
                  onClick={() => addToFavorite('Guava')}
                >
                  Add to Favourite <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }} />
                </button>
        </div>
        <div>
        <img style={{height:'210px',marginTop:'50px'}} src="../../images/download__2_-removebg-preview.png"/>  
        </div>

    </div>
    </Col>
    
    <Col>
    <div style={{backgroundColor:'#F28C28',width:'700px',height:'300px',marginRight:'335px'}} className="d-flex px-3">
        <div>
        <h1 className="pt-3">Mango</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quam? Dolore, quasi? Accusamus, doloribus, voluptates placeat praesentium consequatur in repellendus id ipsum rem facere asperiores, consequuntur itaque molestiae voluptatum! Minima mollitia voluptas libero error vitae natus pariatur obcaecati qui dicta eveniet unde cum asperiores sapiente consequatur, aut est. Alias, sequi?</p>
    <button   onClick={() => addToFavorite('Mango')} style={{width:'170px',borderRadius:"",marginTop:"10px"}}>Add to Favourite   <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }}/></button>
        </div>
        <div>
        <img style={{height:'210px',marginTop:'50px'}} src="../../images/360_F_529796145_VrgaweyykbCRBIpqJ6s4pKqo1MtcuCBS-removebg-preview (1).png"/>  
        </div>

    </div>
    </Col>
    <Col style={{marginLeft:'100px',paddingLeft:'10px'}} className="">
    <div style={{backgroundColor:'#fb607f ',width:'700px',height:'300px',marginLeft:'100px'}} className="d-flex px-3 mt-5">
        <div>
        <h1 className="pt-3">Watermelon</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quam? Dolore, quasi? Accusamus, doloribus, voluptates placeat praesentium consequatur in repellendus id ipsum rem facere asperiores, consequuntur itaque molestiae voluptatum! Minima mollitia voluptas libero error vitae natus pariatur obcaecati qui dicta eveniet unde cum asperiores sapiente consequatur, aut est. Alias, sequi?</p>
    <button   onClick={() => addToFavorite('Watermelon')} style={{width:'170px',borderRadius:"",marginTop:"10px"}}>Add to Favourite   <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }}/></button>
        </div>
        <div>
        <img style={{height:'210px',marginTop:'50px'}} src="../../images/sm_5af5a9faaff48-removebg-preview.png"/>  
        </div>

    </div>
    </Col>
    <Col>
    <div style={{backgroundColor:'yellow',width:'700px',height:'300px',marginRight:'335px'}} className="d-flex px-3 mt-5">
        <div>
        <h1 className="pt-3">Pineapple</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quam? Dolore, quasi? Accusamus, doloribus, voluptates placeat praesentium consequatur in repellendus id ipsum rem facere asperiores, consequuntur itaque molestiae voluptatum! Minima mollitia voluptas libero error vitae natus pariatur obcaecati qui dicta eveniet unde cum asperiores sapiente consequatur, aut est. Alias, sequi?</p>
    <button   onClick={() => addToFavorite('Pineapple')}style={{width:'170px',borderRadius:"",marginTop:"10px"}}>Add to Favourite   <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }}/></button>
        </div>
        <div>
        <img style={{height:'210px',marginTop:'50px'}} src="../../images/download__1_-removebg-preview - Copy - Copy.png"/>  
        </div>

    </div>
    </Col>

    <Col style={{marginLeft:'100px',paddingLeft:'10px'}} className="">
    <div style={{backgroundColor:'#ffa07a ',width:'700px',height:'300px',marginLeft:'100px'}} className="d-flex px-3 mt-5">
        <div>
        <h1 className="pt-3">Avacado</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quam? Dolore, quasi? Accusamus, doloribus, voluptates placeat praesentium consequatur in repellendus id ipsum rem facere asperiores, consequuntur itaque molestiae voluptatum! Minima mollitia voluptas libero error vitae natus pariatur obcaecati qui dicta eveniet unde cum asperiores sapiente consequatur, aut est. Alias, sequi?</p>
    <button   onClick={() => addToFavorite('Avacado')}style={{width:'170px',borderRadius:"",marginTop:"10px"}}>Add to Favourite   <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }}/></button>
        </div>
        <div>
        <img style={{height:'210px',marginTop:'50px'}} src="../../images/e1f31675df5ba775a33d5b53f6fc5fc3-removebg-preview (1).png"/>  
        </div>

    </div>
    </Col>
    <Col>
    <div style={{backgroundColor:'#8f9779',width:'700px',height:'300px',marginRight:'335px'}} className="d-flex px-3 mt-5">
        <div>
        <h1 className="pt-3">Jackfruit</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quam? Dolore, quasi? Accusamus, doloribus, voluptates placeat praesentium consequatur in repellendus id ipsum rem facere asperiores, consequuntur itaque molestiae voluptatum! Minima mollitia voluptas libero error vitae natus pariatur obcaecati qui dicta eveniet unde cum asperiores sapiente consequatur, aut est. Alias, sequi?</p>
    <button    onClick={() => addToFavorite('Jackfruit')}style={{width:'170px',borderRadius:"",marginTop:"8px"}}>Add to Favourite   <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '17px', color: 'orange', marginRight: '10px' }}/></button>
        </div>
        <div>
        <img style={{height:'210px',marginTop:'50px'}} src="../../images/Jackfruit.png"/>  
        </div>

    </div>
    </Col>

    
    
    
</Row>











        </div>
    );
};

export default FruitsCatergory;
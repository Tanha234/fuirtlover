import { Col, Row } from "react-bootstrap";


const Youtube = () => {
    return (
        <div>
            <Row>
                <Col>
                <img style={{height:'500px',marginBottom:'300px'}} src="../../images/Screenshot_2024-01-15_205717-removebg-preview.png"/>
                <img style={{height:'500px',marginLeft:"-800px",marginTop:"300px"}} src="../../images/Screenshot_2023-11-27_223347-removebg-preview.png"/>
                </Col>
                <Col>
                <h2 className="pt-5 pb-5 fs-1 text-primary">Tutorials about Fruit</h2>
                <iframe width="760" height="315" src="https://www.youtube.com/embed/o7nCCC1HH7g?si=VJy6l3VROHv8woSM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="760" height="315" src="https://www.youtube.com/embed/Fw1HKAOyO54?si=_QEBCCjsTL8NPb_s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="760" height="315" src="https://www.youtube.com/embed/o7nCCC1HH7g?si=VJy6l3VROHv8woSM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Col>
            </Row>
        </div>
    );
};

export default Youtube;

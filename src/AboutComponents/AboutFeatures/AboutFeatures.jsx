import { Row, Col, Container } from "react-bootstrap";
import { AboutFeaturesData } from "./AboutFeaturesData";

export const AboutFeatures = () => (
  <Container className="section-wrapper-last">
    <h2>Les avantages de la méthode</h2>

    <Row className="wrapper gy-4 gy-lg-0"> 
      {AboutFeaturesData.map(({ icon, title, description }, index) => (
      
        <Col key={index} md={6} lg={3} className="d-flex flex-column justify-content-center 
        align-items-center text-center icon-circle"> 

           <img src={icon} alt={title} />
           <h3>{title}</h3>
           <p>{description}</p>
    
        </Col> 
      ))}
    </Row>
  </Container>
);

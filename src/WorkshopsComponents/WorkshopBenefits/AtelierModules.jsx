import { Row, Col, Container } from "react-bootstrap";
import { AtelierModulesData} from "./AtelierModulesData";

export const AtelierModules = () => (
  <Container className="section-wrapper-middle">
    <h2>Les atouts des ateliers</h2>

     <Row className="wrapper gy-4 gy-lg-0">
    {AtelierModulesData.map(({ icon, title, description }, index) => (
      
        <Col key={index} xs={6} md={3} className="d-flex flex-column justify-content-center
         align-items-center text-center icon-circle"> 
           <img src={icon} alt={title} />
            <p>{description}</p>
        </Col>
      
    ))}
  </Row>
  </Container>



   
  



);

import { Row, Col, Container } from "react-bootstrap";
import { ProgramModulesData} from "./ProgramModulesData";

export const ProgramModules = () => (
  
  <Container className="section-wrapper-middle">

    <h2>Que vous apporte la participation au club ?</h2>

    <Row className="wrapper gy-4 gy-lg-0">
    {ProgramModulesData.map(({ icon, title, description }, index) => (
      
        <Col key={index} md={6} lg={4} className="d-flex flex-column align-items-center text-center icon-linear">
           <img src={icon} alt={title} />
            <p style={{ maxWidth: '85%' }}>{description}</p>
        </Col>
      
    ))}
  </Row>
  </Container>
);
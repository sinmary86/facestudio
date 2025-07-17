import { Row, Col, Container } from "react-bootstrap";
import { workshopBenefits } from "./WorkshopBenefitsData";

export const WorkshopBenefits = () => (
  <Container className="section-wrapper-middle">
    <h2>Les atouts des ateliers</h2>

    <Row className="wrapper gy-4 gy-lg-0">
      {workshopBenefits.map(({ icon, title, description }, index) => (
        <Col
          key={index}
          md={6}
          lg={3}
          className="d-flex flex-column justify-content-center align-items-center text-center icon-circle"
        >
          <img src={icon} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </Col>
      ))}
    </Row>
  </Container>
);

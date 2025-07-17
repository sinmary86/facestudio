import { Row, Col, Container } from "react-bootstrap";
import { AvantagesMainData } from "./AvantagesMainData";

export const AvantagesMain = () => (
  <Container className="section-wrapper-middle">
    <h2>Les avantages de la méthode</h2>

    <Row className="wrapper gy-4 gy-lg-0">
      {AvantagesMainData.map(({ icon, title, description }, index) => (
        <Col
          key={index}
          md={6}
          lg={4}
          className="d-flex flex-column align-items-center text-center icon-linear"
        >
          <img src={icon} alt={title} />
          <h3>{title}</h3>
          <p>{description} </p>
        </Col>
      ))}
    </Row>
  </Container>
);

import { Row, Col, Container } from "react-bootstrap";
import { WhyGroupData } from "./WhyGroupData";

export const WhyGroup = () => (
  <Container className="section-wrapper-middle">
    <h2>Que vous apporte la participation au club ?</h2>

    <Row className="wrapper gy-4 gy-lg-0">
      {WhyGroupData.map(({ icon, title, description }, index) => (
        <Col
          key={index}
          md={6}
          lg={4}
          className="d-flex flex-column align-items-center text-center icon-linear"
        >
          <img src={icon} alt={title} />
          <p>{description}</p>
        </Col>
      ))}
    </Row>
  </Container>
);

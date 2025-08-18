import { Row, Col, Container } from "react-bootstrap";
import { SkinSymptomData } from "./SkinSymptomData";

export const SkinSymptom = () => (

  <Container className="section-wrapper-middle">
    <h2>Vous constatez certains de ces signes ?</h2>

    <Row className="wrapper gy-4 gy-lg-0">
      {SkinSymptomData.map(({ icon, title, description }, index) => (
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

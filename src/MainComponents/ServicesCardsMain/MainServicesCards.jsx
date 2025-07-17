import { mainServicesData } from "./MainServicesData";
import styles from "./MainServices.module.scss";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

export const MainServicesCards = () => {
  return (
    <Container className="section-wrapper-middle">
      <h2>Nos services</h2>

      <Row className="wrapper">
        {mainServicesData.map((service, index) => (
          <Col
            key={index}
            xs={12}
            md={6}
            lg={3}
            className="mb-4 d-flex justify-content-center"
          >
            <Link to={service.link}>
              <Card className={styles.card}>
                <Card.Img
                  src={service.image}
                  alt={service.alt}
                  className={styles.cardImage}
                />
                <Card.ImgOverlay>
                  <Card.Body
                    className={`${styles.serviceBody} d-flex flex-column align-items-center justify-content-center text-center`}
                  >
                    <h3 className="text-center">{service.title}</h3>
                    <div className={`${styles.separator} mb-2`}></div>
                    <p className="text-center">En savoir plus</p>
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

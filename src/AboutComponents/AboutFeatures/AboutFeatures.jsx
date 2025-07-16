import { Row, Col, Container } from "react-bootstrap";
import { aboutFeatures } from "./AboutFeaturesData";
import styles from "./AboutFeatures.module.scss";

export const AboutFeatures = () => (
  <Container className={styles.wrapperFull}>
    <h2>Les avantages de la méthode</h2>

    <Row className={styles.wrapper}> 
      {aboutFeatures.map(({ icon, title, description }, index) => (
      
        <Col key={index} md={6} lg={3} className="d-flex flex-column justify-content-center align-items-center text-center"> 
           <img src={icon} alt={title} className="mb-4"/>
           <h3 className={styles.subTitle}>{title}</h3>
           <p className={styles.subTitle}>{description}</p>
        </Col> 
      ))}
    </Row>
  </Container>
);

import { Row, Col, Container } from "react-bootstrap";
import { aboutFeatures } from "./AboutFeaturesData";
import styles from "./AboutFeatures.module.scss";

export const AboutFeatures = () => (
  <Container className="mt-5 mb-5">
    <Row  >
    {aboutFeatures.map(({ icon: Icon, title, description }, index) => (
      
        <Col key={index} md={6} lg={3} className="d-flex flex-column justify-content-center align-items-center text-center gap-2"> 
           <Icon size={45} strokeWidth={1} className="mb-2" />
           <h5 className={styles.subTitle}>{ title }</h5>
           <p className="mb-0 text-muted w-75">{description}</p>
        </Col>
      
    ))}
  </Row>
  </Container>
);
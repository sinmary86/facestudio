import { Row, Col, Container } from "react-bootstrap";
import { workshopBenefits } from "./WorkshopBenefitsData";
import styles from "./WorkshopBenefits.module.scss";

export const WorkshopBenefits = () => (
  <Container className={styles.wrapperFull}>

        <h2>Les atouts des ateliers</h2>

        <Row className={styles.wrapper}> 
        {workshopBenefits.map(({ icon, title, description }, index) => (
        
            <Col key={index} md={6} lg={3} className="d-flex flex-column justify-content-center align-items-center text-center"> 
            <img src={icon} alt={title} className="mb-4"/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subTitle}>{description}</p>
            </Col>
        ))}
    </Row>
  </Container>
);
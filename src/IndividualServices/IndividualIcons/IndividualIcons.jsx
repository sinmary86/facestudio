
import { Row, Col, Container } from "react-bootstrap";
import { IndividualIconsData } from "./IndividualIconsData";
import styles from "./IndividualIcons.module.scss";

export const IndividualIcons = () => (
  
  <Container className={styles.wrapperFull}>

    <h3 className="text-center">Vous constatez certains de ces signes ?</h3>

    <Row className={styles.wrapper}>
    {IndividualIconsData.map(({ icon, title, description }, index) => (
      
        <Col key={index} md={6} lg={4} className="d-flex flex-column align-items-center text-center"> 
           <img src={icon} alt={title} className="mb-4"/>
           <h3>{ title }</h3>
           <p className={styles.subTitle}>{description} </p>
        </Col>
      
    ))}
  </Row>
  </Container>
);
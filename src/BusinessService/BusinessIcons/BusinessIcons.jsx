
import { Row, Col, Container } from "react-bootstrap";
import { BusinessIconsData} from "./BusinessIconsData";
import styles from "./BusinessIcons.module.scss";

export const BusinessIcons = () => (
  
  <Container className={styles.wrapperFull}>

    <h3 className="text-center">Que vous apporte la participation au club ?</h3>

    <Row className={styles.wrapper}>
    {BusinessIconsData.map(({ icon, title, description }, index) => (
      
        <Col key={index} md={6} lg={4} className="d-flex flex-column align-items-center text-center"> 
           <img src={icon} alt={title} className="mb-4"/>
           <h3>{ title }</h3>
           <p className={styles.subTitle}>{description} </p>
        </Col>
      
    ))}
  </Row>
  </Container>
);

import { Row, Col, Container } from "react-bootstrap";
import { BusinessIconsData} from "./BusinessIconsData";
import styles from "./BusinessIcons.module.scss";

export const BusinessIcons = () => (
  
  <Container className={styles.wrapperFull}>

    <h2 className="text-center">Que vous apporte la participation au club ?</h2>

    <Row className={styles.wrapper}>
    {BusinessIconsData.map(({ icon, title, description }, index) => (
      
        <Col key={index} md={6} lg={4} className="d-flex flex-column align-items-center text-center"> 
                <div className={`d-flex align-items-center justify-content-center ${styles.imgWrapper}`}>
           <img src={icon} alt={title} className="mb-4"/>
           </div>
           <h3>{ title }</h3>
           <p className={styles.subTitle}>{description} </p>
        </Col>
      
    ))}
  </Row>
  </Container>
);
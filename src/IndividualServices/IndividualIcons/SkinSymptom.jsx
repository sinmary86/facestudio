
import { Row, Col, Container } from "react-bootstrap";
import { SkinSymptomData } from "./SkinSymptomData";
import styles from "./SkinSymptom.module.scss";

export const SkinSymptom = () => (
  
  <Container className={styles.wrapperFull}>

    <h2>Vous constatez certains de ces signes ?</h2>

    <Row className={styles.wrapper}>
    {SkinSymptomData.map(({ icon, title, description }, index) => (
      
        <Col key={index}
         md={6} 
         lg={4}
     className={`d-flex flex-column align-items-center text-center mb-4 ${styles.imgIcon}`}>
      
   
        <div className={`d-flex align-items-center justify-content-center ${styles.imgWrapper}`}>


           <img src={icon} alt={title} className="mb-4"/>
           </div>
           <p className={styles.subTitle}>{description} </p>
        </Col>
      
    ))}
  </Row>
  </Container>
);
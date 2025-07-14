import { Row, Col, Container } from "react-bootstrap";
import { AvantagesMainData } from "./AvantagesMainData";
import styles from "./AvantagesMain.module.scss";

export const AvantagesMain = () => (
  
 <Container className={styles.wrapperFull}>
  <h2 className="text-center">Les avantages de la méthode</h2>

  <Row className={styles.wrapper}>
    {AvantagesMainData.map(({ icon, title, description }, index) => (
      <Col
        key={index}
        md={6} 
        lg={4}  
      className={`d-flex flex-column align-items-center text-center mb-4 ${styles.imgIcon}`}>
        <img src={icon} alt={title} />
        <h3>{title}</h3>
    <p className={styles.subTitle}>{description} </p>
      </Col>
    ))}

  </Row>
</Container>

);
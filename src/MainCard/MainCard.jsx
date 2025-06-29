
import { Row, Col, Container } from "react-bootstrap";
import { MainCardData } from "./MainCardData";
import styles from "./MainCard.module.scss"

export const MainCard = () => (
  <Container className="mt-5 mb-5">
    <Row className="gy-4" >
    {MainCardData.map(({ icon, title, description }, index) => (
      
        <Col key={index} md={6} lg={4} className="d-flex flex-column justify-content-center align-items-center text-center gap-2 mb-4"> 
           <img src={icon} alt={title} width={65} className="mb-2" />
           <h5 className={styles.subTitle}>{ title } </h5>
           <p className="mb-0 text-muted">{description} </p>
        </Col>
      
    ))}
  </Row>
  </Container>
);
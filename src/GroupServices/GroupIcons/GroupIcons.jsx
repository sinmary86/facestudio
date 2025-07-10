
import { Row, Col, Container } from "react-bootstrap";
import { GroupIconsData} from "./GroupIconsData";
import styles from "./GroupIcons.module.scss";

export const GroupIcons = () => (
  
  <Container className={styles.wrapperFull}>

    <h2 className="text-center">Que vous apporte la participation au club ?</h2>

    <Row className={styles.wrapper}>
    {GroupIconsData.map(({ icon, title, description }, index) => (
      
        <Col key={index} md={6} lg={4} className="d-flex flex-column align-items-center text-center"> 
        <div className={styles.imgWrapper}>
           <img src={icon} alt={title} className="mb-4"/>
         </div>
           <h3>{ title }</h3>
           <p className={styles.subTitle}>{description} </p>
        </Col>
      
    ))}
  </Row>
  </Container>
);
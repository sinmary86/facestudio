import { mainServicesData } from './MainServicesData';
import styles from './MainServices.module.scss';
import { Container, Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';


export const MainServicesCards = () => {
    return (

  <Container className={styles.wrapperFull}>

    <h2 className="text-center" >Nos services</h2>
    
    <div className={`${styles.wrapper} d-flex flex-wrap justify-content-between`}>
      {mainServicesData.map((service, index) => (
      <Link to={service.link} key={index}>
        <Card key={index} className={`${styles.card}`}>
          <Card.Img src={service.image} alt={service.alt} className={styles.cardImage} />
            <Card.ImgOverlay>
              <Card.Body className={`${styles.serviceBody} d-flex flex-column align-items-center justify-content-center text-center`}>
                <h3 className="text-center">{service.title}</h3>
                <div className={`${styles.separator} mb-2`}></div>
                <p className="text-center">En savoir plus</p>
              </Card.Body >
            </Card.ImgOverlay>
          </Card>
      </Link>
    ))}
    </div>
    
</Container>
  );
};
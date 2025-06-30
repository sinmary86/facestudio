import { serviceItems } from './ServiceItems';
import styles from './Service.module.scss';
import { Container, Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';

 // цвет заголовка оставляем ? 

export const ServiceCard = () => {
    return (

<Container className="px-0">

    <h2 className="mb-5 mt-5 text-center" >Nos services</h2>
    
    <div className={`${styles.cardsWrapper} d-flex flex-wrap justify-content-between`}>
      {serviceItems.map((service, index) => (
      <Link to={service.link} key={index} className={styles.cardLink}>
        <Card key={index} className={`${styles.card}`}>
          <Card.Img src={service.image} alt={service.alt} className={styles.cardImage} />
            <Card.ImgOverlay>
              <Card.Body className={`${styles.serviceBody} d-flex flex-column align-items-center justify-content-center text-center`}>
                <Card.Title className={`${styles.title} text-center`}>{service.title}</Card.Title>
                <div className={`${styles.separator} mx-auto`}></div>
                <Card.Text className={`${styles.more} text-center`}>En savoir plus</Card.Text>
              </Card.Body >
            </Card.ImgOverlay>
          </Card>
      </Link>
    ))}
    </div>
</Container>
  );
};
import { serviceItems } from './ServiceItems';
import styles from './Service.module.scss';
import { Container, Card, Button } from 'react-bootstrap';
import { serviceContent } from './ServiceContent';


 // заменить картинки  Servise Items в разделах 'Accompagnement individuel',  и Offres pour les Entreprises
 // кнопка на разном уровне из за текста 
 // цвет заголовка оставляем ? 

export const ServiceCard =()=> {

    return (

  <section className = {styles.section}>
<Container>
     <div className={styles.content}>
    <h2>{serviceContent.title}</h2>
    <p>{serviceContent.description}</p>
   
   <div className={styles.cardsWrapper}>
    
    {serviceItems.map((service, index) => (
      <Card key={index} style={{ width: '16rem', minWidth: '250px', marginRight: '1rem' }}>
      <Card.Img variant="top" src={service.image} alt ="" style={{width: '100%' , height: 'auto' }} />
      <Card.Body className={styles.serviceBody}>
        <Card.Title className={styles.title}>{service.title}</Card.Title>
        <Card.Text className={styles.text}>{service.text} </Card.Text>
        <Button a href="/indinidualServicePage" className={styles.button}>En savoir plus</Button>
       </Card.Body >
    </Card>
    ))}
    </div>
</div>
      </Container>
    </section>
  );
};
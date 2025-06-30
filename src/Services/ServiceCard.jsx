import { serviceItems } from './ServiceItems';
import styles from './Service.module.scss';
import { Container, Card, Button } from 'react-bootstrap';
import { serviceContent } from './ServiceContent';
import { Link} from 'react-router-dom';


 // заменить картинки  Servise Items в разделах 'Accompagnement individuel',  и Offres pour les Entreprises
 // кнопка на разном уровне из за текста 
 // цвет заголовка оставляем ? 
 // удалить компонент ServiceContent

export const ServiceCard =()=> {
 

    return (

  <section className = {styles.section}>
<Container fluid className="px-0">
     <div className={styles.content}>
    <h2 className="mb-5 " >Nos services</h2>
    {/* <p>{serviceContent.description}</p> */}
   
   <div className={styles.cardsWrapper}>
    
    {serviceItems.map((service, index) => (
      <Card key={index} style={{ width: '17rem', minWidth: '250px' }}>
      <Card.Img variant="top" src={service.image} alt ="" style={{width: '100%' , height: 'auto'}} />
       <Card.Body className={styles.serviceBody}>
      <Card.Title className={`${styles.title} text-start`}>
    {service.title}
  </Card.Title>
  <Card.Text className={`${styles.text} text-start`}>
    {service.text}
  </Card.Text>

        <Button  as={Link} to={service.link}  className={`btn-main ms-auto mt-3`} >En savoir plus</Button>
       </Card.Body >
    </Card>
    ))}
    </div>
</div>
      </Container>
    </section>
  );
};
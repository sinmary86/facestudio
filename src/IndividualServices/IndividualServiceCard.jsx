import { Card, ListGroup, Container } from 'react-bootstrap';
import styles from './IndividualService.module.scss';
import { individualServiceItems } from './IndividualServiceItems';
import { CalendarDays } from 'lucide-react';
import { BadgeEuro } from 'lucide-react';
import { Pin } from 'lucide-react';
import { CheckCheck } from 'lucide-react';


    
export const IndividualServiceCard = () => {
  return (
        <Container className={styles.section}>
          <h2>Pour celles qui veulent transformer leur visage en profondeur, à leur rythme.</h2>
       {individualServiceItems.map((item) => (
        <Card key={item.id} className={styles.card} style={{ width: '22rem' }}>
          <Card.Img variant="top" src={item.image} alt="" />
          <Card.Body>
          <Card.Title className={styles.title}>{item.title}</Card.Title>
          <Card.Text className={styles.textTwo}>{item.discription}</Card.Text>
          <Card.Text className={styles.text}>  <Pin /> {item.text}</Card.Text>
               
            <ListGroup className={styles.listItem}>
              {item.details.map((details, index) => (
                <ListGroup.Item key={index} className={styles.listItem}>
                <CheckCheck /> { details}
                </ListGroup.Item>
              ))}
            </ListGroup>
            
      <Card.Text  className={styles.listItem} >
              <CalendarDays size={24} /> <strong>Durée:</strong> {item.period}
            </Card.Text>

            <Card.Text className={styles.listItem}>
            <BadgeEuro /> <strong>Tarif : {item.price} </strong> {item.priceDetails}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

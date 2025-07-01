import { Card, ListGroup, Container, Alert } from 'react-bootstrap';
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
          <Card.Img src={item.image} className={styles.cardImage} />
          <Card.Body>
          <Card.Title className={styles.title}>{item.title}</Card.Title>
          <Card.Text className={styles.textTwo}><i>{item.description}</i></Card.Text>
          <Card.Text className={styles.text}>  {item.text}</Card.Text>
               
            <ListGroup className={styles.listItem}>
              {item.details.map((details, index) => (
                <ListGroup.Item key={index} className={styles.listItem}>
                <CheckCheck size={16}/> { details}
                </ListGroup.Item>
              ))}
            </ListGroup>
     
 <ListGroup className={styles.listItem}>
  {item.period.map((period, index) => (
    <ListGroup.Item key={index} className={styles.listItem}>
      <CalendarDays size={20} /> {period}
    </ListGroup.Item>
  ))}
</ListGroup>

<Card.Text className={styles.listItem} >
  {item.connect}
</Card.Text>

<Card.Text className={styles.price}>
  TARIF {item.price}  €
 </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

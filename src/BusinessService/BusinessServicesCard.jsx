import { Card, Container } from 'react-bootstrap';
import styles from './BusinessServices.module.scss';
import { businessServicesItems} from './BusinessServicesItems';
import { CalendarDays } from 'lucide-react';
import { BadgeEuro } from 'lucide-react';
import { Pin } from 'lucide-react';
import { Award } from 'lucide-react';

    
export const BusinessServicesCard = () => {
  return (
        <Container className={styles.section}>
         <h2>Des ateliers bien-être pour favoriser l’énergie, la présence et le mieux-être au travail.</h2>
       {businessServicesItems.map((item) => (
        <Card key={item.id} className={styles.card} style={{ width: '22rem' }}>
          <Card.Img variant="top" src={item.image} alt="" />
          <Card.Body>
          <Card.Title className={styles.title}>{item.title}</Card.Title>
    
          <Card.Text className={styles.text}>  <Pin /> {item.reason}</Card.Text>
               
            
      <Card.Text  className={styles.listItem} >
              <CalendarDays size={24} /> <strong>Durée:</strong> {item.period}
            </Card.Text>

<Card.Text className={styles.text}>  <Award /> {item.text}</Card.Text>

            <Card.Text className={styles.listItem}>
            <BadgeEuro /> <strong>Tarif : </strong> {item.price} {item.priceDetails}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};


           
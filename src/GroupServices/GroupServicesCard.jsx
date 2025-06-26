
import { Card, ListGroup, Container} from 'react-bootstrap';
import styles from './GroupServices.module.scss';
import { groupServicesItems } from './GroupServicesItems';
import { CalendarDays } from 'lucide-react';
import { BadgeEuro } from 'lucide-react';
import { Pin } from 'lucide-react';
import { CheckCheck } from 'lucide-react';

    
export const GroupServicesCard = () => {
  return (
    <Container className={styles.section}>
      <h2>Pour prendre soin de son visage en douceur ou s’engager dans une vraie transformation, ensemble.</h2>
      {groupServicesItems.map((item) => (
        <Card key={item.id} className={styles.card} style={{ width: '22rem' }}>
      
         <Card.Img variant="top" src={item.image} alt="" />
               
          <Card.Body>
            <Card.Title className={styles.title}>{item.title}</Card.Title>
            <Card.Text className={styles.text}>{item.text}</Card.Text>
                 <Card.Text className={styles.textTwo}><Pin /> <strong>{item.discription}</strong> </Card.Text>

            <Card.Text  className={styles.textTwo} > {item.textTwo}</Card.Text>
            <ListGroup>
              {item.concerns.map((concern, index) => (
                <ListGroup.Item key={index} className={styles.listItem}>
                   <CheckCheck />  {concern}
                </ListGroup.Item>
              ))}
            </ListGroup>

            <Card.Text className={styles.listItem}>
              <CalendarDays size={24} /> <strong>Durée:</strong> {item.period}
            </Card.Text>

            <Card.Text className={styles.listItem}>
               <BadgeEuro /> <strong>Tarif : {item.price}</strong> {item.priceDetails}
            </Card.Text>

         </Card.Body>
        </Card>
      ))}
    </Container>
  );
};


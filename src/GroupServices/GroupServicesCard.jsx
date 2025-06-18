
import { Card, ListGroup, Container} from 'react-bootstrap';
import styles from './GroupServices.module.scss';
import { groupServicesItems } from './GroupServicesItems';
import { CalendarDays } from 'lucide-react';
import { BadgeEuro } from 'lucide-react';
import { Pin } from 'lucide-react';
import { CheckCheck } from 'lucide-react';
import { Award } from 'lucide-react';
import { Users } from 'lucide-react';

    
export const GroupServicesCard = () => {
  return (
    <Container className={styles.section}>
      {groupServicesItems.map((item) => (
        <Card key={item.id} className={styles.card} style={{ width: '22rem' }}>
      
         <Card.Img variant="top" src={item.image} alt="" />
               
          <Card.Body>
            <Card.Title className={styles.title}>{item.title}</Card.Title>
            <Card.Text className={styles.text}>{item.text}</Card.Text>

             <Card.Text className={styles.textOne}>{item.textOne}</Card.Text>
             <ListGroup>
              {item.sort.map((sort, index) => (
                <ListGroup.Item  key={index} className={styles.listItem}>
                 <Users /> {sort}
                </ListGroup.Item>
              ))}
            </ListGroup>


            <Card.Text  className={styles.textTwo} > <Pin /> {item.textTwo}</Card.Text>
            <ListGroup>
              {item.concerns.map((concern, index) => (
                <ListGroup.Item key={index} className={styles.listItem}>
                   <CheckCheck />  {concern}
                </ListGroup.Item>
              ))}
            </ListGroup>

            <Card.Text className={styles.listItem}>{item.discription}</Card.Text>

            <Card.Text className={styles.listItem}>
              <CalendarDays size={24} /> <strong>Durée:</strong> {item.period}
            </Card.Text>

            <Card.Text className={styles.listItem}>
               <BadgeEuro /> <strong>Tarif : {item.price}</strong> {item.priceDetails}
            </Card.Text>

            <Card.Text><Award /> <i>{item.conclusion}</i></Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};


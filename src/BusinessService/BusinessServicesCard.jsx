
import { CalendarDays } from 'lucide-react';
import { BadgeEuro } from 'lucide-react';
import { Pin } from 'lucide-react';
import { CheckCheck } from 'lucide-react';
import { Award } from 'lucide-react';
import { Users } from 'lucide-react';
import { Card, ListGroup, Container } from 'react-bootstrap';
import styles from './BusinessServices.module.scss';
import { businessServicesItems } from './BusinessServicesItems';




export const BusinessServicesCard = () => {
  const item = businessServicesItems;

  return (
    <Container className={styles.section}>
      <Card className={styles.card}>
        <Card.Body>
          <Card.Title className={styles.title}>{item.title}</Card.Title>
          <Card.Text className={styles.text}>{item.text}</Card.Text>
          <Card.Text className={styles.textTwo}><Pin /> {item.textTwo}</Card.Text>

          <ListGroup>
            {item.sort.map((sort, i) => (
              <ListGroup.Item key={i} className={styles.listItem}>
                <Users /> {sort}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Card.Text className={styles.listItem}><strong>Bénéfices : </strong></Card.Text>
          <ListGroup>
            {item.concerns.map((concerns, index) => (
              <ListGroup.Item key={index} className={styles.listItem}>
                <CheckCheck /> {concerns}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Card.Text className={styles.listItem}>
            <CalendarDays size={20} /> <strong>Durée :</strong> {item.period}
          </Card.Text>

          <Card.Text>
            <BadgeEuro /> <strong>Tarif :</strong> {item.price}
          </Card.Text>

          <Card.Text>
            <Award /> <i>{item.conclusion}</i>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
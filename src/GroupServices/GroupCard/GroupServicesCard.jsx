

import { Card, Container } from 'react-bootstrap';
import styles from './GroupServices.module.scss';
import { groupServicesItems } from "./GroupServicesItems.js";
import { Check } from 'lucide-react';

export const GroupServicesCard = () => {
  return (
    <Container className={`text-center ${styles.wrapperFull}`}>
      
      <h2 >COURS EN GROUPE – Clubs en ligne</h2>
      
      <div className={`d-flex flex-wrap justify-content-between ${styles.wrapper}`}>
        {groupServicesItems.map((item, index) => (
          <div key={index} className={styles.cardWrapper}>
            <img src={item.image} alt={item.title} className={styles.backgroundImage} />
            <Card className={styles.textCard}>
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>
                  {item.title}
                  <div className={styles.subtitleText}>({item.subtitle})</div>
                </Card.Title>

                <ul className={styles.myList}>
                  {item.items.map((text, i) => (
                  <li key={i} className={styles.listItem}>
                <span className={styles.icon}>✔</span>
                  {text}
                </li>
                  ))}
                </ul>

                <div className={styles.price}>
                  {item.price}
                  <br />
                  <small className={styles.note}>{item.note}</small>
                </div>
              </Card.Body>
            </Card>
         </div>
        ))}
      </div>
    </Container>
  );
};



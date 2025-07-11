// оставила код на  цену, вдруг надо будет добавить, если клиенту надо 
// название третьего ателье оставляем ? 
// возможно убрать из название карточек слово АТЕЛЬЕ 

import { Card, Container } from 'react-bootstrap';
import styles from './BusinessServices.module.scss';
import { businessServicesItems } from './BusinessServicesItems';
import { Check } from 'lucide-react';

export const BusinessServicesCard = () => {
  return (
    <Container className={`text-center ${styles.wrapperFull}`}>
      
      <h2 >INTERVENTIONS EN ENTREPRISE</h2>
      
      <div className={`d-flex flex-wrap justify-content-between ${styles.wrapper}`}>
        {businessServicesItems.map((item, index) => (
          <div key={index} className={styles.cardWrapper}>
            <img src={item.image} alt={item.title} className={styles.backgroundImage} />
            <Card className={styles.textCard}>
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>
                  {item.title.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                  <div className={styles.subtitleText}>({item.subtitle})</div>
                </Card.Title>

                <ul className={styles.myList}>
                  {item.items.map((text, i) => (
                  <li key={i} className={styles.listItem}>
                  <span className={styles.icon}><Check/></span>
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



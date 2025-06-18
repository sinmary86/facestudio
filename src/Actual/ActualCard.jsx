import { actualItems } from './ActualItems';
import styles from './Actual.module.scss';
import { Card, Container } from 'react-bootstrap';
import { actualContent } from './ActualContent';



export const ActualCard = () => {
  return (
    <section className={styles.section}>
      <Container>

   <div className='styles.content'>
    <h2>{actualContent.title}</h2>
    <p>{actualContent.description}</p>
   </div>

        
        <div className={styles.cardsWrapper}>
          {actualItems.map((actual, index) => (
            <Card
              key={index}
              style={{ width: '18rem', minWidth: '250px', marginRight: '1rem' }}
            >
              <Card.Img
                variant="top"
                src={actual.image}
                alt=""
                style={{ width: '100%', height: 'auto' }}
              />
              <Card.Body className={styles.actualBody}>
                <Card.Title className={styles.title}>{actual.title}</Card.Title>
                <Card.Text className={styles.text}>{actual.text}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

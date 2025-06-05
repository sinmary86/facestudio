import Card from 'react-bootstrap/Card';
import { actualItems } from './ActualItems';
import styles from './Actual.module.scss';

export const ActualCard = () =>  {

  return (

 <section className = {styles.section}>
    <div>
    <h2>Pourquoi choisir ma méthode</h2>
    <p>Je suis Natalia, coach en Face Fitness et Face Yoga.
     J’aide mes clientes à tonifier et rajeunir leur visage grâce à des exercices naturels et efficaces.
      Découvrez une approche complète qui allie musculation faciale, relaxation et auto-massage pour des résultats visibles en quelques semaines.</p>
   
    <div className={`d-flex flex-wrap justify-content-around`}>
    

    {actualItems.map((actual, index) => (
      <Card key={index} style={{ width: '18rem', minWidth: '250px', marginRight: '1rem' }}>
      <Card.Img variant="top" src={actual.image} alt ="" style={{width: '100%' , height: 'auto' }} />
      <Card.Body className={styles.actualBody}>
        <Card.Title className={styles.title}>{actual.title}</Card.Title>
        <Card.Text className={styles.text}>{actual.text} </Card.Text>
       </Card.Body >
    </Card>
    ))}
    </div>
</div>
    </section>
  );
};


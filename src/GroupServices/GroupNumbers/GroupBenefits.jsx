import { Container } from 'react-bootstrap';
import styles from './GroupBenefits.module.scss';

export const GroupBenefits =()=> {
  return (
    <Container className={styles.wrapperFull}>
  
      <h2>Les bienfaits d’un travail en groupe</h2>

      <ol className="grid-list-numbers">
        <li>
          <span className="big-number">01</span>
          Une dynamique vivante et motivante.
        </li>

        <li>
          <span className="big-number">02</span>
          Un tarif plus accessible que l’individuel.
        </li>

        <li>
          <span className="big-number">03</span>
          Des exercices adaptés avec des corrections en direct.
        </li>

        <li>
          <span className="big-number">04</span>
          Un soutien chaleureux et un esprit de groupe.         
        </li>
      </ol>
          
    </Container>
  );
}


import { Container } from 'react-bootstrap';
import styles from './BusinessBenefits.module.scss';

export const BusinessBenefits =()=> {
  return (
    <Container className={styles.wrapperFull}>
  
        <h2>Bénéfices RH & QVCT</h2>

        <ol className="grid-list-numbers">
          <li>
            <span className="big-number">01</span>
            Meilleure concentration et récupération mentale.
          </li>
             
          <li>
            <span className="big-number">02</span>
            Réduction des tensions chroniques (visage, nuque, mâchoire).
          </li>

          <li>
            <span className="big-number">03</span>
            Engagement renforcé, climat apaisé.
          </li>

          <li>
            <span className="big-number">04</span>
            Intégration facile dans les objectifs RH/QVCT, RSE, prévention des TMS & RPS.        
          </li>
        </ol>

      </Container>
  );
}


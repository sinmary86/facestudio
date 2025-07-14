import { Container } from 'react-bootstrap';
import styles from './AvailableZones.module.scss';

export const AvailableZones =()=> {
  return (
    <Container className={styles.wrapperFull}>
  
        <h2> Zones disponibles </h2>

        <ol className="grid-list-numbers">
          <li>
            <span className="big-number">01</span>
            Front & ride du lion.
          </li>

          <li>
            <span className="big-number">02</span>
            Regard et contour des yeux.
          </li>

          <li>
            <span className="big-number">03</span>
            Centre du visage (nez, bouche, sillons).
          </li>

          <li>
            <span className="big-number">04</span>
            Contours & ovale du visage.         
          </li>
        </ol>
          
      </Container>
  );
}


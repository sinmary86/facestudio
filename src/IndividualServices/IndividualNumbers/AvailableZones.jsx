import { Container } from 'react-bootstrap';
import styles from './AvailableZones.module.scss';

export const AvailableZones =()=> {
  return (
    <Container className={styles.wrapperFull}>
  
            <h2 className="text-center" > Zones disponibles </h2>

            <ol className={styles.gridList}>
              <li>
                <span className={styles.bigNumber}>01</span>
                Front & ride du lion.
                </li>
              <li>
                <span className={styles.bigNumber}>02</span>
                Regard et contour des yeux.
              </li>
              <li>
                <span className={styles.bigNumber}>03</span>
                Centre du visage (nez, bouche, sillons).
                 </li>
              <li>
                <span className={styles.bigNumber}>04</span>
                Contours & ovale du visage.         
                 </li>
            </ol>
          
      </Container>
  );
}


import styles from './MainContent.module.scss';

      /* Quote + List */
import { Container, Row, Col } from 'react-bootstrap';

export const MainContent =()=> {
  return (


      <Container className="py-5 text-center text-md-start">
        <Row className="gx-4"> {/* gx-4 = горизонтальный gap 1.5rem */}
    <Col 
  md={6}
  className={styles['custom-gap-col']}
  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
           <blockquote className="fs-4 fst-italic" style={{ textAlign: 'center' }}>
              Je suis Natalia, coach en Face Fitness et Face Yoga. J’aide les femmes à raffermir et rajeunir leur visage grâce à des exercices naturels et efficaces.
            </blockquote>
          </Col>
          <Col md={6} className={styles['custom-gap-col']}>
            <p className="fw-bold mb-4">Pourquoi choisir ma méthode?</p>
            
            <ul  className="list-unstyled">
              <li className="mb-3">✓ Atténuer en douceur les signes de fatigue et de tension.</li>
              <li className="mb-3">✓ Mettre en valeur votre beauté naturelle et votre symétrie.</li>
              <li className="mb-3">✓ Libérer les tensions musculaires et les mimiques néfastes.</li>
              <li className="mb-3">✓ Ressentir de la légèreté, de la clarté et de la confiance.</li>
            </ul>
          </Col>
        </Row>
      </Container>
   
  );
}


     
import styles from './MainContent.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import womanabout from '../Assets/about.jpg';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

export const MainContent =()=> {
  return (
      <Container >
        <Row className={styles.section}>
           <Col md={4} className="d-flex flex-column justify-content-center pe-4">        
               <h3>Bienvenue chez Facestudio!</h3>
               <p>Je m'appelle Natalia, je suis coach certifiée en Face Fitness et Face Yoga.</p>
               <p>J’aide les femmes à raffermir et rajeunir leur visage grâce à des exercices naturels et efficaces.</p>
               <p>Chaque visage est unique. Grâce à une approche douce, je vous aide à révéler votre beauté naturelle à tout âge.</p>
               <Link to="/a-propos" className="btn-more align-self-start">Faire connaissance <MoveRight size={18} className={styles.iconArrow}/></Link>
          </Col> 

          <Col md={4} className="d-flex flex-column justify-content-center">
             <img src={womanabout} alt="Portrait de Natalia" className={`img-fluid rounded ${styles.imgСustom}`} />        
          </Col>
          
          <Col md={4} className="d-flex flex-column justify-content-center ps-4">
            <h3>Pourquoi choisir ma méthode?</h3>
            <ul  className="list-unstyled">
              <li>✓ Atténuer en douceur les signes de fatigue et de tension.</li>
              <li>✓ Mettre en valeur votre beauté naturelle et votre symétrie.</li>
              <li>✓ Libérer les tensions musculaires et les mimiques néfastes.</li>
              <li>✓ Ressentir de la légèreté, de la clarté et de la confiance.</li>
            </ul>
          </Col>
        </Row>
      </Container>
  );
}


     
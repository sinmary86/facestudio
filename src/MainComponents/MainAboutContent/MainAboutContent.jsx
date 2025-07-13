import styles from './MainAboutContent.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import womanabout from '../../Assets/face11.jpg';
// import womanabout from '../../Assets/face12.png';
// import womanabout from '../../Assets/about.jpg';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

//скорректировать текст - дублирующийся p

export const MainAboutContent =()=> {
  return (
      <Container className={styles.section}>
        <h2 className='text-center'>À propos de la méthode</h2>
        <Row >
          <Col md={6} className="d-flex flex-column justify-content-center">
             <img src={womanabout} alt="Portrait de Natalia" className={`img-fluid rounded-circle ${styles.imgСustom}`} />        
          </Col>

          <Col md={6} className="d-flex flex-column justify-content-center">        
               <p>Je m'appelle Natalia, je suis coach certifiée en Face Fitness et Face Yoga.<br/>
               J’aide les femmes à raffermir et rajeunir leur visage grâce à des exercices naturels et efficaces.<br/>
               Chaque visage est unique. Grâce à une approche douce, je vous aide à révéler votre beauté naturelle à tout âge.
               </p>

              <p>Je m'appelle Natalia, je suis coach certifiée en Face Fitness et Face Yoga.<br/>
               J’aide les femmes à raffermir et rajeunir leur visage grâce à des exercices naturels et efficaces.<br/>
               Chaque visage est unique. Grâce à une approche douce, je vous aide à révéler votre beauté naturelle à tout âge.
               </p>
              
               <Link to="/a-propos" className="btn-more align-self-start">Faire connaissance <MoveRight size={18} className={styles.iconArrow}/></Link>
          </Col> 

        </Row>
      </Container>
  );
}


     
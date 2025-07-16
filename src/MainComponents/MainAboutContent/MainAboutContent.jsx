import styles from "./MainAboutContent.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import womanabout from "../../Assets/face11.jpg";
import arrow from "../../Assets/arrow-icon.svg";
import { Link } from "react-router-dom";

//скорректировать текст - дублирующийся p

export const MainAboutContent = () => {
  return (
    <Container className={styles.section}>
      <h2 className="text-center">À propos de la méthode</h2>
      <Row>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <img
            src={womanabout}
            alt="Portrait de Natalia"
            className={`img-fluid rounded-circle ${styles.imgСustom}`}
          />
        </Col>


          <Col md={6} className="d-flex flex-column justify-content-center">        
               <p>Je suis Natalia, coach expérimentée en Face Fitness et Face Yoga, et j’accompagne avec passion et engagement mes clientes dans leur parcours pour tonifier, raffermir, revitaliser et rajeunir naturellement leur visage. À travers un accompagnement personnalisé et bienveillant, je vous aide à développer une pratique régulière qui transforme non seulement l’apparence extérieure, mais aussi le ressenti intérieur de votre peau et de vos traits. Grâce à des exercices ciblés, doux, progressifs et profondément efficaces, il devient possible de stimuler les muscles en profondeur, d’activer la circulation sanguine et lymphatique et de favoriser une régénération naturelle des tissus cutanés. Chaque séance devient un moment précieux pour prendre soin de soi.
               </p>

              <p>Cette approche unique et complète permet non seulement de lisser progressivement les rides, de redéfinir et sculpter les contours du visage, mais aussi d’équilibrer les expressions, de libérer les tensions accumulées et de retrouver une harmonie naturelle qui révèle toute la beauté intérieure et l’éclat lumineux du visage.
               </p>
              
               <Link to="/a-propos" className="btn-more align-self-start">Faire connaissance <img src={arrow} alt="précédent" className={styles.iconArrow}/></Link>
          </Col> 

      
      </Row>
    </Container>
  );
};

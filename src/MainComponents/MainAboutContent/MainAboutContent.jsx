import styles from "./MainAboutContent.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import womanabout from "../../Assets/face11.jpg";
import arrow from "../../Assets/arrow-icon.svg";
import { Link } from "react-router-dom";

//скорректировать текст - дублирующийся p

export const MainAboutContent = () => {
  return (
    <Container className="section-wrapper-first">
      <h2 className="text-center">À propos de la méthode</h2>
      <Row  className="wrapper gy-4 gy-lg-0">
        <Col lg={6} className="d-flex flex-column justify-content-center">
          <img
            src={womanabout}
            alt="Portrait de Natalia"
            className={`img-fluid rounded-circle ${styles.imgAbout}`}
          />
        </Col>


          <Col lg={6} className="d-flex flex-column justify-content-center">        
               <p>Bienvenue, je suis Natalia, coach passionnée en Face Fitness et Face Yoga.<br/>
               Mon approche douce et personnalisée agit directement sur les muscles du visage pour répondre à vos besoins spécifiques.<br/>
                 Elle permet de relâcher les tensions accumulées au quotidien, de préparer sereinement vos prises de parole et d’améliorer votre présence.
                 Elle vous aide à booster naturellement votre énergie grâce à des exercices revitalisants, à transformer durablement vos habitudes mimétiques néfastes, à lisser les rides et à apaiser les crispations responsables du vieillissement prématuré. 
                 Elle stimule aussi efficacement la circulation sanguine et lymphatique, pour une peau plus éclatante.
               <br/>
               Chaque séance devient un moment précieux de reconnexion avec vous-même, révélant progressivement un visage tonifié, harmonieux et rayonnant de vitalité.
               Plus qu’une méthode esthétique, c’est une véritable expérience qui révèle votre beauté authentique, de l’intérieur vers l’extérieur.
               </p>

                      <Link to="/a-propos" className="btn-more align-self-start">
               <strong className={styles.boldText}>Faire connaissance</strong>
           <img src={arrow} alt="précédent" className={`${styles.iconArrow} ${styles.arrowSpacing}`}/></Link>
          </Col> 

      </Row>
    </Container>
  );
};
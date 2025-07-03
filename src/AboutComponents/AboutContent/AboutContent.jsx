import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutOne from '../../Assets/AboutOne.jpg';
import aboutTwo from '../../Assets/aboutTwo.jpg';
import aboutThree from '../../Assets/aboutThree.jpg';
import styles from "./AboutContent.module.scss";

export const AboutContent = () => {
  return (
    <Container className="mt-5 gap-2 d-flex flex-column">
      <Row>
        <Col md={6} className="order-2 order-md-1"><img src={aboutOne} alt="" className={styles.imageFull} /></Col>
        <Col md={6} className="order-1 order-md-2 d-flex align-items-center">
        <p className="mb-0 w-100">En face fitness depuis trois ans, j'ai le plaisir d'accompagner des personnes dans leur quête d'un visage tonifié et rayonnant. Ma passion pour le bien-être du visage m'a conduite à me certifier en face yoga et face fitness et à maîtriser les étirements spécifiques des muscles faciaux. Cette expertise, enrichie par une connaissance approfondie de l'anatomie faciale, me permet de vous proposer des programmes sur mesure, adaptés à vos besoins et objectifs.</p>
        
        </Col>
      </Row>
      <Row> 
        <Col xs={12} md={6} className="d-flex align-items-center"><p className="mb-0 w-100">Passionnée par le bien-être et la beauté naturelle, j’utilise une méthode unique qui allie tonicité, relaxation et correction des tensions faciales. Mon objectif est d’aider chaque personne à retrouver un visage plus détendu, plus lumineux et plus harmonieux, sans chirurgie ni injections.</p></Col>
        <Col xs={12} md={6}><img src={aboutTwo} alt="" className={styles.imageFull} /></Col>
      </Row>

      <Row>
        <Col md={6} className="order-2 order-md-1"><img src={aboutThree} alt="" className={styles.imageFull} /></Col>
        <Col md={6} className="order-1 order-md-2 d-flex align-items-center"><p className="mb-0 w-100">Mon approche est avant tout humaine et bienveillante. Je crée un espace d'apprentissage convivial où chaque séance devient un moment privilégié de détente et de découverte de soi. Ensemble, nous travaillerons main dans la main pour révéler votre éclat naturel, tout en respectant votre rythme et vos aspirations.</p>
</Col>
      </Row>
    </Container>
  );
}
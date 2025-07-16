import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./ErrorContent.module.scss";
import BienEtre from "../Assets/BienEtre.svg";

export const ErrorContent = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <Row className="justify-content-center align-items-center text-center text-md-start gx-5">
        <Col
          md="auto"
          className="d-flex justify-content-center align-items-center"
        >
          <h5 className={`${styles.error} d-flex align-items-center gap-3 m-0`}>
            4
            <span>
              <img src={BienEtre} alt="BienEtre" />
            </span>
            4
          </h5>
        </Col>

        <Col md={6}>
          <p className="mb-4">
            Il est possible que vous ayez tenté de charger une page qui n’existe
            pas, a été déplacée ou supprimée. Veuillez utiliser le menu de
            navigation ou revenir à la page d’accueil du site.
          </p>
          <button className="btn-main" onClick={() => navigate("/")}>
            Retour à l’accueil
          </button>
        </Col>
      </Row>
    </Container>
  );
};

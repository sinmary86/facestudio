import { Col, Container, Row } from "react-bootstrap";
import WhatsappIcon from "../Assets/whatsapp-icon.svg";
import EmailIcon from "../Assets/email-icon.svg";
import LinkedInIcon from "../Assets/linkedin-icon.svg";
import TelegramIcon from "../Assets/telegram-icon.svg";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export const FooterApp = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6} className="mb-3 mb-md-6">
            <h6>
              &copy; NK Facestudio{" "}
              <span>
                {" "}
                {currentYear === 2025 ? "2025" : `2025–${currentYear}`}
              </span>
            </h6>
          </Col>

          <Col
            md={6}
            className="d-flex justify-content-center justify-content-md-end gap-3 mb-3 mb-md-6"
          >
            <a
              href="https://wa.me/33621755222"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <img src={WhatsappIcon} alt="WhatsApp" className={styles.icon} />
            </a>

            <a
              href="http://www.linkedin.com/in/natalia-kovaleva-552901159"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={LinkedInIcon} alt="WhatsApp" className={styles.icon} />
            </a>

            <a
              href="mailto:nk.facestudio@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <img src={EmailIcon} alt="Email" className={styles.icon} />
            </a>

            <a
              href="https://t.me/boost/visagepanouinatalia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <img src={TelegramIcon} alt="Telegram" className={styles.icon} />
            </a>
          </Col>
        </Row>

        <Row className="justify-content-center text-center gap-1 gap-md-4">
          <Col xs={12} md="auto" className="mb-0">
            <Link
              to="/mentions-legales"
              className={`text-decoration-none text-muted ${styles.footerLink}`}
            >
              <h6>Mentions légales</h6>
            </Link>
          </Col>

          <Col xs={12} md="auto" className="mb-0">
            <Link
              to="/conditions-generales-de-vente"
              className={`text-decoration-none text-muted ${styles.footerLink}`}
            >
              <h6>Conditions Générales de Vente</h6>
            </Link>
          </Col>

          <Col xs={12} md="auto" className="mb-0">
            <Link
              to="/politique-de-confidentialite"
              className={`text-decoration-none text-muted ${styles.footerLink}`}
            >
              <h6>Politique de confidentialité</h6>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

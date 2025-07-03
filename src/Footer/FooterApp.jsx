import { Col, Container, Row } from "react-bootstrap";
import WhatsappIcon from '../Assets/whatsappIcon.svg';
import EmailIcon from '../Assets/mailIcon.svg';
import LinkedInIcon from '../Assets/linkedin1.svg';
import TelegramIcon from '../Assets/telegram.svg';
import styles from './Footer.module.scss';
import { Link } from "react-router-dom";



export const FooterApp = () => {

    const currentYear = new Date().getFullYear();

    return(
        
        <footer className={styles.footerContainer}>
         <Container>

          <div className={styles.separator}></div>
            
   
          <Row className="align-items-center text-center text-md-start mb-1 b-md-6">
          <Col md={6} className="mb-3 mb-md-6">
                <h6>&copy;  NK Facestudio <span>  {currentYear === 2025 ? '2025' : `2025–${currentYear}`}</span>
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
                    aria-label="WhatsApp">
                 <img src={WhatsappIcon} alt="WhatsApp" className={styles.icon}/>
            </a>

            <a 
                href="http://www.linkedin.com/in/natalia-kovaleva-552901159" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                 <img src={LinkedInIcon} alt="WhatsApp" className={styles.icon}/>
            </a>

                <a 
                    href="mailto:nk.facestudio@gmail.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email">
                 <img src={EmailIcon} alt="Email" className={styles.icon}/>
                </a>
                    
                    <a 
                        href="https://t.me/boost/visagepanouinatalia" 
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram">
                 <img src={TelegramIcon} alt="Telegram" className={styles.icon}/>
                </a>
          </Col>
        </Row>

        <Row className="justify-content-center text-center gap-2 gap-md-4">
            <Col xs={12} md="auto" className="mb-2 mb-md-0">
            
              <Link to="/mentions-legales" className={`text-decoration-none text-muted ${styles.footerLink}`}>
                Mentions légales
              </Link>
              
              </Col>
              
              
              <Col xs={12} md="auto" className="mb-2 mb-md-0">
               <Link to="/conditions-generales-de-vente" className={`text-decoration-none text-muted ${styles.footerLink}`}>
                Conditions Générales de Vente
              </Link></Col>

              <Col xs={12} md="auto" className="mb-2 mb-md-0">
              
              <Link to="/politique-de-confidentialite" className={`text-decoration-none text-muted ${styles.footerLink}`}>
                Politique de confidentialité
              </Link>
            </Col>
        </Row>

      </Container>
  </footer>
  );
};
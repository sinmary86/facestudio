import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import styles from './NavApp.module.scss';
import { Container } from 'react-bootstrap';

//TODO - нужно ли заменить brand на лого 

export const NavApp = () => {
  return (   
    <Navbar expand={false} className={styles.navbarCustom}>

      <Container>
          
            <Navbar.Brand as={Link} to="/">NK Facestudio</Navbar.Brand>

            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              className={styles.offcanvas}
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className={`justify-content-end flex-grow-1 pe-3 ${styles.navLinks}`}>
                  <Nav.Link as={Link} to="/">Accueil</Nav.Link>
                  <Nav.Link as={Link} to="/a-propos">A propos</Nav.Link>
                  <NavDropdown title="Services" id="offcanvasNavbarDropdown">    
                    <NavDropdown.Item  as={Link} to="/services/accompagnement-individuel">Accompagnement Individuel</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/services/cours-en-groupe">Cours en Groupe</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/services/offres-entreprises">Offres pour les Entreprises</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/services/ateliers-formations">Ateliers & Formations</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                  <Nav.Link as={Link} to="/contacts">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Container>
        </Navbar>
  );
};
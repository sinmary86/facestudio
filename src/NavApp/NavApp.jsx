import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './NavApp.module.scss';

//TODO - добавить навигацию вместо action 
//TODO - нужно ли заменить brand на лого 

export const NavApp = () => {
  return (
    <>
    
    <Navbar expand={false} className={styles.navbarCustom}>
          <Container fluid>
            <Navbar.Brand href="#">NK Facestudio</Navbar.Brand>

            <Navbar.Toggle aria-controls="offcanvasNavbar" className={styles.toggler} />
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
                  <Nav.Link href="#action1">Accueil</Nav.Link>
                  <Nav.Link href="#action2">A propos</Nav.Link>
                  <NavDropdown
                    title="Services"
                    id="offcanvasNavbarDropdown"
                    className={styles.dropdown}
                  >
                    <NavDropdown.Item href="#action3">Accompagnement Individuel</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Cours en Groupe</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Offres pour les Entreprises</NavDropdown.Item>
                    <NavDropdown.Item href="#action6">Ateliers & Formations</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action7">Copie de Services</Nav.Link>
                  <Nav.Link href="#action8">FAQ</Nav.Link>
                  <Nav.Link href="#action9">Contact</Nav.Link>
                </Nav>
               

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
};
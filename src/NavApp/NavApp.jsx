import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import styles from "./NavApp.module.scss";
import { Container } from "react-bootstrap";
import { useState } from "react";
import burger from "../Assets/burger-icon.svg";


export const NavApp = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);

  return (
    <Navbar expand={false} sticky="top" className={styles.navbarCustom}>
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={handleClose}
          className={styles.brand}
        >
          NK Facestudio
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={() => setShowOffcanvas(true)}
        >
          <img src={burger} alt="burger nav" />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          show={showOffcanvas}
          onHide={handleClose}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className={styles.offcanvas}
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className={`justify-content-end flex-grow-1 pe-3 ${styles.navLinks}`}
            >
              <Nav.Link as={Link} to="/" onClick={handleClose}>
                Accueil
              </Nav.Link>
              <Nav.Link as={Link} to="/a-propos" onClick={handleClose}>
                A propos
              </Nav.Link>
              <NavDropdown title="Services" id="offcanvasNavbarDropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/services/accompagnement-individuel"
                  onClick={handleClose}
                >
                  Accompagnement Individuel
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/services/cours-en-groupe"
                  onClick={handleClose}
                >
                  Cours en Groupe
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/services/offres-entreprises"
                  onClick={handleClose}
                >
                  Offres pour les Entreprises
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/services/ateliers-formations"
                  onClick={handleClose}
                >
                  Ateliers & Formations
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/faq" onClick={handleClose}>
                FAQ & Avis
              </Nav.Link>
              <Nav.Link as={Link} to="/contacts" onClick={handleClose}>
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

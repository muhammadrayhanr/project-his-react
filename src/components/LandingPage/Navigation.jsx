import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./images/logo-navbar.png" alt="Logo HIS" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navbar-link" href="#beranda">
              Beranda <i className="bi bi-house" />
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#tentang">
              Tentang <i className="bi bi-people" />
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#fitur">
              Fitur <i className="bi bi-menu-button-wide" />{' '}
            </Nav.Link>
            <Nav.Link className="navbar-link" href="#kontak">
              Kontak <i className="bi bi-person-rolodex" />
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <NavLink to="/login">
              <button>
                <span>
                  Masuk <i className="bi bi-box-arrow-in-right" />
                </span>
              </button>
            </NavLink>
          </span>
        </Navbar.Collapse>
        <div className="theme-toggle">
          <i className="bi bi-moon-fill" />
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;

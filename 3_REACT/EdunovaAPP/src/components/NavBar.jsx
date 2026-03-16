import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { IME_APLIKACIJE, RouteNames } from "../constants"; // Added RouteNames
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of Navigate

export default function NavBar() {
  const navigate = useNavigate(); // Initialize the navigation function

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Using a function to navigate on brand click */}
        <Navbar.Brand 
          style={{ cursor: 'pointer' }} 
          onClick={() => navigate(RouteNames.HOME)}
        >
          {IME_APLIKACIJE}
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate(RouteNames.HOME)}>
              Početna
            </Nav.Link>
            
            <NavDropdown title="Izbornik" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate(RouteNames.SMJEROVI)}>
                Smjerovi
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/EdwardTilhof" target="_blank">
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
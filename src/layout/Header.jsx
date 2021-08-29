import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "../App.css";

const Header = () => {
  const history = useHistory();

  const logMeOut = () => {
    history.push("/");
  };

  return (
    <div>
      <Navbar bg="info" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand to="#home">TICKET_CRM</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link to="/dashboard" className="link">
                Dashboard
              </Link>
              <Link to="/tickets" className="link">
                Tickets
              </Link>
              <Link onClick={logMeOut} className="link">
                Logout
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

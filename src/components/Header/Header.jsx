import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import { getCurrentUserData } from "../../services/firebase/db";

function Header() {

  const [name, setName] = useState("Stranger");

  const [role, setRole] = useState("");

  const { user } = useAuth();

  const { logout } = useAuth();

  const navigate = useNavigate();
  
  useEffect(() => {
    const getData = async () => {
      try { 
        const { name, role } = await getCurrentUserData();
        setName(name);
        setRole(role);
      } catch(error) {
        console.log(error);
      }
    }
    getData();
  }, [user]);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Money 4 Kids</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            { role === "parent" ? <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> : <></>}
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            { role === "child" ? <Nav.Link as={Link} to="/modules">Learning Modules</Nav.Link> : <></>}
            { role === "child" ? <Nav.Link as={Link} to="/childDash">Dashboard</Nav.Link> : <></>}
          </Nav>
          <NavDropdown title={name !== "Empty" ? `Hello, ${name}!` : "Welcome!"} id="basic-nav-dropdown">
            { user ? 
              <>
                <NavDropdown.Item href="/settings">Account Settings</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => { logout(); window.location.reload(); }}>Log Out</NavDropdown.Item>
              </>
              :
              <>
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="signup">Sign Up</NavDropdown.Item>
              </>
            }
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

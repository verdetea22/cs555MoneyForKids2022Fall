import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import { getCurrentUserData } from "../../services/firebase/db";

function Header() {

  const [name, setName] = useState("Empty");

  const [role, setRole] = useState("");

  const { user } = useAuth();

  const { logout } = useAuth();
  
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
        <Navbar.Brand href="#home">Money 4 Kids</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            { role === "parent" ? <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> : <></>}
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link  as={Link} to="/signup">Sign Up</Nav.Link>
            { role === "child" ? <Nav.Link as={Link} to="/modules">Learning Modules</Nav.Link> : <></>}
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            {user ? <Nav.Link as={Link} to="/settings">Account Settings</Nav.Link> : <></>}
            <Nav.Link href="#" onClick={() => { logout(); window.location.href = "/"; }}>Log Out</Nav.Link>
            
          </Nav>
          <p>{`Hello, ${name}`}</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

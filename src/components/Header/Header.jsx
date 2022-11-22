import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "../../contexts/AuthContext";
import { logout } from "../../services/firebase/auth";
import { getCurrentUserData } from "../../services/firebase/db";

function Header() {

  const [name, setName] = useState("Empty");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [role, setRole] = useState("");

  const { logout } = useAuth();
  
  useEffect(() => {
    const getData = async () => {
      try { 
        const { name, role } = await getCurrentUserData();
        setIsLoggedIn(true);
        setName(name);
        setRole(role);
      } catch(error) {
        console.log(error);
        setIsLoggedIn(false);
      }
    }
    getData();
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Money 4 Kids</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            { role === "parent" ? <Nav.Link href="/Dashboard">Dashboard</Nav.Link> : <></>}
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/SignUp">Sign Up</Nav.Link>
            { role === "child" ? <Nav.Link href="/Modules">Learning Modules</Nav.Link> : <></>}
            <Nav.Link href="/Login">Login</Nav.Link>
            {isLoggedIn ? <Nav.Link href="/Settings">Account Settings</Nav.Link> : <></>}
            <Nav.Link href="#" onClick={() => { logout(); window.location.href = "/"; }}>Log Out</Nav.Link>
            
          </Nav>
          <p>{`Hello, ${name}`}</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

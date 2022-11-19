import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { logout } from "../../services/firebase/auth";
import { getParentData, getUser } from "../../services/firebase/db";

function Header() {

  const [name, setName] = useState("Empty");
  
  useEffect(() => {
    const getData = async () => {
      try { 
        const { name } = await getParentData();
        setName(name);
      } catch(error) {
        console.log(error);
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
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/SignUp">Sign Up</Nav.Link>
            <Nav.Link href="/Modules">Learning Modules</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Settings">Account Settings</Nav.Link>
            <Nav.Link href="#" onClick={() => { logout(); window.location.href = "/"; }}>Log Out</Nav.Link>
            
          </Nav>
          <p>{`Hello, ${name}`}</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

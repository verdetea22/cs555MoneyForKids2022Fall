import React, { useState } from "react";
import { Card, Dropdown } from "react-bootstrap";
import ChildLoginForm from "../../components/Auth/ChildLoginForm";
import ParentLoginForm from "../../components/Auth/ParentLoginForm";

import { login } from "../../services/firebase/auth";


const Login = () => {

  const [loginType, setLoginType] = useState("parent");
  

  const handleParentLogin = ({ email, password }) => {
    login({ email, password }).then((res) => {
      window.location.href = "/";
    }).catch((error) => {
        console.log(error);
    });
  }

  const handleChildLogin = ({ username, password }) => {
    try {
      
    } catch (error) {
      console.log(error);
    }
  };

  const [form, setForm] = useState(<ParentLoginForm onSubmit={handleParentLogin} />);

  const handleLoginType = (eventKey) => {
    if (eventKey === "parent") {
      setForm(<ParentLoginForm onSubmit={handleParentLogin} />);
    } else if (eventKey === "child") {
      setForm(<ChildLoginForm onSubmit={handleChildLogin} />);
    }

    setLoginType(eventKey);
  };

  return (
    <div className="mt-5">
      <Card className="w-50 m-auto">
        <Card.Header>
          <Dropdown onSelect={handleLoginType}>
            <Dropdown.Toggle>Are you a ...?</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="parent">Parent</Dropdown.Item>
              <Dropdown.Item eventKey="child">Child</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </Card.Header>
        <Card.Body>
          <h3 className="ms-5">Login in as a {loginType}</h3>
          {form}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;

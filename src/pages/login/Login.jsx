import React, { useState } from "react";
import { Card, Dropdown } from "react-bootstrap";
import ChildLoginForm from "../../components/Auth/ChildLoginForm";
import ParentLoginForm from "../../components/Auth/ParentLoginForm";
import { useAuth } from "../../contexts/AuthContext";
import { createChildAccount, deleteRequest, findRequestByCredentials } from "../../services/firebase/db";

import { useLocation, useNavigate } from "react-router-dom";
import ErrorLabel from "../../components/Error/ErrorLabel";
const Login = () => {

  const [loginType, setLoginType] = useState("parent");
  const { login } = useAuth();

  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let location = useLocation();

  let from = "";

  if (location.state && location.state.from && location.state.from.pathname) {
    from = location.state.from.pathname;
  } else {
    from = "/";
  }

  const navigate = useNavigate();

  const handleParentLogin = async ({ email, password }) => {
    try { 
      await login(email, password);
      navigate(from, { replace: true });
    } catch (error) {

      if (error.code === "auth/user-not-found") {
        setErrorMessage("User is not a sign up!");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("The password is incorrect!");
      } else {
        setErrorMessage("Something went wrong with login!");
      }

      console.log(error.code);
      setShow(true);
      
    }
  }

  const handleChildLogin = async ({ username, password }) => {
    try {
      
      const result = await findRequestByCredentials({ username, password});
      if (result === undefined) {
        
        await login(`${username}@email.com`, password);
        navigate(from, { replace: true });
      } else {

        const { name, password, balance, parentId, username, id } = result;
        await createChildAccount(name, username, password, balance, parentId);
        await deleteRequest(id);
        navigate(from, { replace: true });
      }
     
    } catch (error) {

      if (error.code === "auth/invalid-email") {
        setErrorMessage("Invalid username!");
      } else if (error.code === "auth/user-not-found") {
        setErrorMessage("User is not a sign up!");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("The password is incorrect!");
      } else {
        setErrorMessage("Something went wrong with login!");
      }

      setShow(true);

      console.log(error.code);

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
          <Dropdown drop="end" onSelect={handleLoginType} className="ms-5">
            <Dropdown.Toggle>Are you a ...?</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="parent">Parent</Dropdown.Item>
              <Dropdown.Item eventKey="child">Child</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </Card.Header>
        <Card.Body>
        
          <h3 className="ms-5">Login in as a {loginType}</h3>
          <ErrorLabel className="mx-5" show={show} message={errorMessage} onClick={() => setShow(false)} />
          {form}
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;

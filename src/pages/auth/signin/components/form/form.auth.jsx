import React, { useState } from "react";

import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


import ButtonMain from "../../../../../ui/buttons/button.main";
import "./form.css";
const FormAuth = () => {
  let navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const authorization = (event) => {
    event.preventDefault();
    console.log(login, password);
    setLogin("");
    setPassword("");
    setLoading(!loading);
    setTimeout(() => {
      setLoading(!loading);
      navigate("/user/inbox");
    }, 1000);
  };

  return (
    <div className="formAuth">
      <h2>Sign In</h2>
      <Form className="mt-4">
        <div className="login mb-3  ">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            aria-describedby="loginInputMessage"
            id="loginInput"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <Form.Text id="loginInputMessage"> Email must be unique </Form.Text>
        </div>
        <div className="password mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            aria-describedby="passwordInputMessage"
            id="passwordInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Text id="passwordInputMessage">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </div>
        <div className="sendForm">
          <ButtonMain text={'Login'} loading={loading} onClick={authorization}  />
        </div>
      </Form>
    </div>
  );
};

export default FormAuth;

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'



import ButtonMain from "../../../../../ui/buttons/button.main";
import "./form.css";
const FormRegistration = () => {


  let navigate = useNavigate()
  const [name , setName] = useState('')
  const [surname,setSurname] = useState('')
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)


  const registration = (event) => {
    event.preventDefault();
    console.log(login, password);
    setName('')
    setSurname('')
    setLogin("");
    setPassword("");
    setLoading(!loading)
    setTimeout(() => {
      setLoading(!loading)
      navigate('/')
    }, 1000);
  };


  return (
    <div className="formRegistration">
      <h2>Sign Up</h2>
      <Form className="mt-4">
      <div className="name mb-3  ">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            aria-describedby="nameInputMessage"
            id="loginInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Text id="nameInputMessage"> Name required field  </Form.Text>
        </div>
        <div className="surname mb-3  ">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            aria-describedby="NameInputMessage"
            id="loginInput"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <Form.Text id="NameInputMessage"> Surname required field </Form.Text>
        </div>
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
          <ButtonMain text={'Sign In'} loading={loading} onClick={registration} />
        </div>
      </Form>
    </div>
  );
};

export default FormRegistration;

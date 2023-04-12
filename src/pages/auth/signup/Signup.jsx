import React from "react";
import FormRegistration from "./components/form/form.registration";
import {Link} from 'react-router-dom'
import "./signup.css";
const Signup = () => {
  return (
    <div className="signup mt-5">
      <div className=" form d-flex justify-content-center  ">
        <FormRegistration />
      </div>
      <div className="informationInput  mt-5 ">
        <p>
          Уже есть аккаунта? <Link to={"/"}>Войти</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

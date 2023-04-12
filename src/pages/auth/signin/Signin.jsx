import React from "react";
import FormAuth from "./components/form/form.auth";
import { Link } from "react-router-dom";
import './signin.css'
const Signin = () => {
  return (
    <div className="signin mt-5 ">
      <div className=" form d-flex justify-content-center  ">
        <FormAuth />
      </div>
      <div className="informationInput  mt-5 ">
        <p>
          Нет аккаунта? <Link to={'/signup'}>Зарегестрироваться</Link>
        </p>
        <p>Забыли пароль?<Link to={''}>Восстановить</Link></p>
      </div>
    </div>
  );
};

export default Signin;

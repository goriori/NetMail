import React, { useState, useRef, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./mail.css";
const Mail = ({ activeAll }) => {
  const mail = useRef();
  const [visibility, setVisibility] = useState(false);

  const chek = useRef();

  const changeCheked = () => {
    console.log("changechek");
    chek.current.checked = activeAll;
    console.log(chek.current.checked);
  };

  useEffect(() => {
    changeCheked();
  }, [activeAll]);

  return (
    <div
      ref={mail}
      className="mail d-flex justify-content-between align-items-center p-2"
      onMouseOver={() => setVisibility(true)}
      onMouseOut={() => setVisibility(false)}
    >
      <div className="leftData d-flex   ">
        <Form.Check type="checkbox" ref={chek} />
        <span className="favorite material-symbols-outlined ms-3 ">star</span>
        <strong className="ms-3">Title Letter</strong>
      </div>

      <Link to={"/user/letter"}>
        <div className="centerData">
          Что важно для трудоустройства AI-разработчика Требования к
          AI-разработчикам отличаются от требований в других сферах
          программирования. Рассказываем, чего хотят работодатели.
        </div>
      </Link>

      <div className="rightData ">
        {visibility === false ? (
          <div className="time_letter ">12:33</div>
        ) : (
          <div className="icon_action_letter d-flex  ">
            <span className="material-symbols-outlined">delete</span>
            <span className="material-symbols-outlined ms-3 ">archive</span>
            <span className="material-symbols-outlined ms-3">mail</span>
            <span className="material-symbols-outlined ms-3">schedule</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mail;

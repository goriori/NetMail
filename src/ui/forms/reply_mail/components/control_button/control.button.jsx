import React from "react";
import {  Button } from "react-bootstrap";

const ControlButton = ({sendClick}) => {
  return (
    <div className=" d-flex justify-content-start align-items-center mt-4">
      <Button className="rounded-pill" onClick={}>
        Ответить
      </Button>
      <Button className="ms-3 rounded-pill">Переслать</Button>
    </div>
  );
};
export default ControlButton
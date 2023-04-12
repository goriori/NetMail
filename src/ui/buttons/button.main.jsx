import React from "react";
import { Button, Spinner } from "react-bootstrap";

import './button.main.css'
const ButtonMain = ({ text, loading , onClick }) => {
  let content = text;
  loading === false ? content : (content = <Spinner animation="border" />);
  return <Button className="button_main mw-50 " variant="outline-primary" onClick={onClick}>{content}</Button>;
};
 
export default ButtonMain;

import React from "react";
import { Button } from "react-bootstrap";
const MailSend = () => {
  return (
    <div className="left d-flex ">
      <Button>Отправить</Button>
      <div className="send_actions d-flex  align-items-center ms-3">
        <span className="material-symbols-outlined">image</span>
        <span className="material-symbols-outlined ms-2">attach_file</span>
        <span className="material-symbols-outlined ms-2">link</span>
        <span className="material-symbols-outlined ms-2">
          sentiment_satisfied
        </span>
        <span className="material-symbols-outlined ms-2">add_to_drive</span>
        <span className="material-symbols-outlined ms-2">lock</span>
        <span className="material-symbols-outlined ms-2">more_vert</span>
      </div>
    </div>
  );
};

export default MailSend

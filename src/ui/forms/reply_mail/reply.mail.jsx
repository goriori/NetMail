import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./reply.mail.css";
const ReplyMail = () => {
  const [replyActive, setReplyActive] = useState(false);

  return (
    <div className="reply_mail rounded  mt-4 ">
      {!replyActive ? (
        <div className=" d-flex justify-content-start align-items-center mt-4">
          <Button className="rounded-pill" onClick={() => setReplyActive(true)}>
            Ответить
          </Button>
          <Button className="ms-3 rounded-pill">Переслать</Button>
        </div>
      ) : (
        <div className="bg-dark rounded p-5">
          <div className="action_panel d-flex">
            <span className="material-symbols-outlined">reply</span>
            <p className="ms-2">NameCompany Send</p>
          </div>
          <div className="form_data mt-2">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Form>
          </div>
          <div className="mail_send d-flex  align-items-center justify-content-between">
            <div className="left d-flex ">
              <Button>Отправить</Button>
              <div className="send_actions d-flex  align-items-center ms-3">
                <span className="material-symbols-outlined">image</span>
                <span className="material-symbols-outlined ms-2">
                  attach_file
                </span>
                <span className="material-symbols-outlined ms-2">link</span>
                <span className="material-symbols-outlined ms-2">
                  sentiment_satisfied
                </span>
                <span className="material-symbols-outlined ms-2">
                  add_to_drive
                </span>
                <span className="material-symbols-outlined ms-2">lock</span>
                <span className="material-symbols-outlined ms-2">
                  more_vert
                </span>
              </div>
            </div>
            <div className="right">
              <span
                className="material-symbols-outlined"
                onClick={() => setReplyActive(false)}
              >
                delete
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReplyMail;

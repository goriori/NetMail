import React from "react";
import { Form, Button } from "react-bootstrap";
import ActionReply from "./actions/actions";
import MailSend from "./mail_send/mail.send";
import Delete from "../../../../icons/delete/delete";
const FormReply = ({ deleteSend }) => {
  return (
    <div className="bg-dark rounded p-5">
      <ActionReply />
      <div className="form_data mt-2">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
        </Form>
      </div>
      <div className="mail_send d-flex  align-items-center justify-content-between">
        <MailSend />
        <Delete handler={deleteSend}/>
      </div>
    </div>
  );
};

export default FormReply;

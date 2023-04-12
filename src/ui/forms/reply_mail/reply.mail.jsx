import React, { useState } from "react";
import ControlButton from "./components/control_button/control.button";
import FormReply from "./components/form/form.reply";
import "./reply.mail.css";
const ReplyMail = () => {
  const [replyActive, setReplyActive] = useState(false);

  return (
    <div className="reply_mail rounded  mt-4 ">
      {!replyActive ? (
        <ControlButton sendClick={() => setReplyActive(true)} />
      ) : (
       <FormReply deleteSend={()=> setReplyActive(false)} />
      )}
    </div>
  );
};

export default ReplyMail;

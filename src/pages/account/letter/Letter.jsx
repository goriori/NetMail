import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import Author from "./components/author/author";
import LetterAction from "./components/letter_action/letter.action";
import Panel from "./components/panel/panel";
import ReplyMail from "../../../ui/forms/reply_mail/reply.mail";
import { Button } from "react-bootstrap";
import "./letter.css";
const Letter = () => {
  const [replyActive, setReplyActive] = useState(false);
  return (
    <div className="letter p-5">
      <div className="content">
        <div className="navigate">
          <Navbar />
        </div>
        <div className="box_mails p-5 ms-5">
          <Panel />
          <div className="letter">
            <h3>Новые вакансии</h3>
            <div className="action d-flex justify-content-between mt-4">
              <Author />
              <LetterAction />
            </div>
            <div className="information_letter rounded  bg-secondary d-flex justify-content-center p-2 ">
              <div className="content_letter rounded bg-dark p-5">
                <h3>Подходящие вакансии</h3>
                <p>
                  Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                  вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                  текстов на латинице с начала XVI века. В то время некий
                  безымянный печатник создал большую коллекцию размеров и форм
                  шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem
                  Ipsum не только успешно пережил без заметных изменений пять
                  веков, но и перешагнул в электронный дизайн. Его популяризации
                  в новое время послужили публикация листов Letraset с образцами
                  Lorem Ipsum в 60-х годах и, в более недавнее время, программы
                  электронной вёрстки типа Aldus PageMaker, в шаблонах которых
                  используется Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="letter_footer">
              
                <ReplyMail />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;

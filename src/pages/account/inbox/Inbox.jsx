import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Tabs from "./components/tabs/tabs";
import Mail from "./components/mail/mail";
import Actions from "./components/actions/actions";
import ProgressDisk from "./components/progress/progress";
import "./inbox.css";

const Inbox = () => {
  const [activeAll, setActiveAll] = useState(false);
  const onActiveAll = () => {
    setActiveAll(!activeAll);
  };

  useEffect(() => {
    console.log("change");
  }, [activeAll]);
  const mail = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  return (
    <div className="inbox p-5">
      <div className="top_panel">TopPanel</div>
      <div className="content">
        <div className="navigate">
          <Navbar />
        </div>
        <div className="box_mails p-5 ms-5">
          <div className="settings">
            <Actions activeAll={activeAll} onActiveAll={onActiveAll} />
            <Tabs />
            <hr />
          </div>
          <div className="letters">
            {mail.map((i) => {
              return <Mail key={i} activeAll={activeAll} />;
            })}
            <div className="information d-flex justify-content-between align-items-center p-2">
              <ProgressDisk />
              <div className="help_info">
                <a href="">Условия использования </a>
                <a href="">Конфиденциальность </a>
                <a href="">Правила программы</a>
              </div>
              <div className="user_active_info text-end ">
                Последнияя активность 12 часов назад
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;

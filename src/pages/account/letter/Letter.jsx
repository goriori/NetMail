import React  from "react";
import Navbar from "../components/navbar/navbar";
import Author from "./components/author/author";
import LetterAction from "./components/letter_action/letter.action";
import Panel from "./components/panel/panel";
import './letter.css'
const Letter = () => {
    
  return (
    <div className="letter p-5">
      <div className="content">
        <div className="navigate">
          <Navbar />
        </div>
        <div className="box_mails p-5 ms-5">
          <Panel/>
          <div className="letters">
            <h3>Новые вакансии</h3>
            <div className="action d-flex justify-content-between">
              <Author />
              <LetterAction />
            </div>
            <div className="information_letter rounded  bg-secondary d-flex justify-content-center p-2 ">
              <div className="content_letter rounded bg-dark p-5">
                <p>Подходящие вакансии</p>

              </div>
            </div>

            <p>Новый низ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;

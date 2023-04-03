import React from "react";
import Navbar from "../components/navbar/navbar";
import { Form } from "react-bootstrap";


import Actions from "./components/actions/actions";
import "./inbox.css";
const Inbox = () => {
  return (
    <div className="inbox p-5">
      <div className="top_panel">TopPanel</div>
      <div className="content">
        <div className="navigate">
          <Navbar />
        </div>
        <div className="box_mails p-5 ms-5">
          <div className="settings">
            <Actions/>
            <hr />
          </div>
          <div className="letters">letters</div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;

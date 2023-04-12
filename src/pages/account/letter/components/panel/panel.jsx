import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Actions from "./components/actions/actions";


import './panel.css'
const Panel = () => {
  const [lang, setLang] = useState("Русский");
  const langs = ["Русский", "English", "China"];
  return (
    <div className="panel d-flex justify-content-between mb-5  ">
      <Actions/>
      <div className="right d-flex align-items-center">
        <div>2 из 100</div>
        <div className="move ms-2 ">
          <span className="material-symbols-outlined p-1">chevron_left</span>
          <span className="material-symbols-outlined p-1">chevron_right</span>
        </div>
        <div className="languages text-center ms-2 ">
          <DropdownButton id="dropdown-basic-button" title={lang}>
            {langs.map((item, index) => (
              <Dropdown.Item key={index} onClick={(e) => setLang(item)}>
                {item}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      </div>
    </div>
  );
};

export default Panel;

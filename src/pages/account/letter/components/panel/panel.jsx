import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Actions from "./components/actions/actions";
const Panel = () => {
  const [lang, setLang] = useState("Русский");
  const langs = ["Русский", "English", "China"];
  return (
    <div className="panel d-flex justify-content-between">
      <Actions/>
      <div className="right d-flex align-items-center">
        <div>2 из 100</div>
        <div className="move ">
          <span class="material-symbols-outlined">chevron_left</span>
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="languages text-center ">
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

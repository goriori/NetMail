import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./filter.css";
const Filter = () => {
  const [lang, setLang] = useState("Русский");
  const langs = ["Русский", "English", "China"];
  return (
    <div className="action_filter d-flex align-items-center">
      <div className="pagination_letter text-center p-2">50 из 1000</div>
      <div className="pagination_skip text-center d-flex p-2 ">
        <span className="material-symbols-outlined">chevron_left</span>
        <span className="material-symbols-outlined">chevron_right</span>
      </div>
      <div className="languages text-center">
        <DropdownButton id="dropdown-basic-button" title={lang}>
          {langs.map((item,index) => (
            <Dropdown.Item key={index} onClick={e=> setLang(item)}>{item}</Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </div>
  );
};

export default Filter;

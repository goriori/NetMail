import React from "react";
import "./tabs.css";
const Tabs = () => {
  return (
    <div className="tabs d-flex  justify-content-start mt-3 ">
      <div className="p-2 d-flex align-items-center">
        <span className="material-symbols-outlined">folder_special</span>
        <div className="ms-2">OneTabs</div>
      </div>
      <div className="p-2 d-flex align-items-center">
        <span className="material-symbols-outlined">folder_special</span>
        <div className="ms-2">TwoTabs</div>
      </div>
      <div className="p-2 d-flex align-items-center">
        <span className="material-symbols-outlined">folder_special</span>
        <div className="ms-2">ThreeTabs</div>
      </div>
    </div>
  );
};

export default Tabs;

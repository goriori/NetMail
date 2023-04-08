import React, { useRef, useState } from "react";
import "./tabs.css";
const Tabs = () => {
  const [active, setActive] = useState(false);
  const tab = useRef();
  const tabTwo = useRef();
  const tabThree = useRef();
  const [tabs, setTabs] = useState([
    {
      id: 1,
      titleTab: "OneTabs",
      ref: tab,
    },
    {
      id: 2,
      titleTab: "TwoTabs",
      ref: tabTwo,
    },
    {
      id: 3,
      titleTab: "ThreeTabs",
      ref: tabThree,
    },
  ]);

 

  const activeTab = (element) => {
    setActive(!active);
    console.log(element.current);
    active === false
      ? element.current.classList.remove("active")
      : element.current.classList.add("active");
  };

  return (
    <div className="tabs d-flex  justify-content-start mt-3 ">
      {tabs.map((i) => {
        return (
          <div
            ref={i.ref}
            key={i.id}
            className="p-2 d-flex align-items-center"
            onClick={() => {
              activeTab(i.ref);
            }}
          >
            <span className="material-symbols-outlined">folder_special</span>
            <div className="ms-2">{i.titleTab}</div>
          </div>
        );
      })}
      {/* <div
        ref={tab}
        className="p-2 d-flex align-items-center"
        onClick={() => {
          activeTab(tab);
        }}
      >
        <span className="material-symbols-outlined">folder_special</span>
        <div className="ms-2">OneTabs</div>
      </div>
      <div
        ref={tabTwo}
        className="p-2 d-flex align-items-center"
        onClick={() => {
          activeTab(tabTwo);
        }}
      >
        <span className="material-symbols-outlined">folder_special</span>
        <div className="ms-2">TwoTabs</div>
      </div>
      <div
        ref={tabThree}
        className="p-2 d-flex align-items-center"
        onClick={() => {
          activeTab(tabThree);
        }}
      >
        <span className="material-symbols-outlined">folder_special</span>
        <div className="ms-2">ThreeTabs</div>
      </div> */}
    </div>
  );
};

export default Tabs;

import React from "react";


import Choise from "./components/choise/choise";
import Filter from "./components/filter/filter";
import "./actions.css";
const Actions = ({activeAll, onActiveAll}) => {
  

  

  return (
    <div className="action_letters d-flex justify-content-between ">
      <Choise activeAll={activeAll} onActiveAll={onActiveAll}/>
      <Filter/>
    </div>
  );
};

export default Actions;

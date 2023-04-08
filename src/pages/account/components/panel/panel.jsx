import React, {useEffect, useState} from "react";
import Actions from "./actions/actions";
import Tabs from "./tabs/tabs";

const Panel = ({activeAll, onActiveAll}) => {
    
  return (
    <div className="panel">
      <Actions activeAll={activeAll} onActiveAll={onActiveAll} />
      <Tabs />
      <hr />
    </div>
  );
};

export default Panel;

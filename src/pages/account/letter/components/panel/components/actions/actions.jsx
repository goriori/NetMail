import React, { useState } from "react";
import MoreVert from "../../../../../../../ui/icons/more_vert/more.vert";
import "./actions.css";

const Actions = () => {
  

  return (
    <div className="left d-flex align-items-center justify-content-center">
      <div className="arrow_back">
        <span className="material-symbols-outlined p-1">arrow_back</span>
      </div>
      <div className="actions_letter ms-4 d-flex align-items-center justify-content-center">
        <span className="material-symbols-outlined p-1" >archive</span>
        <span className="material-symbols-outlined ms-2 p-1">info</span>
        <span className="material-symbols-outlined ms-2 p-1">delete</span>
        <span className="material-symbols-outlined ms-2 p-1">mail</span>
        <span className="material-symbols-outlined ms-2 p-1">schedule</span>
        <span className="material-symbols-outlined ms-2 p-1">add_task</span>
        <span className="material-symbols-outlined ms-2 p-1">drive_file_move</span>
        <span className="material-symbols-outlined ms-2 p-1">label</span>
        <MoreVert/>
      </div>
    </div>
  );
};

export default Actions;

import React, { useState } from "react";
import MoreVert from "../../../../../../../ui/icons/more_vert/more.vert";
import Schedule from "../../../../../../../ui/icons/schedule/schedule";
import MailIcon from "../../../../../../../ui/icons/mail/mail";
import Delete from "../../../../../../../ui/icons/delete/delete";
import Archive from "../../../../../../../ui/icons/archive/archive";
import ArrowBack from "../../../../../../../ui/icons/arrow_back/arrow.back";
import AddTask from "../../../../../../../ui/icons/add_task/add.task";
import DriveMove from "../../../../../../../ui/icons/drive_move/drive.move";
import "./actions.css";
import Info from "../../../../../../../ui/icons/info/info";
import Label from "../../../../../../../ui/icons/label/label";

const Actions = () => {
  return (
    <div className="left d-flex align-items-center justify-content-center">
      <div className="arrow_back">
        <ArrowBack />
      </div>
      <div className="actions_letter ms-4 d-flex align-items-center justify-content-center">
        <Archive />
        <Info />
        <Delete />
        <MailIcon />
        <Schedule /> 
        <AddTask />
        <DriveMove/>
        <Label/>
        <MoreVert />
      </div>
    </div>
  );
};

export default Actions;

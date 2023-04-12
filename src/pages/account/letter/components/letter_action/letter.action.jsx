import React from "react";
import Star from "../../../../../ui/icons/star/star";
import MoreVert from "../../../../../ui/icons/more_vert/more.vert";
const LetterAction = () => {
  return (
    <div className="action_letter d-flex align-items-center">
      <strong>Date Letter</strong>
      <Star/>
      <span className="material-symbols-outlined ms-3">reply</span>
      
    </div>
  );
};

export default LetterAction;

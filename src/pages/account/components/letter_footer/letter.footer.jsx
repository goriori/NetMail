import React from "react";
import ProgressDisk from "./components/progress/progress";
import HelpInfo from "./components/help_info/help.info";
import ActiveSession from "./components/active_session/active.session";

const LettterFooter = () => {
  return (
    <div className="information d-flex justify-content-between align-items-center p-2">
      <ProgressDisk />
      <HelpInfo/>
      <ActiveSession/>
    </div>
  );
};

export default LettterFooter

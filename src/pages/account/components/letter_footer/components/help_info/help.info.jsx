import React from "react";
import {Link} from 'react-router-dom'
const HelpInfo = () => {
  return (
    <div className="help_info">
      <Link to={'/information'}>Условия использования </Link>
      <Link to={'/information'} className="ms-2">
        Конфиденциальность{" "}
      </Link>
      <Link to={'/information'} className="ms-2">
        Правила программы
      </Link>
    </div>
  );
};
export default HelpInfo

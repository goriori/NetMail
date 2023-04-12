import React from "react";

const Reload = () => {
  const updatePage = () => {
    location.reload();
  };
  return (
    <span className="material-symbols-outlined" onClick={updatePage}>
      update
    </span>
  );
};

export default Reload

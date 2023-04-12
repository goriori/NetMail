import React, { useState } from "react";

const Star = () => {
  const [starActive, setStarActive] = useState(false);

  return (
    <div className="star">
      {starActive === false ? (
        <span
          className="favorite material-symbols-outlined ms-3 "
          onClick={() => setStarActive(true)}
        >
          star
        </span>
      ) : (
        <span
          class="material-symbols-outlined ms-3"
          onClick={() => setStarActive(false)}
        >
          star_half
        </span>
      )}
    </div>
  );
};
export default Star;

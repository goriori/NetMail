import React from "react";

const Delete = ({handler}) => {
    return (
        <span className="material-symbols-outlined ms-2 p-1" onClick={handler}>delete</span>
    )
}

export default Delete
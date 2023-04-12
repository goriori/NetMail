import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ButtonMain from "../../../../ui/buttons/button.main";
import "./navbar.css";
const Navbar = () => {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const logout = () => {
    console.log("logout");
    setLoading(!loading);
    setTimeout(() => {
      setLoading(!loading);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="navbar p-5">
      <div className="links">
        <div>
          <Link to={"/user/inbox"}>Inbox</Link>
        </div>
        <div className="mt-2">
          <Link to={"/user/starred"}>Starred</Link>
        </div>
        <div className="mt-2">
          <Link to={"/user/snoozed"}>Snoozed</Link>
        </div>
        <div className="mt-2">
          <Link to={"/user/sent"}>Sent</Link>
        </div>
      </div>
      <div className="logout mt-4 ">
        <ButtonMain text={"Log Out"} loading={loading} onClick={logout} />
      </div>
    </div>
  );
};

export default Navbar;

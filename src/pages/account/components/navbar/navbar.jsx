import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./navbar.css";
const Navbar = () => {
    let navigate  = useNavigate()
  const logout = () => {
    console.log("logout");
    return navigate('/')
  };
  return (
    <div className="navbar">
      <div className="links">
        <div>
          <Link to={"/user/inbox"}>Inbox</Link>
        </div>
        <div>
          <Link to={"/user/starred"}>Starred</Link>
        </div>
        <div>
          <Link to={"/user/snoozed"}>Snoozed</Link>
        </div>
        <div>
          <Link to={"/user/sent"}>Sent</Link>
        </div>
      </div>
      <div className="logout ">
        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  );
};

export default Navbar;

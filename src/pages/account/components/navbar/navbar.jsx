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
    <div className="navbar p-5">
      <div className="links">
        <div >
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
        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  );
};

export default Navbar;

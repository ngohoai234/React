import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../NavbarElements.js";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="ktop">
        <img
          className="logo"
          src={require("../../pages/Photo/dntu-logo.png")}
          alt="logo"
        />
        <h1>
          Trường Đại Học Công nghệ Đồng Nai
          <br />
          Hệ thống quản lý sinh viên
        </h1>
        <div className="clear"></div>
      </div>
      <div className="navbar">
        <Nav>
          <Bars />
          <NavMenu>
            <NavLink to="/Profile">Profile</NavLink>
            <NavLink to="/Evaluate">Evaluate</NavLink>
            <NavLink to="/History">History</NavLink>
          </NavMenu>
        </Nav>
      </div>
    </>
  );
}

export default Navbar;

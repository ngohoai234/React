import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from '../NavbarElements.js';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
      <div className="ktop"> 
        <img className="logo" src={require('../../pages/Photo/dntu-logo.png')} />
        <h1>Trường Đại Học Công nghệ Đồng Nai<br />
          Hệ thống quản lý sinh viên
        </h1>
        <div className="clear"></div>
      </div>
      <div className="navbar">
        <Nav>
          <Bars />
          <NavMenu>
            <NavLink to='/Profile' activeStyle>
              Profile
            </NavLink>
            <NavLink to='/Evaluate' activeStyle>
              Evaluate
            </NavLink>
            <NavLink to='/History' activeStyle>
              History
            </NavLink>
          </NavMenu>
          
        </Nav>
      </div>
    </>
    
    );
  }
  
  export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";
import "../LoginForm/LoginForm.css";

function Login() {
  return (
    <div className="form-box">
      <div className="header-text">Login Form</div>
      <input placeholder="Your Email Address" type="text" />
      <input placeholder="Your Password" type="password" />
      <input id="terms" type="checkbox" />
      <div className="pass">
        <NavLink to={"/forgot"}>Forgot password?</NavLink>
      </div>
      <button>login</button>
    </div>
  );
}

export default Login;

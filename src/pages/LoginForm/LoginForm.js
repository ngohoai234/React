import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { axiosAPIInstance } from "../../lib/axiosRequest";
import "../LoginForm/LoginForm.css";

function Login() {
  const [tendangnhap, setEmail] = useState("");
  const [matkhau, setPassword] = useState("");

  async function loginAPI(){
    let item = {tendangnhap, matkhau};
    let result = await axiosAPIInstance("http://myway83-001-site1.itempurl.com/api/tai-khoan/dang-nhap", {
      method: 'POST',
      headers: { 'Accept': 'application/json',
                        'Content-Type': 'application/json' 
                    },
      body: JSON.stringify(item)
      },
    );
    console.log(JSON.stringify(result));
    //console.log(JSON.stringify(item));
   
  }
  return (
    <div className="form-box">
      <div className="header-text">Login Form</div>
      <input placeholder="Your Email Address" type="text"
        onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Your Password" type="password" 
        onChange={(e) => setPassword(e.target.value)}/>
      <input id="terms" type="checkbox" />
      <div className="pass">
        <NavLink to={"/forgot"}>Forgot password?</NavLink>
      </div>
      <button onClick={loginAPI}>login</button>
    </div>
  );
}

export default Login;

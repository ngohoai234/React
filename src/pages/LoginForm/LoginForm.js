import React, { useState } from 'react';
import '../LoginForm/LoginForm.css'

function Login() {

    return (
      <div class="form-box">
		    <div class="header-text">
			    Login Form
		    </div>
        <input placeholder="Your Email Address" type="text"/> 
        <input placeholder="Your Password" type="password"/> 
        <input id="terms" type="checkbox"/> 
        <div class="pass"><a href="#">Forgot password?</a></div>
        <button >login</button>

        {/* <Routes>
          <Route path="/Main" element={<MainForm/>} />
          
        </Routes> */}
	    </div>

      
    
    );
  }
  
  export default Login;
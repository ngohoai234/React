import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../ResetPassword/ResetPassword.css'
function ResetPassword() {
    return (
    <div class="reset_password">
        <div class="signup-heading">Reset Password</div>
		<div class="row">
            <div class="inline-block">
                <div class="form-label">
                    Password<span class="required error" id="forgot-password-info"></span>
                </div>
                <input class="input-box-330" type="password" name="password"
                    id="password"/>
            </div>
        </div>
        <div class="row">
            <div class="inline-block">
                <div class="form-label">
                    Confirm Password<span class="required error"
                        id="confirm-password-info"></span>
                </div>
                <input class="input-box-330" type="password"
                    name="confirm-password" id="confirm-password"/>
            </div>
        </div>
        <div class="row">
            <input class="btn" type="submit" name="reset-btn" id="reset-btn"
                value="Reset Password"/>
        </div>
	</div>
	)
  }
  
  export default ResetPassword;
import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../CodeResetPassword/CodeResetPassword.css'
function CodeResetPassword(id) {

    var name = "Đăng Khoa";
    var tenTaiKhoan = "KhoaDD1";
    var MaXacNhan = 1234565
  return (
    <form class = "form-group">
        <div class="">
            <img className="img" src={require('../../pages/Photo/dntu-logo.png')} />
            <span class="title">HỆ THỐNG ĐÁNH GIÁ NĂNG LỰC GIẢNG VIÊN</span>
        </div>
        <div class="header">
            <p class="subject">Mã xác minh Hệ thống</p>
        </div>
        <div class="body">
            <div class="head-body">
                <h5 class="h5">Xin chào <span class="variable"> {name}</span>!</h5>
                <p>Chúng tôi nhận được yêu cầu cấp mã xác nhận tài khoản truy cập Hệ thống đánh giá năng lực giảng viên của bạn 
                    <span class="variable"> {tenTaiKhoan}</span> thông qua địa chỉ Email của bạn. Mã xác nhận của bạn là: </p>
            </div>
            <div class="code-confirm">
                <h3 class="code">{MaXacNhan}</h3>
            </div>
            <div class="footer-body">
                <p>Nếu bạn không yêu cầu mã này thì có thể ai đó đang cố tình truy cập vào Tài khoản của bạn. Đừng chuyển tiếp hoặc cung cấp mã này cho bất kỳ ai.</p>
                <p>Bạn nhận được thông báo này vì địa chỉ email này được liệt kê là email khôi phục cho tài khoản <span class="variable"> {tenTaiKhoan}</span>.</p>
                <p>Trân trọng!</p>
                <p class="sign">Quản trị viên</p>
            </div>
        </div> 
        <div class="footer">
            <p>Email này không thể nhận thư trả lời. Hãy liên hệ phòng nhân sự hoặc bộ phận admin để giải đáp thắc mắc.</p>
        </div>    
    </form>
  );
}

export default CodeResetPassword;

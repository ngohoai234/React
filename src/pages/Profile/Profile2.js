import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../Profile/Profile2.css';

function Profile() {
  return (
    <div className="profile">
      <div className="container">
        <div id="content" className="content p-0">
          <div className="profile-header">
            <div className="profile-header-cover"></div>

            <div className="profile-header-content">
              <div className="profile-header-img">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
              </div>

              <div className="profile-header-info">
                <h4 className="m-t-sm">Nguyễn Thị Liệu</h4>
                <p className="m-b-sm">Giảng viên</p>
                {/* <a href="#" className="btn btn-xs btn-primary mb-3">
                  Edit Profile
                </a> */}
              </div>
            </div>
          </div>

          <div className="profile-container">
            <div className="row row-space-20">
              <div className="col-md-8">
                <div className="tab-content p-0">
                  <div className="tab-pane active show" id="profile-about">
                    <table className="table table-profile">
                      <thead>
                        <tr>
                          <th colSpan="2">CÔNG TÁC VÀ GIÁO DỤC</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field">Công việc</td>
                          <td className="value">
                            <div className="m-b-5">
                              <b>Đại Học Công Nghệ Đồng Nai (DNTU)</b> <br />
                              <span className="text-muted">Giảng viên</span>
                            </div>
                          </td>
                        </tr>
                        {/* <tr>
                          <td className="field">Education</td>
                          <td className="value">
                            <div className="m-b-5">
                              <b>University (2009)</b>{' '}                       
                              <br />
                              <span className="text-muted">University of Georgia, Athens, GA</span>
                            </div>
                            <div>
                              <b>High School (2006)</b>{' '}
                              <a href="#" className="m-l-10">
                                Edit
                              </a>
                              <br />
                              <span className="text-muted">
                                Heritage High School, West Chestter, PA
                              </span>
                            </div>
                          </td>
                        </tr> */}
                        <tr>
                          <td className="field">Khoa công tác</td>
                          <td className="value">
                            Khoa công nghệ
                          </td>
                        </tr>                   
                        <tr>
                          <td className="field">Chứng chỉ</td>
                          <td className="value">
                            C++, PHP, HTML5, CSS, jQuery, MYSQL, Ionic, Laravel, Phonegap,
                            Bootstrap, Angular JS, Angular JS, Asp.net
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table table-profile">
                      <thead>
                        <tr>
                          <th colSpanc="2">THÔNG TIN LIÊN HỆ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field">Số điện thoại</td>
                          <td className="value">
                            +44 7700 900860
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Email</td>
                          <td className="value">
                            admin@infinite.com
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Địa chỉ</td>
                          <td className="value">Ho Chi Minh</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table table-profile">
                      <thead>
                        <tr>
                          <th colSpanc="2">THÔNG TIN CƠ BẢN</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field">Ngày sinh</td>
                          <td className="value">
                            November 4, 1989
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Gender</td>
                          <td className="value">
                            Male
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Email</td>
                          <td className="value">
                            http://facebook.com/infinite.admin                      
                          </td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="col-md-4 hidden-xs hidden-sm">
                <ul className="profile-info-list">
                  <li className="title">THÔNG TIN CÁ NHÂN</li>
                  <li>
                    <div className="field">Nghề nghiệp:</div>
                    <div className="value">Giảng viên</div>
                  </li>
                  <li>
                    <div className="field">Bằng cấp:</div>
                    <div className="value">
                    Đạt trình độ ngoại ngữ bậc 03 <br/>
                    Đạt chuẩn kỹ năng sử dụng công nghệ thông tin cơ bản. <br/>
                    Tốt nghiệp đại học sư phạm. <br/>
                    </div>
                  </li>
                  <li>
                    <div className="field">Ngày sinh:</div>
                    <div className="value">1989/11/04</div>
                  </li>
                  <li>
                    <div className="field">Quê quán:</div>
                    <div className="value">San Francisco</div>
                  </li>
                  <li>
                    <div className="field">Địa chỉ:</div>
                    <div className="value">
                      <address className="m-b-0">
                        Twitter, Inc.
                        <br />
                        1355 Market Street, Suite 900
                        <br />
                        San Francisco, CA 94103
                      </address>
                    </div>
                  </li>
                  <li>
                    <div className="field">Phone No.:</div>
                    <div className="value">(123) 456-7890</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

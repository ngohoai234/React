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
                <h4 className="m-t-sm">Clyde Stanley</h4>
                <p className="m-b-sm">UXUI + Frontend Developer</p>
                <a href="#" className="btn btn-xs btn-primary mb-3">
                  Edit Profile
                </a>
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
                          <th colSpan="2">WORK AND EDUCATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field">Work</td>
                          <td className="value">
                            <div className="m-b-5">
                              <b>DongNai Technology University (DNTU)</b> <br />
                              <span className="text-muted">Teacher</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Education</td>
                          <td className="value">
                            <div className="m-b-5">
                              <b>University (2009)</b>{' '}
                              <a href="#" className="m-l-10">
                                Edit
                              </a>
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
                        </tr>
                        <tr>
                          <td className="field">Skills</td>
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
                          <th colSpanc="2">CONTACT INFORMATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field">Mobile Phones</td>
                          <td className="value">
                            +44 7700 900860
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Email</td>
                          <td className="value">
                            admin@infinite.com
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Facebook</td>
                          <td className="value">
                            http://facebook.com/infinite.admin
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Website</td>
                          <td className="value">
                            http://seantheme.com
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Address</td>
                          <td className="value">Ho Chi Minh City</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table table-profile">
                      <thead>
                        <tr>
                          <th colSpanc="2">BASIC INFORMATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="field">Birth of Date</td>
                          <td className="value">
                            November 4, 1989
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Gender</td>
                          <td className="value">
                            Male
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Facebook</td>
                          <td className="value">
                            http://facebook.com/infinite.admin
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="field">Website</td>
                          <td className="value">
                            http://seantheme.com
                            <a href="#" className="m-l-10">
                              Edit
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="col-md-4 hidden-xs hidden-sm">
                <ul className="profile-info-list">
                  <li className="title">PERSONAL INFORMATION</li>
                  <li>
                    <div className="field">Occupation:</div>
                    <div className="value">UXUI / Frontend Developer</div>
                  </li>
                  <li>
                    <div className="field">Skills:</div>
                    <div className="value">
                      C++, PHP, HTML5, CSS, jQuery, MYSQL, Ionic, Laravel, Phonegap, Bootstrap,
                      Angular JS, Angular JS, Asp.net
                    </div>
                  </li>
                  <li>
                    <div className="field">Birth of Date:</div>
                    <div className="value">1989/11/04</div>
                  </li>
                  <li>
                    <div className="field">Country:</div>
                    <div className="value">San Francisco</div>
                  </li>
                  <li>
                    <div className="field">Address:</div>
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

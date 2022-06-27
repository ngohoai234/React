import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../Profile/Profile.css'

function Profile() {
    return (
        <div class="container">
<div id="content" class="content p-0">
    <div class="profile-header">
        <div class="profile-header-cover"></div>

        <div class="profile-header-content">
            <div class="profile-header-img">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
            </div>

            <div class="profile-header-info">
                <h4 class="m-t-sm">Clyde Stanley</h4>
                <p class="m-b-sm">UXUI + Frontend Developer</p>
                <a href="#" class="btn btn-xs btn-primary mb-3">Edit Profile</a>
            </div>
        </div>
    </div>

    <div class="profile-container">
        <div class="row row-space-20">
            <div class="col-md-8">
                <div class="tab-content p-0">
                    <div class="tab-pane active show" id="profile-about">
                        <table class="table table-profile">
                            <thead>
                                <tr>
                                    <th colspan="2">WORK AND EDUCATION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="field">Work</td>
                                    <td class="value">
                                        <div class="m-b-5">
                                            <b>DongNai Technology University (DNTU)</b> <br />
                                            <span class="text-muted">Teacher</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="field">Education</td>
                                    <td class="value">
                                        <div class="m-b-5">
                                            <b>University (2009)</b> <a href="#" class="m-l-10">Edit</a><br />
                                            <span class="text-muted">University of Georgia, Athens, GA</span>
                                        </div>
                                        <div>
                                            <b>High School (2006)</b> <a href="#" class="m-l-10">Edit</a><br />
                                            <span class="text-muted">Heritage High School, West Chestter, PA</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="field">Skills</td>
                                    <td class="value">
                                        C++, PHP, HTML5, CSS, jQuery, MYSQL, Ionic, Laravel, Phonegap, Bootstrap, Angular JS, Angular JS, Asp.net
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-profile">
                            <thead>
                                <tr>
                                    <th colspan="2">CONTACT INFORMATION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="field">Mobile Phones</td>
                                    <td class="value">
                                        +44 7700 900860
                                        <a href="#" class="m-l-10">Edit</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="field">Email</td>
                                    <td class="value">
                                        admin@infinite.com
                                        <a href="#" class="m-l-10">Edit</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="field">Facebook</td>
                                    <td class="value">
                                        http://facebook.com/infinite.admin
                                        <a href="#" class="m-l-10">Edit</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="field">Website</td>
                                    <td class="value">
                                        http://seantheme.com
                                        <a href="#" class="m-l-10">Edit</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="field">Address</td>
                                    <td class="value">
                                        Ho Chi Minh City
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-profile">
                            <thead>
                                <tr>
                                    <th colspan="2">BASIC INFORMATION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="field">Birth of Date</td>
                                    <td class="value">
                                        November 4, 1989
                                        <a href="#" class="m-l-10">Edit</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="field">Gender</td>
                                    <td class="value">
                                        Male
                                        <a href="#" class="m-l-10">Edit</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="field">Facebook</td>
                                    <td class="value">
                                        http://facebook.com/infinite.admin
                                        <a href="#" class="m-l-10">Edit</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="field">Website</td>
                                    <td class="value">
                                        http://seantheme.com
                                        <a href="#" class="m-l-10">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="col-md-4 hidden-xs hidden-sm">
                <ul class="profile-info-list">
                    <li class="title">PERSONAL INFORMATION</li>
                    <li>
                        <div class="field">Occupation:</div>
                        <div class="value">UXUI / Frontend Developer</div>
                    </li>
                    <li>
                        <div class="field">Skills:</div>
                        <div class="value">C++, PHP, HTML5, CSS, jQuery, MYSQL, Ionic, Laravel, Phonegap, Bootstrap, Angular JS, Angular JS, Asp.net</div>
                    </li>
                    <li>
                        <div class="field">Birth of Date:</div>
                        <div class="value">1989/11/04</div>
                    </li>
                    <li>
                        <div class="field">Country:</div>
                        <div class="value">San Francisco</div>
                    </li>
                    <li>
                        <div class="field">Address:</div>
                        <div class="value">
                            <address class="m-b-0">
                                Twitter, Inc.<br />
                                1355 Market Street, Suite 900<br />
                                San Francisco, CA 94103
                            </address>
                        </div>
                    </li>
                    <li>
                        <div class="field">Phone No.:</div>
                        <div class="value">
                            (123) 456-7890
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</div>
</div>
    );
  }
  
  export default Profile;
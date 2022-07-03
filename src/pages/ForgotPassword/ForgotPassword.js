import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../ForgotPassword/ForgotPassword.css'
import Data1 from '../../Data/Evaluate1_Data.json'
import Data2 from '../../Data/Evaluate2_Data.json'
import Data3 from '../../Data/Evaluate3_Data.json'
function ForgotPassword() {
	var row_count = 1;

    return (
    //     <div class="row">
	// 	<h1>Forgot Password</h1>
	// 	<h6 class="information-text">Enter your registered email to reset your password.</h6>
	// 	<div class="form-group">
	// 		<input type="email" name="user_email" id="user_email"/>
	// 		<p><label for="username">Email</label></p>
	// 		<button onclick="showSpinner()">Reset Password</button>
	// 	</div>
	// 	<div class="footer">
	// 		<h5>New here? <a href="#">Sign Up.</a></h5>
	// 		<h5>Already have an account? <a href="#">Sign In.</a></h5>
			
	// 	</div>
	// </div>

	<div>
		<div className="table2">
			<table>
				<thead>
					<tr>
						<th rowspan="2">STT
						</th>
						<th rowspan="2">Tiêu chí đánh giá
						</th>
						<th colspan="6" width="350 px">Điểm
						</th>
						<th rowspan="2">GV tự đánh giá
						</th>
						<th rowspan="2">Xác nhận của HĐ
						</th>
						<th rowspan="2">Bằng chứng
						</th>
					</tr>
					<tr>
						<th>0
						</th>
						<th>1
						</th>
						<th>2
						</th>
						<th>3
						</th>
						<th>4
						</th>
						<th>5
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colspan="11">
							<strong> 1. Năng lục chuyên môn(60 điểm)</strong>
						</td>
					</tr>
					{
						Data1.map((data, i) => (
							<tr key={i}>
								<td>
									1.{row_count++}
								</td>
								<td>
									{data.evaluate}
								</td>
								<td title="Rất không đồng ý" className="check">
									{(data.sub0 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}								
								</td>
								<td title="Không đồng ý" className="check">
									{(data.sub1 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}	
								</td>
								<td title="Phân vân" className="check">
									{(data.sub2 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}	
								</td>
								<td title="Đồng ý" className="check">
									{(data.sub3 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}	
								</td>
								<td title="Hoàn toàn đồng ý" className="check">
									{(data.sub4 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}	
								</td>
								<td title="Hoàn toàn đồng ý" className="check">
									{(data.sub5 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}	
								</td>
								<td>
								</td>
								<td>   
								</td>
								<td className="upload">
									{(data.evidence == 1) ? (
										<img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
									) : (
										<div></div>
									)}
								</td>
							</tr>
												    							
						))
					}
					<tr>
						<td colspan="11">
							<strong> 2. NGHIÊN CỨU KHOA HỌC</strong>
							{row_count = 1}
						</td>
					</tr>
					{
						Data2.map((data, i) => (
							<tr key={i}>
								<td>
									2.{row_count++}
								</td>
								<td>
									{data.evaluate}
								</td>
								<td title="Rất không đồng ý" className="check">
									{(data.sub0 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}								
								</td>
								<td title="Không đồng ý" className="check">
									{(data.sub1 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}	
								</td>
								<td title="Phân vân" className="check">
									{(data.sub2 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}	
								</td>
								<td title="Đồng ý" className="check">
									{(data.sub3 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}	
								</td>
								<td title="Hoàn toàn đồng ý" className="check">
									{(data.sub4 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}	
								</td>
								<td title="Hoàn toàn đồng ý" className="check">
									{(data.sub5 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}	
								</td>
								<td>
								</td>
								<td>   
								</td>
								<td className="upload">
									{(data.evidence == 1) ? (
										<img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
									) : (
										<div></div>
									)}
								</td>
							</tr>												    							
						))
					}
					<tr>
						<td colspan="11">
							<strong> 3. CÔNG TÁC CỦA TRƯỞNG/KHOA</strong>
							{row_count = 1}
						</td>
					</tr>
					{
						Data3.map((data, i) => (
							<tr key={i}>
								<td>
									3.{row_count++}
								</td>
								<td>
									{data.evaluate}
								</td>
								<td title="Rất không đồng ý" className="check">
									{(data.sub0 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}								
								</td>
								<td title="Không đồng ý" className="check">
									{(data.sub1 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}	
								</td>
								<td title="Phân vân" className="check">
									{(data.sub2 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}	
								</td>
								<td title="Đồng ý" className="check">
									{(data.sub3 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}	
								</td>
								<td title="Hoàn toàn đồng ý" className="check">
									{(data.sub4 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}	
								</td>
								<td title="Hoàn toàn đồng ý" className="check">
									{(data.sub5 == 1) ? (
										<input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
									) : (
										<div></div>
									)}	
								</td>
								<td>
								</td>
								<td>   
								</td>
								<td className="upload">
									{(data.evidence == 1) ? (
										<img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
									) : (
										<div></div>
									)}
								</td>
							</tr>												    							
						))
					}
				</tbody>
			</table>
		</div>
	</div>
    
    );
  }
  
  export default ForgotPassword;
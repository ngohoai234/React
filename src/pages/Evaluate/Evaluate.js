import React, { useState} from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../Evaluate/Evaluate.css';
import '../Photo/logo_DNTU.png';
import Data1 from '../../Data/Evaluate1_Data.json';
import Data2 from '../../Data/Evaluate2_Data.json';
import Data3 from '../../Data/Evaluate3_Data.json';
import Data4 from '../../Data/PointData.json';
import { Table, Button, Tag } from 'antd';

class EvaluateForm extends React.Component {
  sum;
  state = {selected: {}};
  num = [];
  onSum = () => {
    for (var key in Data4.info) {
      //this.num.indexOf(Object.values(Data4.info[key]));
      var value = Object.values(Data4.info[key]);
      this.num.push(Number(value));
    }
    this.sum = this.num.reduce((a, v) => a = a + v, 0)
  };
  onRadioChange = e => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    //this.onSum();
    this.setState({
      ...this.state,
      selected: { ...this.state.selected, [name]: value },
    });
    
  };
  
  onSaveData = () =>{
   
    const selected = this.state.selected;
    const config = { name: 'Duong', account: 'DuongNA5', selected};
    let data = JSON.stringify(config);
    console.log(JSON.parse(data));
  };
  render() {
    var row_count1 = 1;
    var row_count2 = 1;
    var row_count3 = 1;
    var count = 1;
    return (
      <div className="evaluate">
        {JSON.stringify(this.state.selected)}
        {JSON.stringify(this.num)}
      <div className="content">
        <div>
          <div className="header">
            <h3>
              Phiếu đánh giá năng lực giảng viên <br />
              Năm học: 2022 {this.sum}
            </h3>
          </div>

          <div className="info">
            <div className="infomation">
              <h5>Giảng viên: Lê Văn Hoàng</h5>
            </div>
            <div className="infomation">
              <h5>Mã số nhân sự: DTH125</h5>
            </div>
          </div>
          <div className="info">
            <div className="infomation">
              <h5>Bộ môn: Kiểm thử bảo mật</h5>
            </div>
            <div className="infomation">
              <h5>Khoa: Công nghệ</h5>
            </div>
          </div>
          <div className="table2">
            <table>
              <thead>
                <tr>
                  <th rowspan="2">STT</th>
                  <th rowspan="2">Tiêu chí đánh giá</th>
                  <th colspan="6" width="350 px">
                    Điểm
                  </th>
                  <th rowspan="2">GV tự đánh giá</th>
                  <th rowspan="2">Xác nhận của HĐ</th>
                  <th rowspan="2">Bằng chứng</th>
                </tr>
                <tr>
                  <th>0</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="11" className="content1">
                    <strong> 1. Năng lục chuyên môn</strong>
                  </td>
                </tr>
                {Data1.map((data, i) => (
                  <tr key={i}>
                    <td>1.{row_count1++}</td>
                    <td className="content1">{data.evaluate}</td>
                    <td title="Rất không đồng ý" className="check">
                      {data.sub0 == 1 ? (
                        <input type="radio" value={0} name={count}  id="kvote27_21"
                        onChange={this.onRadioChange}/>
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td title="Không đồng ý" className="check">
                      {data.sub1 == 1 ? (
                        <input type="radio" value={1} name={count} id="kvote27_22"
                        onChange={this.onRadioChange} />
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td title="Phân vân" className="check">
                      {data.sub2 == 1 ? (
                        <input type="radio" value={2} name={count} id="kvote27_23" 
                        onChange={this.onRadioChange}/>
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td title="Đồng ý" className="check">
                      {data.sub3 == 1 ? (
                        <input type="radio" value={3} name={count} id="kvote27_24" 
                        onChange={this.onRadioChange}/>
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td title="Hoàn toàn đồng ý" className="check">
                      {data.sub4 == 1 ? (
                        <input type="radio" value={4} name={count} id="kvote27_25" 
                        onChange={this.onRadioChange}/>
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td title="Hoàn toàn đồng ý" className="check">
                      {data.sub5 == 1 ? (
                        <input type="radio" value={5} name={count} id="kvote27_26" 
                        onChange={this.onRadioChange}/>
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td className="add"> {count++}</td>
                    <td></td>
                    <td className="upload">
                      {data.evidence == 1 ? (
                        <img
                          className="logo"
                          src={require('../../pages/Photo/Upload.png')}
                          width="30px"
                          height="30px"
                        />
                      ) : (
                        <div></div>
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colspan="11" className="content1">
                    <strong> 2. NGHIÊN CỨU KHOA HỌC</strong>
                  </td>
                </tr>
                {Data2.map((data, i) => (
                  <tr key={i}>
                    <td>2.{row_count2++}</td>
                    <td className="content1">{data.evaluate}</td>
                    <td title="Rất không đồng ý" className="check">
                      {data.sub0 == 1 ? (
                        <input type="radio" value={0} name={count}  id="kvote27_21"
                        onChange={this.onRadioChange}/>
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td title="Không đồng ý" className="check">
                      {data.sub1 == 1 ? (
                        <input type="radio" value={1} name={count} id="kvote27_22"
                        onChange={this.onRadioChange} />
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td title="Phân vân" className="check">
                      {data.sub2 == 1 ? (
                        <input type="radio" value={2} name={count} id="kvote27_23" 
                        onChange={this.onRadioChange}/>
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td title="Đồng ý" className="check">
                      {data.sub3 == 1 ? (
                        <input type="radio" value={3} name={count} id="kvote27_24" 
                        onChange={this.onRadioChange}/>
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td title="Hoàn toàn đồng ý" className="check">
                      {data.sub4 == 1 ? (
                        <input type="radio" value={4} name={count} id="kvote27_25" 
                        onChange={this.onRadioChange}/>
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td title="Hoàn toàn đồng ý" className="check">
                      {data.sub5 == 1 ? (
                        <input type="radio" value={5} name={count} id="kvote27_26" 
                        onChange={this.onRadioChange}/>
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td> {count++}</td>
                    <td></td>
                    <td className="upload">
                      {data.evidence == 1 ? (
                        <img
                          className="logo"
                          src={require('../../pages/Photo/Upload.png')}
                          width="30px"
                          height="30px"
                        />
                      ) : (
                        <div></div>
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colspan="11" className="content1">
                    <strong> 3. CÔNG TÁC CỦA TRƯỞNG/KHOA</strong>
                  </td>
                </tr>
                {Data3.map((data, i) => (
                  <tr key={i}>
                    <td>3.{row_count3++}</td>
                    <td className="content1">{data.evaluate}</td>
                    <td title="Rất không đồng ý" className="check">
                      {data.sub0 == 1 ? (
                        <input type="radio" value={0} name={count}  id="kvote27_21"
                        onChange={this.onRadioChange}/>
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td title="Không đồng ý" className="check">
                      {data.sub1 == 1 ? (
                        <input type="radio" value={1} name={count} id="kvote27_22"
                        onChange={this.onRadioChange} />
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td title="Phân vân" className="check">
                      {data.sub2 == 1 ? (
                        <input type="radio" value={2} name={count} id="kvote27_23" 
                        onChange={this.onRadioChange}/>
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td title="Đồng ý" className="check">
                      {data.sub3 == 1 ? (
                        <input type="radio" value={3} name={count} id="kvote27_24" 
                        onChange={this.onRadioChange}/>
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td title="Hoàn toàn đồng ý" className="check">
                      {data.sub4 == 1 ? (
                        <input type="radio" value={4} name={count} id="kvote27_25" 
                        onChange={this.onRadioChange}/>
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td title="Hoàn toàn đồng ý" className="check">
                      {data.sub5 == 1 ? (
                        <input type="radio" value={5} name={count} id="kvote27_26" 
                        onChange={this.onRadioChange}/>
                      ) : (
                        <div className="none"></div>
                      )}
                    </td>
                    <td> {count++}</td>
                    <td></td>
                    <td className="upload">
                      {data.evidence == 1 ? (
                        <img
                          className="logo"
                          src={require('../../pages/Photo/Upload.png')}
                          width="30px"
                          height="30px"
                        />
                      ) : (
                        <div></div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <img className="logo" src={require('../Photo/bietquyet.gif')} onClick={this.onSaveData}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default EvaluateForm;

import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../Evaluate/Evaluate.css";
import "../Photo/logo_DNTU.png";
import Data1 from '../../Data/Evaluate1_Data.json'
import Data2 from '../../Data/Evaluate2_Data.json'
import Data3 from '../../Data/Evaluate3_Data.json'
import { Table, Button, Tag } from "antd";

class EvaluateForm extends React.Component {
    
  payloadAll = [
    {
      name: 'Dntu1',
      id: '1'
    },
    {
      name: 'Dntu2',
      id: '2'
    },
    {
      name: 'Dntu3',
      id: '3'
    },
    {
      name: 'Dntu4',
      id: '4'
    },
    {
      name: 'Dntu5',
      id: '5'
    }
  ];

  state = {
    task: { options: [1, 2, 3, 4, 5], extras: this.payloadAll},
    selected: {}
  };

  onRadioChange = (e) => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    this.setState({
      ...this.state,
      selected: { ...this.state.selected, [name]: value }
    });
  };

  onSubmit = () => {
    console.log(this.state.selected);
    this.setState({
      ...this.state,
      selected: {}
    });
  };

  render() {
    let columns = [];
    columns.push({
      title: "",
      dataIndex: "name",
      key: "name",
      width: "45vw"
    });

    

    let rowHeaders = [];
    this.state.task.extras.forEach((extra, i) => {
      rowHeaders.push({ name: `${extra.name}` });
    });

    var row_count1 = 1;
    var row_count2 = 1;
    var row_count3 = 1;
    return (
      <div className="content">
        <div>
        <div className="header">
            <h3>
                Phiếu đánh giá năng lực giảng viên <br/>
                Năm học: 2022
            </h3>  
        </div>

        <div className="info">
            <div className="infomation">
                <h5>
                    Giảng viên: Lê Văn Hoàng
                </h5>
            </div>
            <div className="infomation">
                <h5>
                    Mã số nhân sự: DTH125
                </h5>
            </div>
        </div>
        <div className="info">
            <div className="infomation">
                <h5>
                    Bộ môn: Kiểm thử bảo mật
                </h5>
            </div>
            <div className="infomation">
                <h5>
                    Khoa: Công nghệ
                </h5>
            </div>
        </div>
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
                            <td colspan="11" className="content1">
                                <strong> 1. Năng lục chuyên môn</strong>
                            </td>
                        </tr>
                        {
                            Data1.map((data, i) => (
                                <tr key={i}>
                                    <td>
                                        1.{row_count1++}
                                    </td>
                                    <td className="content1">
                                        {data.evaluate}
                                    </td>
                                    <td title="Rất không đồng ý" className="check">
                                        {(data.sub0 == 1) ? (
                                            <input 
                                                type="radio" 
                                                value="vnk2" 
                                                name="ksur27" 
                                                id="kvote27_2"/>
                                        ) : (
                                            <div className="none"></div>
                                        )}								
                                    </td>
                                    <td title="Không đồng ý" className="check">
                                        {(data.sub1 == 1) ? (
                                            <input 
                                            type="radio" 
                                            value="vnk2" 
                                            name="ksur27" 
                                            id="kvote27_2"/>
                                        ) : (
                                            <div className="none"></div>
                                        )}	
                                    </td>
                                    <td title="Phân vân" className="check">
                                        {(data.sub2 == 1) ? (
                                            <input 
                                            type="radio" 
                                            value="vnk2" 
                                            name="ksur27" 
                                            id="kvote27_2"/>
                                        ) : (
                                            <div className="none"></div>
                                        )}	
                                    </td>
                                    <td title="Đồng ý" className="check">
                                        {(data.sub3 == 1) ? (
                                            <input 
                                            type="radio" 
                                            value="vnk2" 
                                            name="ksur27" 
                                            id="kvote27_2"/>
                                        ) : (
                                            <div className="none"></div>
                                        )}	
                                    </td>
                                    <td title="Hoàn toàn đồng ý" className="check">
                                        {(data.sub4 == 1) ? (
                                            <input 
                                            type="radio" 
                                            value="vnk2" 
                                            name="ksur27"                                         
                                            id="kvote27_2"/>
                                        ) : (
                                            <div className="none"></div>
                                        )}	
                                    </td>
                                    <td title="Hoàn toàn đồng ý" className="check">
                                        {(data.sub5 == 1) ? (
                                            <input 
                                            type="radio" 
                                            value="vnk2" 
                                            name="ksur27"                                        
                                            id="kvote27_2"/>
                                        ) : (
                                            <div className="none"></div>
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
                            <td colspan="11" className="content1">
                                <strong> 2. NGHIÊN CỨU KHOA HỌC</strong>
                            </td>
                        </tr>
                        {
                            Data2.map((data, i) => (
                                <tr key={i}>
                                    <td>
                                        2.{row_count2++}
                                    </td>
                                    <td className="content1">
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
                            <td colspan="11" className="content1">
                                <strong> 3. CÔNG TÁC CỦA TRƯỞNG/KHOA</strong>
                            </td>
                        </tr>
                        {
                            Data3.map((data, i) => (
                                <tr key={i}>
                                    <td>
                                        3.{row_count3++}
                                    </td>
                                    <td className="content1">
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
            <div>
                <img className="logo" src={require('../Photo/bietquyet.gif')} />
            </div>
        </div>
      </div>
    );
  }
}

export default EvaluateForm;
import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../Evaluate/Evaluate.css";
import "../Photo/logo_DNTU.png";
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

    this.state.task.options.forEach((option, i) => {
      columns.push({
        title: option,
        key: option,
        render: (row) => {
          return (
            <input
              type="radio"
              checked={this.state.selected[row.name] == option}
              onChange={this.onRadioChange}
              name={row.name}
              value={option}
            />
          );
        }
      });
    });

    let rowHeaders = [];
    this.state.task.extras.forEach((extra, i) => {
      rowHeaders.push({ name: `${extra.name}` });
    });

    return (
      <div className="content">
        <div>
        {/* <div className="header">
          <img className="logo" src={require('../Photo/logo_DNTU.png')} />
          <h1>Bảng đánh giá </h1>
        </div>
        
        <div className="table">
          <Button onClick={this.onSubmit} type="primary">
            {" "}
            Submit
          </Button>
          <Table
            columns={columns}
            dataSource={rowHeaders}
            size="middle"
            bordered
            pagination={false}
          />

          <Tag color="red">Selected options</Tag>
          <br />

          {JSON.stringify(this.state.selected)}
        </div> */}
        {/* <table style="width:100%">
          <tr>
            <th style="width:10%">STT</th>
            <th>Tiêu chí đánh giá</th>
            <th colSpan={5}>Điểm</th>
            <th>Giáo viên tự đánh giá</th>
            <th>Xác nhận của HĐ</th>
          </tr>
          <tr>
            <td ColSpan={9}>A.NĂNG LỰC CHUYÊN MÔN(60 điểm) </td>
          </tr>
          <tr>
            <td>1</td>
            <td ColSpan={7}>Kiến thức, kỹ năng chuyên môn và Đạo đức nghề nghiệp </td>
          </tr>
          <tr>
            <td>1.1</td>
            <td >Trình độ chuyên môn </td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
        </table> */}
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
        <table >
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
                                            <strong>
                                                A. Năng lục chuyên môn(60 điểm)</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            1
                                        </th>
                                        <td colspan="10">
                                            <strong>
                                                Kiến thức, kỹ năng chuyên môn và Đạo đức nghề nghiệp (20 điểm)</strong>
                                        </td>
                                    </tr>
                                            
                                    <tr>
                                        <td>
                                            1.1
                                        </td>
                                        <td>
                                            Trình độ chuyên môn  
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur26" id="kvote26_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur26" id="kvote26_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur26" id="kvote26_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur26" id="kvote26_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur26" id="kvote26_5"/>
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>
                                                
                                    <tr>
                                        <td>
                                            1.2
                                        </td>
                                        <td>
                                            Kỹ năng chuyên môn
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur26" id="kvote26_5"/>
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>
                                                
                                    <tr>
                                        <td>
                                            1.3
                                        </td>
                                        <td>
                                            Cập nhật kiến thức chuyên môn
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur26" id="kvote26_5"/>
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>
                                                
                                    <tr>
                                        <td>
                                            1.4
                                        </td>
                                        <td>
                                            Đạo đức nghề nghiệp
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                        </td>
                                        <td className="result">
                                            <strong>
                                            TỔNG 1
                                            </strong>
                                        </td>
                                        <td>
                                        </td>
                                        <td colSpan={5} className="result">
                                            ... /20 điểm
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                    </tr> 

                                    <tr>
                                        <th>
                                            2
                                        </th>
                                        <td colspan="10">
                                            <strong>
                                                Năng lực dạy học (40 điểm)</strong>
                                        </td>
                                    </tr>
                                            
                                    <tr>
                                        <td>
                                            2.1
                                        </td>
                                        <td>
                                            Số lần được dự giờ trong năm 
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur26" id="kvote26_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur26" id="kvote26_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur26" id="kvote26_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur26" id="kvote26_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>
                                                
                                    <tr>
                                        <td>
                                            2.2
                                        </td>
                                        <td>
                                            Số lần đi dự giờ trong năm
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>
                                                
                                    <tr>
                                        <td>
                                            2.3
                                        </td>
                                        <td>
                                            Số điểm trung bình đánh giá/kết quả được dự giờ trong năm
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>
                                                
                                    <tr>
                                        <td>
                                            2.4
                                        </td>
                                        <td>
                                            Kết quả khảo sát sự hài lòng của sinh viên
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2.5
                                        </td>
                                        <td>
                                            Số lượng đề cương, bài giảng cập nhật mới trong năm
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2.6
                                        </td>
                                        <td>
                                            Số lần tổ chức học nhóm/ngoại khóa sinh hoạt chuyên đề môn học
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2.7
                                        </td>
                                        <td>
                                            Ứng dụng sáng tạo các phương tiện dạy học vào bài giảng
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check"> 
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2.8
                                        </td>
                                        <td>
                                            Kết quả đánh giá học tập của sinh viên
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2.9
                                        </td>
                                        <td>
                                            Quản lý lớp học
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2.10
                                        </td>
                                        <td>
                                            Định hướng nghề nghiệp cho sinh viên, liên hệ bài học với thực tiễn nghề nghiệp tương lai
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        </td>
                                        <td className="result">
                                            <strong>
                                            TỔNG 2
                                            </strong>
                                        </td>
                                        <td>
                                        </td>
                                        <td colSpan={5} className="result">
                                            ... /40 điểm
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                    </tr> 
                                    <tr>
                                        <td colspan="11">
                                            <strong>
                                                B. NGHIÊN CỨU KHOA HỌC(20 điểm)</strong>
                                        </td>
                                    </tr>  
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            Số bài báo khoa học đăng trên các tạp chí khoa học có phản biện
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>     
                                    <tr>
                                        <td>
                                            2
                                        </td>
                                        <td>
                                            Số lần chủ trì hoặc phối hợp tổ chức các seminar, hội thảo chuyên đề trong lĩnh vực chuyên môn
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr> 
                                    <tr>
                                        <td>
                                            3
                                        </td>
                                        <td>
                                            Số giáo trình hoặc tài liện giảng dạy biên soạn trong năm
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr> 
                                    <tr>
                                        <td>
                                            4
                                        </td>
                                        <td>
                                            Số bài báo đăng nội san của trường
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr> 
                                    <tr>
                                        <td>
                                            5
                                        </td>
                                        <td>
                                            Số sáng kiến, kinh nghiệm được ứng dụng ở trong và ngoài trường được công nhận
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr> 
                                    <tr>
                                        <td>
                                        </td>
                                        <td className="result">
                                            <strong>
                                                TỔNG 3
                                            </strong>
                                        </td>
                                        <td>
                                        </td>
                                        <td colSpan={5} className="result">
                                            ... /20 điểm
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                    </tr>     
                                    <tr>
                                        <td colspan="11">
                                            <strong>
                                                C. CÔNG TÁC CỦA TRƯỞNG/KHOA(20 điểm)</strong>
                                        </td>
                                    </tr>  
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            Số lần tham gia các hoạt động ngoại khóa, học thuật, sinh hoạt chuyên môn của khoa
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr>     
                                    <tr>
                                        <td>
                                            2
                                        </td>
                                        <td>
                                            Số lần tham gia vào việc đánh giá và phát triển chương trình đào tạo, tài liệu học tập của bộ môn, Khoa
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr> 
                                    <tr>
                                        <td>
                                            3
                                        </td>
                                        <td>
                                            Số lần tham gia công tác tuyển sinh của Khoa/Trường
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr> 
                                    <tr>
                                        <td>
                                            4
                                        </td>
                                        <td>
                                            Bí thư Khoa/Phó Bí thư đoàn Khoa/Chủ nghiệm CLB/Giữ vai trò chủ chốt trong sự kiện hoạt động của khoa
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr> 
                                    <tr>
                                        <td>
                                            5
                                        </td>
                                        <td>
                                            Số làn tham gia các hoạt động khác khi được Khoa/Trường điều động
                                        </td>
                                        <td title="Rất không đồng ý" className="check">
                                            <input type="radio" value="vnk1" name="ksur27" id="kvote27_1"/>
                                        </td>
                                        <td title="Không đồng ý" className="check">
                                            <input type="radio" value="vnk2" name="ksur27" id="kvote27_2"/>
                                        </td>
                                        <td title="Phân vân" className="check">
                                            <input type="radio" value="vnk3" name="ksur27" id="kvote27_3"/>
                                        </td>
                                        <td title="Đồng ý" className="check">
                                            <input type="radio" value="vnk4" name="ksur27" id="kvote27_4"/>
                                        </td>
                                        <td title="Hoàn toàn đồng ý" className="check">
                                            <input type="radio" value="vnk5" name="ksur27" id="kvote27_5"/>
                                        </td>
                                        <td className="none">
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                        <td className="upload">
                                            <img className="logo" src={require('../../pages/Photo/Upload.png')} width="30px" height="30px" />
                                        </td>
                                    </tr> 
                                    <tr>
                                        <td>
                                        </td>
                                        <td className="result">
                                            <strong>
                                                TỔNG 4
                                            </strong>
                                        </td>
                                        <td>
                                        </td>
                                        <td colSpan={5} className="result">
                                            ... /20 điểm
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                    </tr>      
                                    <tr>
                                        <td>
                                        </td>
                                        <td className="result">
                                            <strong>
                                                TỔNG 1 + 2 + 3 + 4
                                            </strong>
                                        </td>
                                        <td>
                                        </td>
                                        <td colSpan={5} className="result">
                                            ... /100 điểm
                                        </td>
                                        <td>
                                        </td>
                                        <td>   
                                        </td>
                                    </tr>                    
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
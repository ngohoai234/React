import React, { useEffect, useState } from 'react';
import '../Administrators/Administrators.css';
import DataTecher from '../../Data/Data_Techer.json';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
function Adminitrators() {
  let [data, setData] = useState([]);
  const [select, setselect] = useState('');
  const [selectSemeter, setselectsemeter] = useState('');
  const uniqueYear = [...new Set(DataTecher.map((data) => data.year))];
  const uniqueSemeter = [...new Set(DataTecher.map((data) => data.semester))];
  var count = 1;

  function SwitchCase(props) {
    switch (props.value) {
      case 1:
        return 'Hoàn thành';

      case 2:
        return 'Chưa hoàn thành';

      default:
        return 'Đang kiểm tra';
    }
  }

  function SwitchCaseSemeter(props) {
    switch (props.value) {
      case 1:
        return 'Học kỳ 1';

      case 2:
        return 'Học kỳ 2';

      default:
        return 'Học kỳ 3';
    }
  }

  function handleChange(e) {
    //set state variable with option value
    setselect(e.target.value);
  }

  function handleChangeSemeter(e) {
    setselectsemeter(e.target.value);
  }

  useEffect(() => {
    //Doing filteration on according to select state option
    if (select !== 'ALL' && selectSemeter !== 'ALL') {
      data = DataTecher.filter((dataa) => dataa.year == select && dataa.semester == selectSemeter);
    } else {
      data = DataTecher;
    }
    data = DataTecher;
    //set state variable data after filteration
    setData(data);
  }, [select]);

  return (
    <>
      <div className="ktop">
        <img className="logo" src={require('../../pages/Photo/dntu-logo.png')} />
        <h1>
          Trường Đại Học Công nghệ Đồng Nai
          <br />
          Hệ thống quản lý sinh viên
        </h1>
        <div className="clear"></div>
      </div>
      <div className="body">
        <div>
          <h6>PHÊ DUYỆT ĐÁNH GIÁ RÈN LUYỆN</h6>
          <div class="vl"></div>
        </div>
        <div class="mb-3">
          <div className="select">
            <label class="form-label">Năm học</label>
            <select id="state" onChange={handleChange} class="form-select mb-5">
              <option value="ALL"> ALL </option>
              {uniqueYear.map((unique, i) => {
                return <option value={unique}> {unique} </option>;
              })}
            </select>
          </div>
          <div className="select">
            <label class="form-label">Học kỳ</label>
            <select id="state" onChange={handleChangeSemeter} class="form-select mb-5">
              <option value="ALL"> ALL </option>
              {uniqueSemeter.map((unique, i) => {
                return (
                  <option value={unique}>
                    {' '}
                    <SwitchCaseSemeter value={unique} />{' '}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="table_data">
          <div>
            <h6>DANH SÁCH GIẢNG VIÊN</h6>
            <div class="vl"></div>
          </div>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th width="350 px">Tên giảng viên</th>
                <th>Năm</th>
                <th>Học kỳ</th>
                <th>Khoa</th>
                <th>Điểm giáo viên đã đánh giá</th>
                <th>Xem đánh giá</th>
                <th>Trạng thái</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((datainfo) => (
                <tr>
                  <td>{count++}</td>
                  <td>{datainfo.name}</td>
                  <td>{datainfo.year}</td>
                  <td>{datainfo.semester}</td>
                  <td>{datainfo.faculty}</td>
                  <td>{datainfo.point}</td>
                  <td>Xem đánh giá</td>
                  <td>
                    <SwitchCase value={datainfo.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Adminitrators;

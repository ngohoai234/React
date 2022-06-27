import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../Photo/logo_DNTU.png";
import "../History/History.css"
const data = [
    {STT: "Anom", age: 19, gender: "Male"},
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male"},
  ]
    
  function HistoryForm() {
    return (
      <div className="App">
        <table>
          <tr>
            <th>STT</th>
            <th>Năm học</th>
            <th>Tự đánh giá</th>
            <th>Xếp loại</th>
            <th>Trạng thái</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
              </tr>
            )
          })}
        </table>
      </div>
    );
  }

export default HistoryForm


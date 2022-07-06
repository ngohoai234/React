import React, {useEffect, useState} from "react";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Data1 from '../../Data/Evaluate1_Data.json'
import Data2 from '../../Data/Evaluate2_Data.json'
import Data3 from '../../Data/Evaluate3_Data.json'
import '../Dialog/Dialog.css'
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";

const DialogBox = () => {
    var row_count1 = 1;
    var row_count2 = 1;
    var row_count3 = 1;
    const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <Button variant="outlined" 
              color="primary" onClick={handleClickOpen}>
        Open My Custom Dialog
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>
           Greetings from GeeksforGeeks
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
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
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Close
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
           Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  }
    
  export default DialogBox;
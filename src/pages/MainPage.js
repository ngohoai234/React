import React, { useState} from "react";
//import NavBar from '../Component/NavBar/NavBar';
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from '../pages/Profile/Profile2';
// import EvaluateForm from "../pages/Evaluate/Evaluate";
// import HistoryForm from "../pages/History/History";
//import PractiseForm from "./Manager/Practise/Practise";

function MainForm() {
  return (
    <Profile/>
    // <>
    //   <Router>
    //     <NavBar/>
    //     <Routes>
    //       <Route exact path="/Profile" element={<Profile/>} />
    //       <Route exact path="/Evaluate" element={<EvaluateForm/>}/>
    //       <Route exact path="/History" element={<HistoryForm/>}/>
    //     </Routes>
    //   </Router>
      
    // </>
  );
}

export default MainForm;
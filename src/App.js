import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Todos from './pages/Todos/Todos';
import Navbar from './Component/NavBar/NavBar';
import Login from './pages/LoginForm/LoginForm';
import Profile from './pages/Profile/Profile2';
import EvaluateForm from './pages/Evaluate/Evaluate';
import HistoryForm from './pages/History/History';
import NotFound from './pages/NotFound/NotFound';
const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/Profile" element={<Login/>} />
          <Route exact path="/Evaluate" element={<EvaluateForm/>}/>
          <Route exact path="/History" element={<HistoryForm/>}/>
        </Routes>
      </Router>
      
    </>
  );
};

export default App;

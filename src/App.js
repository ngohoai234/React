import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Navbar />
        <Routes>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/evaluate" element={<EvaluateForm />} />
          <Route exact path="/history" element={<HistoryForm />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

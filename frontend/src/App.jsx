import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import InstagramLogin from './pages/InstagramLogin.jsx';
import Dashboard from "./pages/Dashboard.jsx";

import PersistentLoadingPage from "./pages/PersistentLoadingPage.jsx"
import RevealContent from './pages/RevealContent.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import RevealSteps from './pages/RevealSteps.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<InstagramLogin />} />
        <Route path="/" element={<Dashboard />} />
    
        <Route path="/insights" element={<PersistentLoadingPage />} />
         <Route path="/instagram" element={<RevealSteps></RevealSteps>} />
        <Route path='/reveal-content' element={<RevealContent></RevealContent>}></Route>
        <Route path="/console/v1/terminal" element={<AdminDashboard></AdminDashboard>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import InstagramLogin from './pages/InstagramLogin.jsx';
import Dashboard from "./pages/Dashboard.jsx";

import PersistentLoadingPage from "./pages/PersistentLoadingPage.jsx"
import RevealContent from './pages/RevealContent.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<InstagramLogin />} />
        <Route path="/" element={<Dashboard />} />
    
        <Route path="/insights" element={<PersistentLoadingPage />} />
        <Route path='/reveal-content' element={<RevealContent></RevealContent>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
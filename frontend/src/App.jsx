import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import InstagramLogin from './pages/InstagramLogin.jsx';
import Dashboard from "./pages/Dashboard.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import Loading from "./pages/Loading.jsx"; // ✅ FIXED
import PersistentLoadingPage from "./pages/PersistentLoadingPage.jsx"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<InstagramLogin />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/result/:username" element={<ResultPage />} />
        <Route path="/insights" element={<PersistentLoadingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
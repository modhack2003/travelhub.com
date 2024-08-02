import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Contactus from "./screens/Contactus";
import Maintenance from "./screens/maintenance"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="*" element={<Maintenance/>}  /> 
         </Routes>
    </Router>
  );
};

export default App;

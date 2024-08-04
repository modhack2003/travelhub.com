import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Contactus from "./screens/Contactus";
import Maintenance from "./screens/maintenance"
import Careers from "./screens/careers";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="*" element={<Maintenance/>}  /> 
        <Route path="/Careers" element={<Careers/>}  /> 
         </Routes>
    </Router>
  );
};

export default App;

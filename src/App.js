import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import JoinListPage from "./component/JoinListPage.js/JoinListPage";
import CustomNavbar from "./component/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      {/* <CustomNavbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-list" element={<JoinListPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
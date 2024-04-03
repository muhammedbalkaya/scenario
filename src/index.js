import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./Home/Home";
import ApexChart from "./Home/ApexChart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<ApexChart />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

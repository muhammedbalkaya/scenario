// Home.jsx
import React, { useState, useEffect } from "react";
import "./Home.css";
import ApexChart from "./ApexChart";
import SideBar from "./SideBar";


function Home() {

  return (
    <div className="container1">
      <SideBar></SideBar>
      <ApexChart></ApexChart>
    </div>
  );
}

export default Home;

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import TopNavbar from "./components/Navbar";
import "./Style/style.css";

function App() {
  return (
    <div className="page-content">
      <TopNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

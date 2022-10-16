import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import SignUp from "./pages/signup/SignUp";
import Header from "./components/Header/Header";
import Login from "./pages/login/Login";
import ModulesDashboard from "./pages/moduleDashboard/modulesDashboard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/About" element={<About />} />{" "}
        <Route path="/Signup" element={<SignUp />} />{" "}
        <Route path="/Login" element={<Login />} />{" "}
        <Route path="/Modules" element={<ModulesDashboard />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;

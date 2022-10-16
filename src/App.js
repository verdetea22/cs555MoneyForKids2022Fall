import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import SignUp from "./pages/login/SignUp";
import Header from "./components/Header/Header";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/About" element={<About />} />{" "}
        <Route path="/Signup" element={<SignUp />} />{" "}
        <Route path="/Login" element={<Login />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;

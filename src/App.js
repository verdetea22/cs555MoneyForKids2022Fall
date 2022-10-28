import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import SignUp from "./pages/signup/SignUp";
import Header from "./components/Header/Header";
import Login from "./pages/login/Login";
import ModulesDashboard from "./pages/moduleDashboard/modulesDashboard";
import Module from "./pages/module/module";
import SalesTaxMod from "./pages/moduleDashboard/salesTax/salesTax";
import NotFound from "./pages/moduleNotFound/moduleNotFound"

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
        <Route path="/Modules/Module/:num" element={<Module />} />{" "}
        <Route path="/Modules/not-found" element={<NotFound />} />{" "}
        <Route path="/SalesTaxMod" element={<SalesTaxMod />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;

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
import ChangeBackMod from "./pages/moduleDashboard/changeBack/changeBack";
import FormsMod from "./pages/moduleDashboard/forms/formsMod";
import Dashboard from "./pages/ParentPages/Dashboard";
import ChildDetails from "./pages/ParentPages/ChildDetails";

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
        <Route path="/Modules/Module/*" element={<Module />} />{" "}
        <Route path="/SalesTaxMod" element={<SalesTaxMod />} />{" "}
        <Route path="/ChangeBackMod" element={<ChangeBackMod />} />{" "}
        <Route path="/FormsMod" element={<FormsMod />} />{" "}
        <Route path="/Dashboard" element={<Dashboard />} />{" "}
        <Route path="/ChildDetails" element={<ChildDetails />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;

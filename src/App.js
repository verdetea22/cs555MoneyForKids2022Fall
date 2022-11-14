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
import FormsMod from "./pages/moduleDashboard/forms/formsMod";
import ChangeBackMod from "./pages/moduleDashboard/changeBack/changeBack";
import NotFound from "./pages/moduleNotFound/moduleNotFound";
import Dashboard from "./pages/ParentPages/Dashboard";
import ChildDetails from "./pages/ParentPages/ChildDetails";
import AccountSettings from "./pages/settings/AccountSettings";
import ChangePassword from "./pages/settings/ChangePassword";
import ChangeEmail from "./pages/settings/ChangeEmail";

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
        <Route path="/Modules/Module/:name" element={<Module />} />{" "}
        <Route path="/Modules/not-found" element={<NotFound />} />{" "}
        <Route path="/Modules/SalesTaxMod" element={<SalesTaxMod />} />{" "}
        <Route path="/Modules/ChangeBackMod" element={<ChangeBackMod />} />{" "}
        <Route path="/Modules/FormsMod" element={<FormsMod />} />{" "}
        <Route path="/Dashboard" element={<Dashboard />} />{" "}
        <Route path="/ChildDetails" element={<ChildDetails />} />{" "}
        <Route path="/Settings" element={<AccountSettings />} />{" "}
        <Route path="/ChangePassword" element={<ChangePassword />} />{" "}
        <Route path="/ChangeEmail" element={<ChangeEmail />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;

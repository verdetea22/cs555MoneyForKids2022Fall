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
import ChildDash from "./pages/ChildPages/ChildDash";
import ChildDetails from "./pages/ParentPages/ChildDetails";
import AccountSettings from "./pages/settings/AccountSettings";
import ChangePassword from "./pages/settings/ChangePassword";
import AddChild from "./pages/settings/AddChild";
import ChangeEmail from "./pages/settings/ChangeEmail";
import Reauthenticate from "./pages/settings/Reauthenticate";
import { AuthContext } from "./contexts/AuthContext";
import RequireAuth from "./components/Route/RequireAuth";

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/modules" element={<ModulesDashboard />} />
          <Route path="/modules/module/:name" element={<Module />} />
          <Route path="/modules/not-found" element={<NotFound />} />
          <Route path="/modules/salesTaxMod" element={<SalesTaxMod />} />
          <Route path="/modules/changeBackMod" element={<ChangeBackMod />} />
          <Route path="/modules/formsMod" element={<FormsMod />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/childDash" element={<ChildDash />} />
          <Route path="/childDetails" element={<ChildDetails />} />
          <Route path="/settings" element={<RequireAuth><AccountSettings /></RequireAuth>} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/changeEmail" element={<ChangeEmail />} />
          <Route path="/addChild" element={<AddChild />} />
          <Route path="/reauthenticate/:redirectLink" element={<Reauthenticate />} />
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;

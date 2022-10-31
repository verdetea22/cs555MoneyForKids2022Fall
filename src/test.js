import React from "react";
import { render, screen } from "@testing-library/react";

import Login from "./pages/login/Login";
import Dashboard from "./pages/ParentPages/Dashboard";
import SignUp from "./pages/signup/SignUp";

describe("Login", () => {
    test("renders Login component", () => {
        render(<Login />);

        screen.debug();
    });
});

describe("Dashboard", () => {
    test("renders Dashboard component", () => {
        render(<Dashboard />);

        screen.debug();
    });
});

describe("SignUp", () => {
    test("renders SignUp component", () => {
        render(<SignUp />);

        screen.debug();
    });
});
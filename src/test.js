import React from "react";
import { render, screen } from "@testing-library/react";

import Login from "./pages/login/Login";
import Dashboard from "./pages/ParentPages/Dashboard";

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

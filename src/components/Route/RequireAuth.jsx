import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useLocation, Navigate } from "react-router-dom";

function RequireAuth({ children }) {
    let { user } = useAuth();
    let location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replcae />;
    }

    return children;
}

export default RequireAuth;
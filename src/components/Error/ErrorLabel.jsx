import React from "react";
import { Alert } from "react-bootstrap";

function ErrorLabel({ show, message, onClick, className }) {
    return (<Alert className={className} show={show} variant="danger" dismissible onClick={onClick}>{message}</Alert>);
};

export default ErrorLabel;
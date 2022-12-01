import React from "react";
import { Nav } from "react-bootstrap";

function SidebarItem({ eventKey, keyLabel, isSelected }) {
    return (
        <Nav.Link eventKey={eventKey} className={`${isSelected ? "border-dark border-start border-5" : ""} `}>{keyLabel}</Nav.Link>
    );
}

export default SidebarItem;
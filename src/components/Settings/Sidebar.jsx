import React from "react";

import { Nav } from "react-bootstrap";

function Sidebar({ handleSelect }) {
    

    return (
        <Nav defaultActiveKey="" className="flex-column" onSelect={handleSelect}>
            <Nav.Link eventKey="account" className="border-dark border-start border-5">Account</Nav.Link>
            <Nav.Link eventKey="children">Children</Nav.Link>
            <Nav.Link>Link 1</Nav.Link>
            <Nav.Link>Link 1</Nav.Link>
        </Nav>
    );
}

export default Sidebar;
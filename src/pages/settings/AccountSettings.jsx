import React from "react";
import { Nav } from "react-bootstrap";

function AccountSettings() {
    return (
        <><div>
            <Nav defaultActiveKey="" className="flex-column">
                <Nav.Link>Children</Nav.Link>
                <Nav.Link>Account</Nav.Link>
                <Nav.Link>Link 1</Nav.Link>
                <Nav.Link>Link 1</Nav.Link>
            </Nav>
            </div></>
    );
}

export default AccountSettings;
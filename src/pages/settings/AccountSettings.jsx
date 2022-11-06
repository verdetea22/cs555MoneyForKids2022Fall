import React, { useState } from "react";

import { Container, Nav, Row, Col } from "react-bootstrap";
import AccountPanel from "../../components/Settings/AccountPanel";

function AccountSettings() {

    const [panel, setPanel] = useState(<></>);

    const handleSelect = (eventKey) => {
        if (eventKey === "children") {

        } else if (eventKey === "account") {
            setPanel(<AccountPanel />)
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                <Nav defaultActiveKey="" className="flex-column" onSelect={handleSelect}>
                    <Nav.Link eventKey="account">Account</Nav.Link>
                    <Nav.Link eventKey="children">Children</Nav.Link>
                    <Nav.Link>Link 1</Nav.Link>
                    <Nav.Link>Link 1</Nav.Link>
                </Nav>
                </Col>
                <Col>
                    {panel}
                </Col>
            </Row>
        </Container>
    );
}

export default AccountSettings;
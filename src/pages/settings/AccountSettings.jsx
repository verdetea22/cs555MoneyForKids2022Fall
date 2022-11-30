import React, { useState } from "react";

import { Container, Nav, Row, Col } from "react-bootstrap";
import AccountPanel from "../../components/Settings/AccountPanel";
import AddChildrenPanel from "../../components/Settings/AddChildrenPanel";
import Sidebar from "../../components/Settings/Sidebar";

function AccountSettings() {

    const [panel, setPanel] = useState(<AccountPanel />);

    const handleSelect = (eventKey, event) => {
        console.log(event.target);
        if (eventKey === "children") {
            setPanel(<AddChildrenPanel />)
        } else if (eventKey === "account") {
            setPanel(<AccountPanel />)
        }
    };

    return (
        <Container>
            <Row>
                <Col xs={2}>
                    <Sidebar handleSelect={handleSelect} />
                </Col>
                <Col xs={8}>
                    {panel}
                </Col>
                <Col xs={2}>
                </Col>
            </Row>
        </Container>
    );
}

export default AccountSettings;
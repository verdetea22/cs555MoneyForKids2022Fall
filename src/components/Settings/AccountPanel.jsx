import React from "react";
import { Button, Container, Row } from "react-bootstrap";

function AccountPanel() {
    const redirect= (link) => {
        window.location.href = `/Reauthenticate${link}`;
    } 

    return (
        <Container>
            <Row>
                <div>
                    <h1 className="border-dark border-bottom border-5 py-2">Change Password</h1>
                    <Button onClick={() => redirect("/ChangePassword")}>Change password</Button>
                </div>
            </Row>
            <Row>
                <div>
                    <h1 className="border-dark border-bottom border-5 py-2">Change Email</h1>
                    <Button onClick={() => redirect("/ChangeEmail")}>Change Email</Button>
                </div>
            </Row>
        </Container>
    );
}

export default AccountPanel;
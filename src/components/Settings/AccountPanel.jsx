import React from "react";
import { Button, Container, Row } from "react-bootstrap";

function AccountPanel() {
    const directToChangePasswordPage = () => {
        window.location.href = "/ChangePassword";
    } 
    const directToChangeEmailPage = () => {
        window.location.href = "/ChangeEmail";
    }

    return (
        <Container>
            <Row>
                <div>
                    <h1 className="border-dark border-bottom border-5 py-2">Change Password</h1>
                    <Button onClick={directToChangePasswordPage}>Change password</Button>
                </div>
            </Row>
            <Row>
                <div>
                    <h1 className="border-dark border-bottom border-5 py-2">Change Email</h1>
                    <Button onClick={directToChangeEmailPage}>Change Email</Button>
                </div>
            </Row>
        </Container>
    );
}

export default AccountPanel;
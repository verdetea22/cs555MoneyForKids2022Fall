import React from "react";
import { Button } from "react-bootstrap";

function AddChildrenPanel() {
    const directToChangePasswordPage = () => {
        window.location.href = "/AddChild";
    } 

    return (
        <Container>
            <Row>
                <div>
                    <h1 className="border-dark border-bottom border-5 py-2">Add Child</h1>
                    <Button onClick={directToChangePasswordPage}>Add Child</Button>
                </div>
            </Row>
        </Container>
    );
}

export default AddChildrenPanel;
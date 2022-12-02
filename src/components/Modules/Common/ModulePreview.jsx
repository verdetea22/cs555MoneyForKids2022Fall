import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

const ModulePreview = ({title, description, link}) => {

    return <Card style={{ width: '18rem', margin: '1rem' }}>
                    <Card.Body>
                        <Card.Title className='text-center'>{title}</Card.Title>
                        <Card.Text className='text-center'>{description}</Card.Text>
                    </Card.Body>
                    <Button variant="primary" style={{marginBottom: '0.5rem'}} onClick={() => window.location.href = "modules/module/" + link}>Go!</Button>
                </Card>
}

export default ModulePreview;
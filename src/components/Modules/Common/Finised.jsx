import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Finished  = (props) => {
    return  (
        <Card>
          <Card.Header>Module Complete</Card.Header>
          <Card.Body>
            <Card.Title>{"Great job finishing module " + props.name + "!"}</Card.Title>
            <Card.Text>
              Click the "Return to modules" button to go back to see what modules you have left!
            </Card.Text>
            <Button variant="primary" href="/Modules">Return to modules</Button>
          </Card.Body>
        </Card>
      );
}

export default Finished;
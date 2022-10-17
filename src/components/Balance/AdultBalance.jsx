import React from "react"
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function adultBalance() {
    return <div>
        <Card style = {{ color: "#000" , width: "18rem"}}>
            <Card.Body>
                <Card.Title>                        
                    Balance
                </Card.Title>
                <Card.Text>
                    $1800.00
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
}

export default adultBalance;
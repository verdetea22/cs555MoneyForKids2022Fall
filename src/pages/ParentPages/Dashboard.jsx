import React from "react";
import "./Dashboard.css";
//import { auth } from "../firebase/firebase-config";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import ChildBalance from "../../components/ParentDash/ChildBalance"


//if auth, show dash

function Dashboard(uer) {
    //do we want a sperate check logged in function then call?
    //var user = auth.currentUser;
    // auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //       // User is signed in.
    //       setIsLoggedIn(true);
    //     } else {
    //       // No user is signed in.
    //       setIsLoggedIn(false);
    //     }
    // });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //where user is from db
    let user = {
        "name": "Example Parent",
        "children": [
            {"childName": "Example Child 1", "balance": 123},
            {"childName": "Example Child 2", "balance": 240}
        ]
        
    }

    if(!isLoggedIn){
        setIsLoggedIn(true);
        return(<Navigate to="/Login" />);
    }
    else{
        return(
            //load components
                //for each child in user, return child balance
                //pass child name as props from user
            <div>
                <h1>Hello {user.name}</h1>
                        {user.children.map((child)=>(
                            <ChildBalance  childName={child.childName} balance={child.balance}/>
                        ))}
            </div>
            
        )

    }
    
}

export default Dashboard;
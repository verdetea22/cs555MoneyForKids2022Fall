import React from "react";
import { useState, useContext } from "react";


function ChildDetails(props) {
    //props returns child name, query db from that?
    return(
        <p>{props.childName} Info</p>
    )

}
export default ChildDetails;
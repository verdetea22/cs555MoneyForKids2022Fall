import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import SidebarItem from "./SidebarItem";

function Sidebar({ handleSelect }) {

    const [navItems, setNavItems] = useState([ 
        { 
            eventKey: "account",
            keyLabel: "Account",
            isSelected: true
        },
        {
            eventKey: "children",
            keyLabel: "Children",
            isSelected: false
        }
    ]);

    const select = (eventKey, event) => {

        setNavItems(newItems => newItems.map(item => {

            let isSelected = false
            if (item.eventKey === eventKey) {
                isSelected = true;
            }

            return { ...item, isSelected };
        }));
        handleSelect(eventKey, event);
    }
    

    return (
        <Nav defaultActiveKey="" className="flex-column" onSelect={select}>
            {navItems.map(({ eventKey, keyLabel, isSelected }) => <SidebarItem eventKey={eventKey} keyLabel={keyLabel} isSelected={isSelected} key={eventKey + keyLabel} />)}
        </Nav>
    );
}

export default Sidebar;
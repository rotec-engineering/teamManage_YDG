import React from 'react';
import './SideMenuItem.css';

const SideMenuItem = ({menu, isActive}) => {
    return isActive === true ? (
        <div className="sideMenus">
            <p>{menu.name}</p>
        </div>
    ) : (
        <div className="sideMenus">
            <p>{menu.name}</p>
        </div>
    )
};

export default SideMenuItem;
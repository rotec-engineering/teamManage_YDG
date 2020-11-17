import React, {Component} from 'react';
import './SideMenuItem.css';

class SideMenuItem extends Component {
    render() {
        return this.props.isActive === true ? (
            <div className="sideMenus">
                <p>{this.props.menu.name}</p>
            </div>
        ) : (
            <div className="sideMenus active">
                <p>{this.props.menu.name}</p>
            </div>
        )
    }
}

export default SideMenuItem;
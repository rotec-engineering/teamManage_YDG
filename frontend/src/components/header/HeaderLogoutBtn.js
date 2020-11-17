import React, {Component} from 'react';
import './HeaderLogoutBtn.css';

class HeaderLogoutBtn extends Component {
    render() {
        return (
            <div className="headerLogoutBtn">
                <button className="logoutBtn">logout</button>
            </div>
        );
    }
}

export default HeaderLogoutBtn;
import React, {Component} from 'react';
import './HeaderLogo.css';

class HeaderLogo extends Component {
    render() {
        return (
            <div className="headerLogo">
                <img src={process.env.PUBLIC_URL + '/images/teamIcon.png'} alt='logo img' height="80%"/>
            </div>
        );
    }
}

export default HeaderLogo;
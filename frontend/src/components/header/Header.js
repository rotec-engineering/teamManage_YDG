import React, {Component} from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderName from "./HeaderName";
import HeaderLogoutBtn from "./HeaderLogoutBtn";
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="headerBody">
                <HeaderLogo />
                <HeaderName />
                <HeaderLogoutBtn />
            </header>
        );
    }
}

export default Header;
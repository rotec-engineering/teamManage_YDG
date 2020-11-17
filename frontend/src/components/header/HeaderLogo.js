import React from 'react';
import './HeaderLogo.css';

const HeaderLogo = () => {
    return (
        <div className="headerLogo">
            <img src={process.env.PUBLIC_URL + '/images/teamIcon.png'} alt='logo img' height="80%"/>
        </div>
    );
};

export default HeaderLogo;
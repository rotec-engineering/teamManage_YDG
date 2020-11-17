import React from 'react';
import CheckinDiv from "./checkinDiv/CheckinDiv";
import './Main.css';

const Main = () => {
    return (
        <div className="mainContainer">
            <CheckinDiv />
            <CheckinDiv />
            <CheckinDiv />
            <CheckinDiv />
            <CheckinDiv />
        </div>
    );
};

export default Main;
import React from 'react';
import CheckinTable from "./CheckinTable";
import './CheckinDiv.css';

const CheckinDiv = () => {
    const state = {
        sortation : "내부사용자",
        btnName : "입/퇴실"
    }

    return (
        <div className="checkinDiv">
            <p className="checkinSortation">{state.sortation}</p>
            <button className="removeBtn">X</button>
            <button className="checkinBtn">{state.btnName}</button>

            <CheckinTable />
        </div>
    );
};

export default CheckinDiv;
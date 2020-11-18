import React from 'react';
import ManageTeamTable from "./ManageTeamTable";
import './ManageTeam.css';

const ManageTeam = () => {
    const state = {
        sortation : "팀 관리"
    }

    return (
        <div className="manageTeam">
            <div className="manageTeamDiv">
                <p className="manageTeamTitle">{state.sortation}</p>
                <ManageTeamTable />
            </div>
        </div>
    );
};

export default ManageTeam;
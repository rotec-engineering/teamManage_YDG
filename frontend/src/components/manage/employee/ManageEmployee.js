import React from 'react';
import './ManageEmployee.css';
import ManageTeamTable from "../team/ManageTeamTable";

const ManageEmployee = () => {
    // console.log("wow");
    const state = {
        sortation : "팀 관리"
    }

    return (
        <div className="employeeTable">
            <div className="manageTeamDiv">
                <p className="manageTeamTitle">{state.sortation}</p>
                <img className="temp" src={process.env.PUBLIC_URL + '/images/treeView.jpg'} alt='logo img' height="80%"/>
            </div>
        </div>
    );
};

export default ManageEmployee;
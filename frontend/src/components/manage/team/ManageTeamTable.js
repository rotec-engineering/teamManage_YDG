import React from 'react';
import './ManageTeamTable.css';

const ManageTeamTable = () => {
    const state = {
        name : "내부사용자",
        teamTableTitle : ['팀 명', '팀 역할', '상위 팀', '구분(내부/외부정기/외부임시)', '한계 인원수', '비고'],
        teamTableList : ['정비1', '정비', '로텍엔지니어링', '내부', '20', '인턴']
    }

    const teamTitle = state.teamTableTitle.map(
        (title, index) => {
            if(title === '비고') {
                return (<th key={index} colSpan='2'> {title} </th>);
            } else {
                return (<th key={index}> {title} </th>);
            }
        }
    )
    const teamList = state.teamTableList.map(
        (entity, index) => {
            if(index === state.teamTableList.length - 1) {
                return (<td key={index}> {entity} <button className="cancelBtn">X</button> </td>);
            } else if (index === 2) {
                return (
                    <td key={index}>
                        <select className="selectForm">
                            <option>정비</option>
                            <option>수리</option>
                        </select>
                    </td>
                );
            } else {
                return (<td key={index}> {entity} </td>);
            }
        }
    );

    return (
        <div>
            <table className="ManageTeamTable">
                <thead>
                    <tr>
                        {teamTitle}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {teamList}
                    </tr>
                    <tr>
                        {teamList}
                    </tr>
                    <tr>
                        {teamList}
                    </tr>
                    <tr>
                        {teamList}
                    </tr>
                    <tr>
                        {teamList}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageTeamTable;

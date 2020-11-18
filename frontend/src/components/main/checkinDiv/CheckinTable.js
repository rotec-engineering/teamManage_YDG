import React from 'react';
import './CheckinTable.css';

const CheckinTable = () => {
    const state = {
        name : "내부사용자",
        checkinTitle : ['인솔자', '이름', '회사명', '전화번호', '직책', '입실', '퇴실', '비고'],
        checkinList : ['유동근', '김병탁', '로텍엔지니어링', '010-1234-5678', '인턴', '12:20', '13:40', '울산']
    }

    const checkinTitle = state.checkinTitle.map(
        (title, index) => (<th key={index}> {title} </th>)
    );
    const checkinList = state.checkinList.map(
        (entity, index) => (<td key={index}> {entity} </td>)
    );

    return (
        <div>
            <table className="checkinListTable">
                <thead>
                    <tr>
                        {checkinTitle}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {checkinList}
                    </tr>
                    <tr>
                        {checkinList}
                    </tr>
                    <tr>
                        {checkinList}
                    </tr>
                    <tr>
                        {checkinList}
                    </tr>
                    <tr>
                        {checkinList}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CheckinTable;
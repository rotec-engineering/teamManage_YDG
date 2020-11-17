import React from 'react';
import './CheckinTable.css';

const CheckinTable = () => {
    const state = {
        name : "내부사용자",
        checkinList : ['유동근', '김병탁', '로텍엔지니어링', '010-1234-5678', '인턴', '12:20', '13:40', '울산']
    }

    const checkinTable = state.checkinList.map(
        (name, index) => (<td key={index}> {name} </td>)
    );

    return (
        <div>
            <table className="checkinListTable">
                <thead>
                    <tr>
                        <th>
                            인솔자
                        </th>
                        <th>
                            이름
                        </th>
                        <th>
                            회사명
                        </th>
                        <th>
                            전화번호
                        </th>
                        <th>
                            직책
                        </th>
                        <th>
                            입실
                        </th>
                        <th>
                            퇴실
                        </th>
                        <th>
                            비고
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {checkinTable}
                    </tr>
                    <tr>
                        {checkinTable}
                    </tr>
                    <tr>
                        {checkinTable}
                    </tr>
                    <tr>
                        {checkinTable}
                    </tr>
                    <tr>
                        {checkinTable}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CheckinTable;
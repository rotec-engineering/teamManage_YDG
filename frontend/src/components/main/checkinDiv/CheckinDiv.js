import React, {Component} from 'react';
import CheckinTable from "./CheckinTable";
import './CheckinDiv.css';

class CheckinDiv extends Component {
    state = {
        name : "내부사용자"
    }

    // handleChange = (e) => {
    //     this.setState({
    //         name : e.target.value
    //     });
    // }
    //
    // handleInsert = () => {
    //     this.setState({
    //         checkinList: this.state.names.concat(this.state.name),
    //         name: ''
    //     });
    // }

    render() {
        return (
            <div className="checkinDiv">
                <p className="checkinSortation">{this.state.name}</p>
                <button className="removeBtn">X</button>
                <button className="checkinBtn">입/퇴실</button>

                <CheckinTable />
            </div>
        );
    }
}

export default CheckinDiv;
import React, {Component} from 'react';
import CheckinDiv from "./checkinDiv/CheckinDiv";
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="mainContainer">
                <CheckinDiv />
                <CheckinDiv />
                <CheckinDiv />
                <CheckinDiv />
                <CheckinDiv />
            </div>
        );
    }
}

export default Main;
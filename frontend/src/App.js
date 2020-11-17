import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/header/Header';
import SideMenu from "./components/sideMenu/SideMenu";
import Main from "./components/main/Main";
import ManageEmployee from "./components/manage/employee/manageEmployee";
import ManageTeam from "./components/manage/team/manageTeam";
import './App.css';

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <div>
                    <SideMenu />
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="manageTeam" exact component={ManageTeam} />
                        <Route path="manageEmployee" exact component={ManageEmployee} />
                        {/*<Main />*/}
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
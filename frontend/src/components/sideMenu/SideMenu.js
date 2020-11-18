import React from 'react';
import { Link, useLocation } from "react-router-dom";
import SideMenuItem from "./SideMenuItem";
import './SideMenu.css';

const SideMenu = () => {
    const pathName = useLocation().pathname;
    const menus = [
        {name: '홈', path: '/'},
        {name: '팀원관리', path: '/ManageTeam'},
        {name: '사원관리', path: '/ManageEmployee'}
    ];

    return (
        <div className="sideMenuContainer">
            {menus.map((menu, index) => {
                return (
                    <Link to = {menu.path} key={index} >
                        <SideMenuItem
                            menu = {menu}
                            isActive={pathName === menu.path}	// 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인
                        />
                        {console.log(pathName)}
                    </Link>
                );
            })}
        </div>
    );
};

export default SideMenu;
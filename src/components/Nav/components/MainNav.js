import React from 'react';

import Item from './Item';
import FormSearch from './FormSearch';
import './MainNav.css';

const menuList = ['Nowości', 'Mężczyźni', 'Kobiety', 'Dzieci', 'Super Promocje'];

const MainNav = () => {
    return (
        <div className="navbar navbar-expand-lg">
            <div className="logo">
                <button className="logo"> <strong> wear Team-C </strong></button>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    {menuList.map(item => (<Item content={item} key={`${item}`}/>))}
                </ul>
                <FormSearch/>
            </div>
        </div>
    );
}

export default MainNav;
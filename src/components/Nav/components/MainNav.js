import React, {useState} from 'react';

import Item from './Item';
import FormSearch from './FormSearch';
import HideDiv from './HideDiv';
import './MainNav.css';

const menuList = ['Nowości', 'Mężczyźni', 'Kobiety', 'Dzieci', 'Super Promocje'];

const MainNav = () => {
    const showHideSubmenu = (e) =>{
        setDisplay({display:'block'});
    }
    const hideHideSubmenu = (e) =>{
        setDisplay({display:'none'});
    }
    const [display, setDisplay] = useState({display:'none'});
    return (
        <>
            <div className="navbar navbar-expand-lg">
                <div className="logo">
                    <button className="logo"> <strong> wear Team-C </strong></button>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        {menuList.map(item => (<Item content={item} key={`${item}`} showHideSubmenu={showHideSubmenu} hideHideSubmenu={hideHideSubmenu}/>))}
                    </ul>
                    <FormSearch/>
                </div>
            </div>
            <HideDiv display={display} />
        </>
    );
}

export default MainNav;
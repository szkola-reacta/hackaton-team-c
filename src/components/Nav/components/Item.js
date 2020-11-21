import React from 'react';

import './Item.css';

const Item = ( {content, showHideSubmenu, hideHideSubmenu} ) => {
    return (
        <li onMouseMove={showHideSubmenu} onMouseLeave={hideHideSubmenu} className="nav-item">
           <a className="nav-link" href="#"> {content}</a>
        </li>
    );
}

export default Item;
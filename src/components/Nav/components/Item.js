import React from 'react';

import './Item.css';

const Item = ( {content} ) => {
    return (
        <li className="nav-item">
           <a className="nav-link" href="#"> {content}</a>
        </li>
    );
}

export default Item;
import React from 'react';

import './HideDiv.css'

const HideDiv = ({display}) => {
    return (
        <div className="hideDiv" style={display}>
           <ul>
               <li>
                   <a href="#">Spodnie</a>
                </li>
                <li>
                   <a href="#">Kurtki</a>
                </li>
                <li>
                   <a href="#">Koszule</a>
                </li>
                <li>
                   <a href="#">Bluzki</a>
                </li>
                <li>
                   <a href="#">Skarpety</a>
                </li>
           </ul>
        </div>
    );
}

export default HideDiv;
import React, { useState } from 'react';
import MonthlyItem from './MonthlyItem';

function Monthly(props) {

    const [monthlyItems, setMonthlyItems] = useState([
        "Play Sport", 
        "See Friends", 
        "See Family"
    ])
    return (
        <div className="main-box">
            <div className="list-box">
                <h3 className="subheader">Monthly:</h3>
                <MonthlyItem monthlyItems={monthlyItems}/>
            </div>
        </div>
    );
}

export default Monthly;
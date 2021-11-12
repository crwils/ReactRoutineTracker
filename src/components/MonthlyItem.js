import React from 'react';

function MonthlyItem(props) {
 
    return ( props.monthlyItems.map((item, key) => {
        return (
        <div className="list-item" key={key}>
            <label htmlFor={item}>{item}</label>
            <input type="checkbox" />
        </div>
        )
    })
)
}

export default MonthlyItem;
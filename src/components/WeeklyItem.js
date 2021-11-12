import React from 'react';


function WeeklyItem(props) {

    return ( props.weeklyItems.map((item, key) => {
        return (
        <div className="list-item" key={key}>
            <label htmlFor={item}>{item}</label>
            <input type="checkbox" />
        </div>
        )
    })
)
}

export default WeeklyItem;
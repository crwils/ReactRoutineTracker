import React, { useState } from 'react';

function DailyItem(props) {

    return ( props.dailyItems.map((item, key) => {
                return (
                <div className="list-item" key={key}>
                    <label htmlFor={item}>{item}</label>
                    <input type="checkbox" />
                </div>
                )
            })
    )
}

export default DailyItem;
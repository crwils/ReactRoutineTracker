import React, { useState } from 'react';

function DailyItem(props) {

    return ( props.dailyItems.map((item, key) => {
                return (
                <div className="list-item" key={key}>
                    <label htmlFor={item}>{item}</label>
                    {props.waterConsumption(item)}
                </div>
                )
            })
    )
}

export default DailyItem;
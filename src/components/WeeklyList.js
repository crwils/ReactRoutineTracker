import React, {useState} from 'react';
import WeeklyItem from './WeeklyItem';

function Weekly(props) {

    const [weeklyItems, setWeeklyItems] = useState([
        "Cardio",
        "Read Book",
        "L&D",
        "Floss"
    ]);

    return (
        <div className="main-box">
            <div className="list-box">
                <h3 className="subheader">Weekly:</h3>
                <WeeklyItem weeklyItems={weeklyItems}/>
            </div>
        </div>
    );
}

export default Weekly;
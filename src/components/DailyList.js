import React, {useState} from 'react';
import DailyItem from './DailyItem';


function Daily(props) {

    const [dailyItems, setDailyItems] = useState(["Gratitude", "Gym", "Meditate", "Stretch", "Outside for a walk", "Tea/Coffee", "Veg with each meal", "3 litres of water"]);

    return (
        <div className="main-box">
            <div className="list-box">
                <h3 className="subheader">Daily:</h3>
                <DailyItem dailyItems={dailyItems}/>
            </div>
        </div>
    );
}

export default Daily;
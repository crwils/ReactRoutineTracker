import React, {useState} from 'react';
import DailyItem from './DailyItem';


function Daily(props) {

    const [dailyItems, setDailyItems] = useState(["Gratitude", "Gym", "Meditate", "Duolingo 5 mins", "Stretch", "Outside for a walk", "2x Tea/Coffee", "Veg/fruit with each meal", "Glasses of water"]);
    const [water, setWater] = useState(0);

    function waterConsumption(item) {
        if (item === "Glasses of water") {
            return (
                <>
                    <button type="button" onClick={ () => (setWater(water+0.5)) } >{water}</button>
                </>
            )
        } else {
            return <input type="checkbox" />
        }
    }

    return (
        <div className="main-box">
            <div className="list-box">
                <h3 className="subheader">Daily:</h3>
                <DailyItem dailyItems={dailyItems} waterConsumption={waterConsumption}/>
            </div>
        </div>
    );
}

export default Daily;
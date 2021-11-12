import React from 'react';
import { Date, Header, DailyList, WeeklyList, MonthlyList} from '../assets';


function RoutineBox(props) {



    return (
        <div className="routine-box-container">
            <Header/>
            <Date/>
                <div className="main-list-container">
                    <DailyList/>
                    <WeeklyList/>
                    <MonthlyList/>
                </div>
        </div>
    );
}


export default RoutineBox;
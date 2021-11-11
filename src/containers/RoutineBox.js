import React from 'react';
import { Date, Header, DailyList, WeeklyList, MonthlyList} from '../assets';


function RoutineBox(props) {



    return (
        <div>
            <Header/>
            <Date/>
            <DailyList/>
            <WeeklyList/>
            <MonthlyList/>
            
        </div>
    );
}


export default RoutineBox;
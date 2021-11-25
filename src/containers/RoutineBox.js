import * as React from 'react';
import { Date, Header, DailyList, WeeklyList, MonthlyList} from '../assets';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

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
                <div className="center">
                    <Button variant="contained" className="center">Complete</Button>
                </div>
        </div>
    );
}


export default RoutineBox;
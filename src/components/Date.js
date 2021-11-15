import React from 'react';
import { getCurrentDate } from '../services/DateTime';


function Date(props) {
    

    return (
        <div className="center">
            <h3 className="subheader">{getCurrentDate()}</h3>
        </div>
    );
}

export default Date;
import React from 'react';
import { getCurrentDate } from '../services/DateTime';
import { Typography } from '@mui/material';
import { typography } from '@mui/system';


function Date(props) {
    

    return (
        <div className="center">
            <h3 className="subheader"><Typography variant="h5" component="h3">{getCurrentDate()}</Typography></h3>
        </div>
    );
}

export default Date;
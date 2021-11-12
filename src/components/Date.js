import React from 'react';

function Date(props) {


    const date = {
        currentDateTime: Date().toLocaleString()
    }

    return (
        <div className="center">
            <h3 className="subheader">Thursday 11th November</h3>
            {this.state.currentDateTime}
        </div>
    );
}

export default Date;
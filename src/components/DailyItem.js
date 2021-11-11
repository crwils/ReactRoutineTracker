import React from 'react';

function DailyItem(props) {
    return (
        <div className="daily-item-list">
            <div>
                <label htmlFor="grateful">Gratitude</label>
                <input type="checkbox" />
            </div>
            <div>
                <label htmlFor="gym">Gym</label>
                <input type="checkbox" />
            </div>
            <div>
                <label htmlFor="meditate">Meditate</label>
                <input type="checkbox" />
            </div>
            <div>
                <label htmlFor="stretch">Stretch</label>
                <input type="checkbox" />
            </div>
            <div>
                <label htmlFor="walk">Outside for a walk</label>
                <input type="checkbox" />
            </div>
            <div>
                <label htmlFor="caffeine">Tea/Coffee</label>
                <input type="checkbox" />
            </div>
            <div>
                <label htmlFor="veg">Veg with each meal</label>
                <input type="checkbox" />
            </div>
            <div>
                <label htmlFor="water">3 litres of water</label>
                <input type="checkbox" />
            </div>
        </div>
    );
}

export default DailyItem;
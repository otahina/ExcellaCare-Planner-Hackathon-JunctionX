import React from 'react';
import './CheckCalendar.css';

function CheckCalendar() {
    return (
        <div className="calendar-wrapper">
            <div className="header-wrapper">
                <h3>ExcellaCare Planner</h3>
                <h4>UserName: Dr. Swam</h4>
            </div>
            <h2 className="calendar-header">Check Calendar</h2>
            {/* Here you would typically integrate a full calendar component */}
            <p>Calendar will be displayed here.</p>
        </div>
    );
}

export default CheckCalendar;

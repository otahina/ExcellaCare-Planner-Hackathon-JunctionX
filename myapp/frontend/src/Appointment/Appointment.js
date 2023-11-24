import React from 'react';
import {Routes, Route, Link, useLocation} from 'react-router-dom';
import CheckCalendar from './CheckCalendar/CheckCalendar';
import MakeAppointmentForm from './MakeAppointmentForm/MakeAppointmentForm';
import './Appointment.css';

function Appointment() {
    const location = useLocation();

    return (
        <div className="appointment-wrapper">
            <div className="header-wrapper">
                <h3>ExcellaCare Planner</h3>
                <h4>UserName: Dr. Swam</h4>
            </div>
            <h1 className="appointment-header">Appointment Schedule</h1>
            {location.pathname === '/appointment' && (
                <nav>
                    <Link to="check-calendar" className="custom-button">Check Calendar</Link>
                    <Link to="make-appointment" className="custom-button">Make an Appointment</Link>
                </nav>
            )}
            <Routes>
                <Route path="check-calendar" element={<CheckCalendar/>}/>
                <Route path="make-appointment" element={<MakeAppointmentForm/>}/>
            </Routes>
        </div>
    );
}

export default Appointment;

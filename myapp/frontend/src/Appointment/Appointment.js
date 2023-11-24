import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './Appointment.css';
import CheckCalendar from './CheckCalendar/CheckCalendar';
import MakeAppointmentForm from './MakeAppointmentForm/MakeAppointmentForm';

function Appointment() {
    return (
        <div className="appointment-wrapper">
            <div className="header-wrapper">
                <h3>Quality Care App</h3>
                <h4>UserName: Dr. Swam</h4>
            </div>
            <h1 className="appointment-header">Appointment Scheduler</h1>
            <nav>
                <Link to="check-calendar" className="custom-button">Check Calendar</Link>
                <Link to="make-appointment" className="custom-button">Make an Appointment</Link>
            </nav>
            <Routes>
                <Route path="check-calendar" element={<CheckCalendar/>}/>
                <Route path="make-appointment" element={<MakeAppointmentForm/>}/>
            </Routes>
        </div>
    );
}

export default Appointment;

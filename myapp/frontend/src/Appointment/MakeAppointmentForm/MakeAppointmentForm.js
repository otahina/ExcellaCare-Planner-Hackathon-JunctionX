import React, { useState } from 'react';
import './MakeAppointmentForm.css';


function MakeAppointmentForm() {
    const [appointmentData, setAppointmentData] = useState({
        name: '',
        date: '',
        time: ''
    });

    const handleChange = (e) => {
        setAppointmentData({
            ...appointmentData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(appointmentData);
        // Here you can add logic to send data to the server or handle the appointment logic
    };

    return (
        <form className="appointment-form" onSubmit={handleSubmit}>
            <h2>Make an Appointment</h2>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={appointmentData.name}
                onChange={handleChange}
            />

            <label htmlFor="date">Date:</label>
            <input
                type="date"
                id="date"
                name="date"
                value={appointmentData.date}
                onChange={handleChange}
            />

            <label htmlFor="time">Time:</label>
            <input
                type="time"
                id="time"
                name="time"
                value={appointmentData.time}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default MakeAppointmentForm;

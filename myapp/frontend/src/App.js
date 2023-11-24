import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Appointment from './Appointment/Appointment';
import MachineInfo from './MachineInfo/MachineInfo';
import CheckCalendar from './Appointment/CheckCalendar/CheckCalendar';
import MakeAppointmentForm from './Appointment/MakeAppointmentForm/MakeAppointmentForm';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <div className="App">
                        <h1>ExcellaCare Planner</h1>
                        <div className="custom-button-group">
                            <Link to="/appointment" className="custom-button">Appointment Scheduler</Link>
                            <br/>
                            <Link to="/machine-info" className="custom-button">Machine Information</Link>
                        </div>
                    </div>
                }/>
                <Route path="/appointment" element={<Appointment/>}/>
                <Route path="/appointment/check-calendar" element={<CheckCalendar/>}/>
                <Route path="/appointment/make-appointment" element={<MakeAppointmentForm/>}/>
                <Route path="/machine-info" element={<MachineInfo/>}/>
            </Routes>
        </Router>
    );
}

export default App;

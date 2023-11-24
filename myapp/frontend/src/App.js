import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Appointment from './Appointment/Appointment';
import MachineInfo from './MachineInfo/MachineInfo';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <div className="App">
                        <h1>Quality Care App</h1>
                        <div className="custom-button-group">
                            <Link to="/appointment" className="custom-button">Appointment Scheduler</Link>
                            <br/>
                            <Link to="/machine-info" className="custom-button">Machine Information</Link>
                        </div>
                    </div>
                }/>
                <Route path="/appointment" element={<Appointment/>}/>
                <Route path="/machine-info" element={<MachineInfo/>}/>
            </Routes>
        </Router>
    );
}

export default App;

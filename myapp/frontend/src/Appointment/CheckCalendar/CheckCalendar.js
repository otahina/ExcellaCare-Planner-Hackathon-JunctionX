import React, {useState} from 'react';
import './CheckCalendar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBed} from '@fortawesome/free-solid-svg-icons';

function CheckCalendar() {

    // For Selected Recommended Button
    const [selectedEvents, setSelectedEvents] = useState([]);

    // New state to track events moved to the right box
    const [movedEvents, setMovedEvents] = useState([]);

    const [isChoosePatientsActive, setIsChoosePatientsActive] = useState(false);

    const [showMachineDetails, setShowMachineDetails] = useState(false);

    const handleEventClick = (clickedEvent) => {
        const eventId = `${clickedEvent.title}-${clickedEvent.day}-${clickedEvent.startTime}-${clickedEvent.endTime}`;

        // Toggle selection for Recommended events
        if (clickedEvent.title === 'Recommended') {
            setSelectedEvents(prevSelectedEvents => {
                const isEventSelected = prevSelectedEvents.includes(eventId);
                if (isEventSelected) {
                    return prevSelectedEvents.filter(id => id !== eventId);
                } else {
                    return [...prevSelectedEvents, eventId];
                }
            });
        }

        // Move other events when isChoosePatientsActive is true
        if (isChoosePatientsActive) {
            setMovedEvents(prevEvents => {
                const isEventMoved = prevEvents.some(event =>
                    event.title === clickedEvent.title && event.day === clickedEvent.day
                );
                if (isEventMoved) return prevEvents;
                return [...prevEvents, clickedEvent];
            });
        }
    };

    const handleChoosePatientsClick = () => {
        setIsChoosePatientsActive(prevState => !prevState);
    };

    const events = [
        // Unique
        {startTime: 10, endTime: 10.25, day: 0, title: 'PID: 001', type: 'unique'},
        {startTime: 10, endTime: 10.25, day: 1, title: 'PID: 001', type: 'unique'},
        {startTime: 10, endTime: 10.25, day: 2, title: 'PID: 001', type: 'unique'},
        {startTime: 10, endTime: 10.25, day: 3, title: 'PID: 001', type: 'unique'},
        {startTime: 10, endTime: 10.25, day: 4, title: 'PID: 001', type: 'unique'},

        {startTime: 9, endTime: 9.25, day: 0, title: 'PID: 002', type: 'unique'},
        {startTime: 9, endTime: 9.25, day: 1, title: 'PID: 002', type: 'unique'},
        {startTime: 9, endTime: 9.25, day: 2, title: 'PID: 002', type: 'unique'},
        {startTime: 9, endTime: 9.25, day: 3, title: 'PID: 002', type: 'unique'},
        {startTime: 9, endTime: 9.25, day: 4, title: 'PID: 002', type: 'unique'},

        {startTime: 9.1, endTime: 9.35, day: 0, title: 'PID: 003', type: 'unique'},
        {startTime: 9.35, endTime: 9.6, day: 1, title: 'PID: 003', type: 'unique'},
        {startTime: 9.35, endTime: 9.6, day: 2, title: 'PID: 003', type: 'unique'},
        {startTime: 9.35, endTime: 9.6, day: 3, title: 'PID: 003', type: 'unique'},
        {startTime: 9.1, endTime: 9.35, day: 4, title: 'PID: 003', type: 'unique'},

        {startTime: 9.35, endTime: 9.6, day: 0, title: 'PID: 005', type: 'unique'},
        {startTime: 9.1, endTime: 9.35, day: 1, title: 'PID: 005', type: 'unique'},
        {startTime: 9.1, endTime: 9.35, day: 2, title: 'PID: 005', type: 'unique'},
        {startTime: 9.1, endTime: 9.35, day: 3, title: 'PID: 005', type: 'unique'},
        {startTime: 9.35, endTime: 9.6, day: 4, title: 'PID: 005', type: 'unique'},

        {startTime: 10.6, endTime: 10.9, day: 0, title: 'PID: 004', type: 'unique'},
        {startTime: 10.6, endTime: 10.9, day: 1, title: 'PID: 004', type: 'unique'},
        {startTime: 10.6, endTime: 10.9, day: 2, title: 'PID: 004', type: 'unique'},
        {startTime: 10.6, endTime: 10.9, day: 3, title: 'PID: 004', type: 'unique'},
        {startTime: 10.6, endTime: 10.9, day: 4, title: 'PID: 004', type: 'unique'},

        {startTime: 9.6, endTime: 9.9, day: 0, title: 'PID: 006', type: 'unique'},
        {startTime: 9.6, endTime: 9.9, day: 1, title: 'PID: 006', type: 'unique'},
        {startTime: 9.6, endTime: 9.9, day: 2, title: 'PID: 006', type: 'unique'},
        {startTime: 9.6, endTime: 9.9, day: 3, title: 'PID: 006', type: 'unique'},
        {startTime: 9.6, endTime: 9.9, day: 4, title: 'PID: 006', type: 'unique'},

        {startTime: 10.1, endTime: 10.4, day: 0, title: 'PID: 007', type: 'unique'},
        {startTime: 10.5, endTime: 10.75, day: 1, title: 'PID: 007', type: 'unique'},
        {startTime: 10.5, endTime: 10.75, day: 2, title: 'PID: 007', type: 'unique'},
        {startTime: 10.5, endTime: 10.75, day: 3, title: 'PID: 007', type: 'unique'},
        {startTime: 10.1, endTime: 10.4, day: 4, title: 'PID: 007', type: 'unique'},

        // TrueBeam
        {startTime: 9.0, endTime: 9.25, day: 0, title: 'PID: 008', type: 'trueBeam'},
        {startTime: 9.0, endTime: 9.25, day: 0, title: 'PID: 009', type: 'trueBeam'},
        {startTime: 9, endTime: 9.25, day: 1, title: 'PID: 008', type: 'trueBeam'},
        {startTime: 9, endTime: 9.25, day: 1, title: 'PID: 009', type: 'trueBeam'},
        {startTime: 9, endTime: 9.25, day: 2, title: 'PID: 008', type: 'trueBeam'},
        {startTime: 9, endTime: 9.25, day: 2, title: 'PID: 009', type: 'trueBeam'},
        {startTime: 9, endTime: 9.25, day: 3, title: 'PID: 008', type: 'trueBeam'},
        {startTime: 9, endTime: 9.25, day: 3, title: 'PID: 009', type: 'trueBeam'},
        {startTime: 9, endTime: 9.25, day: 4, title: 'PID: 008', type: 'trueBeam'},
        {startTime: 9, endTime: 9.25, day: 4, title: 'PID: 009', type: 'trueBeam'},

        {startTime: 9.1, endTime: 9.35, day: 0, title: 'PID: 010', type: 'trueBeam'},
        {startTime: 9.1, endTime: 9.35, day: 1, title: 'PID: 010', type: 'trueBeam'},
        {startTime: 9.1, endTime: 9.35, day: 2, title: 'PID: 010', type: 'trueBeam'},
        {startTime: 9.1, endTime: 9.35, day: 3, title: 'PID: 010', type: 'trueBeam'},
        {startTime: 9.1, endTime: 9.35, day: 4, title: 'PID: 010', type: 'trueBeam'},
        {startTime: 9.1, endTime: 9.35, day: 0, title: 'PID: 011', type: 'trueBeam'},
        {startTime: 9.1, endTime: 9.35, day: 1, title: 'PID: 011', type: 'trueBeam'},
        {startTime: 9.1, endTime: 9.35, day: 2, title: 'PID: 011', type: 'trueBeam'},
        {startTime: 9.1, endTime: 9.35, day: 3, title: 'PID: 011', type: 'trueBeam'},
        {startTime: 9.1, endTime: 9.35, day: 4, title: 'PID: 011', type: 'trueBeam'},

        {startTime: 9.5, endTime: 9.75, day: 0, title: 'PID: 012', type: 'trueBeam'},
        {startTime: 9.5, endTime: 9.75, day: 1, title: 'PID: 012', type: 'trueBeam'},
        {startTime: 9.5, endTime: 9.75, day: 2, title: 'PID: 012', type: 'trueBeam'},
        {startTime: 9.5, endTime: 9.75, day: 3, title: 'PID: 012', type: 'trueBeam'},
        {startTime: 9.5, endTime: 9.75, day: 4, title: 'PID: 012', type: 'trueBeam'},

        {startTime: 9.6, endTime: 9.85, day: 0, title: 'PID: 013', type: 'trueBeam'},
        {startTime: 9.6, endTime: 9.85, day: 1, title: 'PID: 013', type: 'trueBeam'},
        {startTime: 9.6, endTime: 9.85, day: 2, title: 'PID: 013', type: 'trueBeam'},
        {startTime: 9.6, endTime: 9.85, day: 3, title: 'PID: 013', type: 'trueBeam'},
        {startTime: 9.6, endTime: 9.85, day: 4, title: 'PID: 013', type: 'trueBeam'},
        {startTime: 9.6, endTime: 9.85, day: 0, title: 'PID: 014', type: 'trueBeam'},
        {startTime: 9.6, endTime: 9.85, day: 1, title: 'PID: 014', type: 'trueBeam'},
        {startTime: 9.6, endTime: 9.85, day: 2, title: 'PID: 014', type: 'trueBeam'},
        {startTime: 9.6, endTime: 9.85, day: 3, title: 'PID: 014', type: 'trueBeam'},
        {startTime: 9.6, endTime: 9.85, day: 4, title: 'PID: 014', type: 'trueBeam'},

        {startTime: 9.78, endTime: 10.05, day: 0, title: 'PID: 015', type: 'trueBeam'},
        {startTime: 9.78, endTime: 10.05, day: 1, title: 'PID: 015', type: 'trueBeam'},
        {startTime: 9.78, endTime: 10.05, day: 2, title: 'PID: 015', type: 'trueBeam'},
        {startTime: 9.78, endTime: 10.05, day: 3, title: 'PID: 015', type: 'trueBeam'},
        {startTime: 9.78, endTime: 10.05, day: 4, title: 'PID: 015', type: 'trueBeam'},

        {startTime: 10.05, endTime: 10.3, day: 0, title: 'PID: 016', type: 'trueBeam'},
        {startTime: 10.05, endTime: 10.3, day: 1, title: 'PID: 016', type: 'trueBeam'},
        {startTime: 10.05, endTime: 10.3, day: 2, title: 'PID: 016', type: 'trueBeam'},
        {startTime: 10.05, endTime: 10.3, day: 3, title: 'PID: 016', type: 'trueBeam'},
        {startTime: 10.05, endTime: 10.3, day: 4, title: 'PID: 016', type: 'trueBeam'},
        {startTime: 10.05, endTime: 10.3, day: 0, title: 'PID: 017', type: 'trueBeam'},
        {startTime: 10.05, endTime: 10.3, day: 1, title: 'PID: 017', type: 'trueBeam'},
        {startTime: 10.05, endTime: 10.3, day: 2, title: 'PID: 017', type: 'trueBeam'},
        {startTime: 10.05, endTime: 10.3, day: 3, title: 'PID: 017', type: 'trueBeam'},
        {startTime: 10.05, endTime: 10.3, day: 4, title: 'PID: 017', type: 'trueBeam'},
        {startTime: 10.6, endTime: 11, day: 1, title: 'PID: 019', type: 'trueBeam'},
        {startTime: 10.6, endTime: 11, day: 2, title: 'PID: 019', type: 'trueBeam'},
        {startTime: 10.6, endTime: 11, day: 3, title: 'PID: 019', type: 'trueBeam'},
        {startTime: 10.6, endTime: 11, day: 4, title: 'PID: 019', type: 'trueBeam'},


        // VitalBeam
        {startTime: 10.2, endTime: 10.5, day: 2, title: 'PID: 020', type: 'vitalBeam'},
        {startTime: 10.2, endTime: 10.5, day: 3, title: 'PID: 020', type: 'vitalBeam'},
        {startTime: 10.2, endTime: 10.5, day: 4, title: 'PID: 020', type: 'vitalBeam'},
        {startTime: 10.2, endTime: 10.5, day: 2, title: 'PID: 021', type: 'vitalBeam'},
        {startTime: 10.2, endTime: 10.5, day: 3, title: 'PID: 021', type: 'vitalBeam'},
        {startTime: 10.2, endTime: 10.5, day: 4, title: 'PID: 021', type: 'vitalBeam'},
        {startTime: 9.0, endTime: 9.25, day: 0, title: 'PID: 022', type: 'vitalBeam'},
        {startTime: 9.0, endTime: 9.25, day: 1, title: 'PID: 022', type: 'vitalBeam'},
        {startTime: 9.0, endTime: 9.25, day: 2, title: 'PID: 022', type: 'vitalBeam'},
        {startTime: 9.0, endTime: 9.25, day: 3, title: 'PID: 022', type: 'vitalBeam'},
        {startTime: 9.0, endTime: 9.25, day: 4, title: 'PID: 022', type: 'vitalBeam'},
        {startTime: 9.0, endTime: 9.25, day: 0, title: 'PID: 030', type: 'vitalBeam'},
        {startTime: 9.0, endTime: 9.25, day: 1, title: 'PID: 030', type: 'vitalBeam'},
        {startTime: 9.0, endTime: 9.25, day: 2, title: 'PID: 030', type: 'vitalBeam'},
        {startTime: 9.0, endTime: 9.25, day: 3, title: 'PID: 030', type: 'vitalBeam'},
        {startTime: 9.0, endTime: 9.25, day: 4, title: 'PID: 030', type: 'vitalBeam'},
        {startTime: 9.1, endTime: 9.35, day: 0, title: 'PID: 044', type: 'vitalBeam'},
        {startTime: 9.1, endTime: 9.35, day: 1, title: 'PID: 044', type: 'vitalBeam'},
        {startTime: 9.1, endTime: 9.35, day: 2, title: 'PID: 044', type: 'vitalBeam'},
        {startTime: 9.1, endTime: 9.35, day: 3, title: 'PID: 044', type: 'vitalBeam'},
        {startTime: 9.1, endTime: 9.35, day: 4, title: 'PID: 044', type: 'vitalBeam'},
        {startTime: 9.1, endTime: 9.35, day: 0, title: 'PID: 031', type: 'vitalBeam'},
        {startTime: 9.1, endTime: 9.35, day: 1, title: 'PID: 031', type: 'vitalBeam'},
        {startTime: 9.1, endTime: 9.35, day: 2, title: 'PID: 031', type: 'vitalBeam'},
        {startTime: 9.1, endTime: 9.35, day: 3, title: 'PID: 031', type: 'vitalBeam'},
        {startTime: 9.55, endTime: 9.8, day: 0, title: 'PID: 035', type: 'vitalBeam'},
        {startTime: 9.55, endTime: 9.8, day: 1, title: 'PID: 035', type: 'vitalBeam'},
        {startTime: 9.55, endTime: 9.8, day: 2, title: 'PID: 035', type: 'vitalBeam'},
        {startTime: 9.55, endTime: 9.8, day: 3, title: 'PID: 035', type: 'vitalBeam'},
        {startTime: 9.55, endTime: 9.8, day: 4, title: 'PID: 035', type: 'vitalBeam'},
        {startTime: 9.55, endTime: 9.8, day: 0, title: 'PID: 037', type: 'vitalBeam'},
        {startTime: 9.55, endTime: 9.8, day: 1, title: 'PID: 037', type: 'vitalBeam'},
        {startTime: 9.55, endTime: 9.8, day: 2, title: 'PID: 037', type: 'vitalBeam'},
        {startTime: 9.55, endTime: 9.8, day: 3, title: 'PID: 037', type: 'vitalBeam'},
        {startTime: 9.55, endTime: 9.8, day: 4, title: 'PID: 037', type: 'vitalBeam'},
        {startTime: 9.26, endTime: 9.6, day: 1, title: 'PID: 038', type: 'vitalBeam'},
        {startTime: 9.26, endTime: 9.6, day: 2, title: 'PID: 038', type: 'vitalBeam'},
        {startTime: 9.26, endTime: 9.6, day: 3, title: 'PID: 038', type: 'vitalBeam'},
        {startTime: 9.26, endTime: 9.6, day: 4, title: 'PID: 038', type: 'vitalBeam'},
        {startTime: 10.5, endTime: 10.75, day: 4, title: 'PID: 058', type: 'vitalBeam'},
        {startTime: 10.5, endTime: 10.75, day: 0, title: 'PID: 058', type: 'vitalBeam'},
        {startTime: 10.5, endTime: 10.75, day: 1, title: 'PID: 058', type: 'vitalBeam'},
        {startTime: 10.5, endTime: 10.75, day: 2, title: 'PID: 058', type: 'vitalBeam'},
        {startTime: 10.5, endTime: 10.75, day: 3, title: 'PID: 058', type: 'vitalBeam'},
        {startTime: 10.5, endTime: 10.75, day: 4, title: 'PID: 058', type: 'vitalBeam'},
        {startTime: 10.5, endTime: 10.75, day: 0, title: 'PID: 059', type: 'vitalBeam'},
        {startTime: 10.5, endTime: 10.75, day: 1, title: 'PID: 059', type: 'vitalBeam'},
        {startTime: 10.5, endTime: 10.75, day: 2, title: 'PID: 059', type: 'vitalBeam'},
        {startTime: 10.5, endTime: 10.75, day: 3, title: 'PID: 059', type: 'vitalBeam'},

        // Recommended Time
        {startTime: 10.5, endTime: 10.75, day: 0, title: 'Recommended', type: 'trueBeam'},
        {startTime: 10.5, endTime: 10.75, day: 1, title: 'Recommended', type: 'trueBeam'},
        {startTime: 10.5, endTime: 10.75, day: 2, title: 'Recommended', type: 'trueBeam'},
        {startTime: 10.5, endTime: 10.75, day: 3, title: 'Recommended', type: 'trueBeam'},
        {startTime: 10.5, endTime: 10.75, day: 4, title: 'Recommended', type: 'trueBeam'},
        {startTime: 9.5, endTime: 9.75, day: 0, title: 'Recommended', type: 'trueBeam'},
        {startTime: 9.5, endTime: 9.75, day: 1, title: 'Recommended', type: 'trueBeam'},
        {startTime: 9.5, endTime: 9.75, day: 2, title: 'Recommended', type: 'trueBeam'},
        {startTime: 9.5, endTime: 9.75, day: 3, title: 'Recommended', type: 'trueBeam'},
        {startTime: 9.5, endTime: 9.75, day: 4, title: 'Recommended', type: 'trueBeam'},
        {startTime: 9.26, endTime: 9.6, day: 0, title: 'Recommended', type: 'vitalBeam'},
        {startTime: 9.26, endTime: 9.6, day: 1, title: 'Recommended', type: 'vitalBeam'},
        {startTime: 9.26, endTime: 9.6, day: 2, title: 'Recommended', type: 'vitalBeam'},
        {startTime: 9.26, endTime: 9.6, day: 3, title: 'Recommended', type: 'vitalBeam'},
        {startTime: 9.26, endTime: 9.6, day: 4, title: 'Recommended', type: 'vitalBeam'},
        {startTime: 9.76, endTime: 10.2, day: 4, title: 'Recommended', type: 'vitalBeam'},
        {startTime: 9.76, endTime: 10.2, day: 3, title: 'Recommended', type: 'vitalBeam'},
        {startTime: 9.76, endTime: 10.2, day: 2, title: 'Recommended', type: 'vitalBeam'},
        {startTime: 9.76, endTime: 10.2, day: 1, title: 'Recommended', type: 'vitalBeam'},
        {startTime: 9.76, endTime: 10.2, day: 0, title: 'Recommended', type: 'vitalBeam'},

    ];

    const [selectedMachine, setSelectedMachine] = useState('trueBeam');

    const handleMachineSelect = (machineType) => {
        setSelectedMachine(machineType);
    };

    // Filter events based on the selected machine
    const filteredEvents = events.filter(event => event.type === selectedMachine);


    const times = [];
    for (let hour = 9; hour <= 11; hour++) {
        times.push(`${hour}:00`);
        times.push(`${hour}:15`);
        times.push(`${hour}:30`);
        times.push(`${hour}:45`);
    }

    const machineDetailsMapping = {
        trueBeam: ['TrueBeam 1: Status: Working', 'TrueBeam 2: Status: Working'],
        vitalBeam: ['VitalBeam 1: Status: Maintenance within 3 days', 'VitalBeam 2: Status: Working'],
        unique: ['Unique 1: Status: Working']
    };

    const machineColorMapping = {
        'TrueBeam 1: Status: Working': '#8ccfff',
        'TrueBeam 2: Status: Working': '#007bff',
        'VitalBeam 1: Status: Maintenance within 3 days': '#ffff8c',
        'VitalBeam 2: Status: Working': 'yellow',
        'Unique 1: Status: Working': 'lightgreen'
    };

    const defaultColor = 'gray';

    const grid = times.map(time => {
        const timeParts = time.split(':');
        let decimalTime = parseInt(timeParts[0], 10);
        decimalTime += timeParts[1] === '15' ? 0.25 : timeParts[1] === '30' ? 0.5 : timeParts[1] === '45' ? 0.75 : 0;

        return (
            <div className="time-slot" key={time}>
                <span className="time">{time}</span>
                <div className="day-slots">
                    {Array.from({length: 5}).map((_, dayIndex) => {
                        const dayEvents = filteredEvents.filter(event =>
                            decimalTime >= event.startTime &&
                            decimalTime < event.endTime &&
                            event.day === dayIndex &&
                            !movedEvents.some(movedEvent =>
                                movedEvent.title === event.title && movedEvent.day === event.day)
                        );

                        return (
                            <div className="day-slot" key={dayIndex}>
                                {dayEvents.map((event, eventIndex) => {
                                    const eventTop = ((event.startTime - 9) * 4) * 20;
                                    const eventHeight = (event.endTime - event.startTime) * 2 * 80;
                                    // Calculate the left position based on the index to avoid overlap
                                    const eventLeft = eventIndex * (100 / dayEvents.length);
                                    // Calculate the width to give space for multiple events
                                    const eventWidth = Math.min(50, 100 / dayEvents.length);

                                    const eventClass = (event, eventIndex) => {
                                        const eventId = `${event.title}-${event.day}-${event.startTime}-${event.endTime}`;
                                        return `event ${event.type} ${eventIndex === 0 ? 'first' : 'second'} 
                                            ${event.title === 'Recommended' ? 'recommended' : ''} 
                                            ${selectedEvents.includes(eventId) ? 'selected' : ''}`;
                                    };


                                    return (
                                        <div
                                            key={event.title}
                                            className={eventClass(event, eventIndex)}
                                            style={{
                                                top: `${eventTop}px`,
                                                left: `${eventLeft}%`,
                                                height: `${eventHeight}px`,
                                                width: `${eventWidth}%`,
                                                color: (event.title === 'PID: 016' || event.title === 'PID: 037') ? 'red' : 'black',
                                            }}
                                            onClick={() => handleEventClick(event)}
                                        >
                                            {(event.title === 'PID: 016' || event.title === 'PID: 037') && (
                                                <FontAwesomeIcon icon={faBed}/>
                                            )}
                                            {event.title}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    });

    return (
        <div className="calendar-container">
            <div className="header-wrapper">
                <h3>ExcellaCare Planner: Time Schedule</h3>
                <h4 className="username">UserName: Dr. Swam</h4>
            </div>
            <div className="content-wrapper">
                <div className="calendar-main">
                    <h4>Select Machine</h4>
                    <div className="machine-color">
                        {/* Buttons to select machine */}
                        <button
                            onClick={() => handleMachineSelect('trueBeam')}
                            className={`button true-beam-color ${selectedMachine === 'trueBeam' ? 'active' : ''}`}
                        >
                            TrueBeam
                        </button>
                        <button
                            onClick={() => handleMachineSelect('vitalBeam')}
                            className={`button vital-beam-color ${selectedMachine === 'vitalBeam' ? 'active' : ''}`}
                        >
                            VitalBeam
                        </button>
                        <button
                            onClick={() => handleMachineSelect('unique')}
                            className={`button unique-color ${selectedMachine === 'unique' ? 'active' : ''}`}
                        >
                            Unique
                        </button>
                    </div>
                    <p className="machine-info">
                        Technical Info
                        <button className="toggle-button" onClick={() => setShowMachineDetails(prev => !prev)}>
                            {showMachineDetails ? '▲' : '▼'}
                        </button>
                    </p>
                    {showMachineDetails && (
                        <div className="machine-detail">
                            {machineDetailsMapping[selectedMachine]?.map((machineName, index) => (
                                <p key={index}
                                   style={{
                                       backgroundColor: machineColorMapping[machineName] || defaultColor,
                                       padding: '0.5em',
                                       marginRight: '0.5em',
                                       fontSize: '15px',
                                       fontWeight: '600',
                                       borderRadius: '0.5em'
                                   }}
                                >
                                    {machineName}
                                </p>
                            ))}
                            <p className="pid-info">PID(Patient ID)'s text color is black > Patients, red > Inpatients</p>
                        </div>
                    )}
                    <div className="calendar-header">
                        <div className="time-header">Time</div>
                        {['1 Mon', '2 Tue', '3 Wed', '4 Thu', '5 Fri'].map(day => (
                            <div className="date-header" key={day}>{`11/${day}`}</div>
                        ))}
                    </div>
                    <div className="calendar-grid">
                        {grid}
                    </div>
                </div>
                <div className="right-box">
                    <h3>Pending appointments</h3>
                    <div className="right-box-box patient-data">
                        <h3>Patient: Peter Doe</h3>
                        <h5 className="recommended-machine">Recommended:</h5>
                        <div className="machine-color-patient">
                            <p className="true-beam-color-for-patient">TrueBeam</p>
                            <p className="vital-beam-color-for-patient">VitalBeam</p>
                        </div>
                        <p>Type of Cancer: Pelvis</p>
                        <p>Cancer Stage: 3</p>
                        <p>Fraction Number: 23</p>
                    </div>
                    <h3>Excluded Patient</h3>
                    <div className="right-box-box exclude-patient">
                        <button className={`start-button ${isChoosePatientsActive ? 'start-button-active' : ''}`}
                                onClick={handleChoosePatientsClick}>Choose patients
                        </button>
                        {/* Render moved events here */}
                        {movedEvents.map(event => (
                            <div key={event.title} className={`moved-event ${event.type}`}>
                                {event.title}
                            </div>
                        ))}
                    </div>
                    <button className="confirm">Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default CheckCalendar;

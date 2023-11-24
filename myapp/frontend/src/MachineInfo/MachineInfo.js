import React, {useState} from 'react';
import './MachineInfo.css';

function MachineInfo() {
    const [isOutOfService, setIsOutOfService] = useState(false);

    // Function to handle the out of service toggle
    const toggleOutOfService = () => {
        setIsOutOfService(!isOutOfService);

        // Here you would also handle the database update
        // For example, sending the new status to the backend
        // This is where you would implement the database data sending logic
    };

    // TODO: Implement the useEffect hook to fetch machine data from the backend
    /*    // State to store machine data
        const [machines, setMachines] = useState([]);

        useEffect(() => {
            // Function to fetch machine data from the backend
            const fetchMachineData = async () => {
                try {
                    // Replace with your actual API endpoint
                    const response = await fetch('https://your-backend-api/machines');
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    setMachines(data); // Set the machine data in state
                } catch (error) {
                    console.error("Could not fetch machine data: ", error);
                }
            };*/

    return (

        <div className="machine-info-wrapper">
            <div className="header-wrapper">
                <h3>Quality Care App</h3>
                <h4>UserName: Dr. Swam</h4>
            </div>
            <h1 className="machine-info-header">Machine Information</h1>
            <button className="update-button">Update</button>
            <div className="machine-container">
                <div className="machine">
                    <h3>TrueBeam No.1</h3>
                    <button
                        className={`out-of-service-button ${isOutOfService ? 'active' : ''}`}
                        onClick={toggleOutOfService}>
                        {isOutOfService ? 'Set as In Service' : 'Set as Out of Service'}
                    </button>
                </div>
                <div className="machine">TrueBeam No.2</div>
                <div className="machine">VitalBeam No.1</div>
                <div className="machine"> VitalBeam No.2</div>
                <div className="machine">Unique</div>
            </div>
        </div>
    )
        ;
}

export default MachineInfo;

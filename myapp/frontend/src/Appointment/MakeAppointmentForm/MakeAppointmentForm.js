import React, {useState} from 'react';
import './MakeAppointmentForm.css';
import Select from 'react-select';

function MakeAppointmentForm() {
    const [appointmentData, setAppointmentData] = useState({
        patientName: '',
        cancerType: '',
        cancerStage: '',
        treatmentStartDate: '',
        treatmentEndDate: ''
    });

    const cancerTypeOptions = [
        {value: 'craniospinal', label: 'Craniospinal'},
        {value: 'breast', label: 'Breast'},
        {value: 'breast_special', label: 'Breast Special'},
        {value: 'head_and_neck', label: 'Head and Neck'},
        {value: 'abdomen', label: 'Abdomen'},
        {value: 'pelvis', label: 'Pelvis'},
        {value: 'crane', label: 'Crane'},
        {value: 'lung', label: 'Lung'},
        {value: 'lung_special', label: 'Lung Special'},
        {value: 'whole_brain', label: 'Whole Brain'},
    ];

    const cancerStageOptions = [
        {value: '1', label: 'Stage 1'},
        {value: '2', label: 'Stage 2'},
        {value: '3', label: 'Stage 3'},
        {value: '4', label: 'Stage 4'},
    ];

    const handleChange = (e) => {
        setAppointmentData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = '/api/appointments/find';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // If you need authorization, include your token in the headers
                    // 'Authorization': 'Bearer YOUR_TOKEN_HERE'
                },
                body: JSON.stringify(appointmentData), // Convert the React state to a JSON string
            });

            if (!response.ok) {
                // If the response has HTTP status code which is not in the range 200-299
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            // Handle the response data as needed
        } catch (error) {
            console.error("Could not send the appointment data: ", error);
            // Handle the error as needed
        }
    };


    return (
        <div className="main-container">
            <div className="header-wrapper">
                <h3>ExcellaCare Planner</h3>
                <h4>UserName: Dr. Swam</h4>
            </div>

            <div className="content-wrapper">
                {/* Left Side: Appointment Form */}
                <div className="appointment-form-section">
                    <h2>Make Appointment</h2>
                    <form className="appointment-form" onSubmit={handleSubmit}>
                        <label htmlFor="patientName">Patient Name:</label>
                        <input
                            type="text"
                            id="patientName"
                            name="patientName"
                            value={appointmentData.patientName}
                            onChange={handleChange}
                        />

                        <label htmlFor="cancerType">Type of Cancer:</label>
                        <Select
                            id="cancerType"
                            name="cancerType"
                            value={cancerTypeOptions.find(option => option.value === appointmentData.cancerType)}
                            onChange={handleChange}
                            options={cancerTypeOptions}
                        />

                        <label htmlFor="cancerStage">Cancer Stage:</label>
                        <Select
                            id="cancerStage"
                            name="cancerStage"
                            value={cancerStageOptions.find(option => option.value === appointmentData.cancerStage)}
                            onChange={handleChange}
                            options={cancerStageOptions}
                        />

                        <label htmlFor="treatmentStartDate">Treatment Start Date:</label>
                        <input
                            type="date"
                            id="treatmentStartDate"
                            name="treatmentStartDate"
                            value={appointmentData.treatmentStartDate}
                            onChange={handleChange}
                        />

                        <label htmlFor="treatmentEndDate">Treatment End Date:</label>
                        <input
                            type="date"
                            id="treatmentEndDate"
                            name="treatmentEndDate"
                            value={appointmentData.treatmentEndDate}
                            onChange={handleChange}
                        />

                        <button type="submit">Search Dates</button>
                    </form>
                </div>

                {/* Right Side: Search Results */}
                <div className="search-result-section">
                    <h2>Results</h2>
                    <div className="search-result-box"></div>
                </div>
            </div>
        </div>
    );
}

export default MakeAppointmentForm;

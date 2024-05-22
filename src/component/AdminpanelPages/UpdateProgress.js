import React from 'react';
import './AppointmentForm.css';

const UpdateProgress = ({ onClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log("Form submitted");
        onClose();
    };

    return (
        <div className="appointment-form">
            <form onSubmit={handleSubmit}>
                <h3>Update Progress</h3>
                <div>
                    <label>Car Number</label>
                    <input type="text" name="date" required />
                </div>
                <div>
                    <label>Step:</label>
                    <input type="text" name="date" required />
                </div>
                
                <button className='form-submit' type="submit">Submit</button>
                <button className='form-submit' type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default UpdateProgress;
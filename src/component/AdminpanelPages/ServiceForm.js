import React from 'react';
import './ServiceForm.css';

const ServiceForm = ({ onClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log("Form submitted");
        onClose();
    };

    return (
        <div className="appointment-form">
            <form onSubmit={handleSubmit}>
                <h3>Add Service</h3>
                <div>
                    <label>Name:</label>
                    <input type="text" name="text" required />
                </div>
                <div>
                    <label>Charges:</label>
                    <input type="Number" name="Number" required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" required></textarea>
                </div>
                <button type="submit">Submit</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default ServiceForm;
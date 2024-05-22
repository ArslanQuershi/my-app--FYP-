import React from 'react';
import './AppointmentForm.css';

const RescheduleAppointment = ({ onClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log("Form submitted");
        onClose();
    };

    return (
        <div className="appointment-form">
            <form onSubmit={handleSubmit}>
                <h3>Reschedule Appointment</h3>
                <div>
                    <label>Appointment_id:</label>
                    <input type="text" name="date" required />
                </div>
                <div>
                    <label>Car Number:</label>
                    <input type="number" name="date" required />
                </div>
                
                <div>
                    <label>Date:</label>
                    <input type="date" name="date" required />
                </div>
                <div>
                    <label>Time:</label>
                    <input type="time" name="time" required />
                </div>
                <label for="cars">Choose a car:</label>

                 <select name="Services" id="cars" required >
                  <option value="Auto Detailling">Basic wash & Wax</option>
                  <option value="Creamic Coating">Interior Detailling</option>
                  <option value="Engine Detailing">Exterion Detailling</option>
                <option value="Paint Protection Film">Complete Auto Detailing</option>
                <option value="Auto Detailling">3 Month Creamic Coating</option>
                  <option value="Creamic Coating">1 Year Creamic Coating</option>
                  <option value="Engine Detailing">3 Year Creamic Coating</option>
                <option value="Paint Protection Film">5 Year Creamic Coating</option>
                <option value="Auto Detailling">Engine Bay Cleaning</option>
                  <option value="Creamic Coating">Complete Engine Detailing</option>
                  <option value="Engine Detailing">Partial Front (PPF)</option>
                <option value="Paint Protection Film">Full Front (PPF)</option>
                <option value="Auto Detailling">Track package (PPF)</option>
                  <option value="Creamic Coating">Complete Body (PPF)</option>
                 
                 </select> <br/>
                {/* <div>
                    <label>Description:</label>
                    <textarea name="description" required></textarea>
                </div> */}
                <button className='form-submit' type="submit">Submit</button>
                <button className='form-submit' type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default RescheduleAppointment;

import React, { useState } from 'react';
import './AppointmentForm.css';
import axios from 'axios';

const UpdateProgress = ({ onClose, progressData }) => {
    const [formData, setFormData] = useState({
        inspection: progressData.inspection || false,
        wash: progressData.wash || false,
        detailing: progressData.detailing || false,
        final_touches: progressData.final_touches|| false,
        completion: progressData.completion || false,
        name:progressData.name,
        email:progressData.email,
        phone:progressData.phone,
        service_type:progressData.service_type,
        service_package:progressData.service_package,
        price:progressData.price,
    });



    const handleChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: checked,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/Updateprogress/${progressData.id}`, {
                ...formData,
                inspection: formData.inspection ? 1 : 0,
                wash: formData.wash ? 1 : 0,
                detailing: formData.detailing ? 1 : 0,
                final_touches: formData.final_touches ? 1 : 0,
                completion: formData.completion ? 1 : 0,
            });
            console.log('Response from API:', response.data);
            alert('Progress Updated Successfully');
            window.location.reload();

        } catch (error) {
            console.error('Error updating progress:', error);
        }
    };

    return (
        <div className="update-progress-form">
            <h3>Update Progress</h3>
            <form onSubmit={handleSubmit}>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Phone: {formData.phone}</p>
                <p>Service Type: {formData.service_type}</p>
                <p>Service Package: {formData.service_package}</p>
                <p>Price: {formData.price}</p>
                <label>
                    Inspection:
                    <input
                        type="checkbox"
                        name="inspection"
                        checked={formData.inspection}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Wash:
                    <input
                        type="checkbox"
                        name="wash"
                        checked={formData.wash}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Detailing:
                    <input
                        type="checkbox"
                        name="detailing"
                        checked={formData.detailing}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Final Touches:
                    <input
                        type="checkbox"
                        name="final_touches"
                        checked={formData.final_touches}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Completion :
                    <input
                        type="checkbox"
                        name="completion"
                        checked={formData.completion}
                        onChange={handleChange}
                    />
                </label>


                <button type="submit">Update</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default UpdateProgress;

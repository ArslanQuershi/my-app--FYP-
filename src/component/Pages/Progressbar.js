 import React, { useContext, useState, useEffect } from 'react';
import Modal from 'react-modal';
import {UserContext} from './UserContext';
import axios from 'axios';

function Progressbar() {

    const { userId } = useContext(UserContext);
    const [track, setTrack] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (track) {

            axios.get(`http://127.0.0.1:8000/api/Getappointments/${userId}`)
                .then(response => {
                    console.log('Appointments fetched:', response.data.appointments);
                    setAppointments(response.data.appointments);
                })
                .catch(error => {
                    setError('Failed to fetch appointments.');
                    console.error(error);
                });
        }
    }, [track, userId]);

    const handleAppointmentClick = (appointment) => {
        setSelectedAppointment(appointment);
        setTrack(false);
    };

    const renderProgressBar = () => {
        if (!selectedAppointment) {
            return null;
        }

        const { inspection, wash, detailing, final_touches, completion } = selectedAppointment;
        console.log('Selected appointment progress:', { inspection, wash, detailing,final_touches, completion });

        return (

            <section className="step-wizard">
                <ul className="step-wizard-list">
                    <li className="step-wizard-item ">
                        <span className={`progress-count ${inspection ? 'progress-count1' : ''}`}>1</span>
                        <span className="progress-label">Inspection</span>
                    </li>
                    <li className="step-wizard-item ">
                        <span className={`progress-count ${wash ? 'progress-count1' : ''}`}>2</span>
                        <span className="progress-label">Interior & Exterior Wash</span>
                    </li>
                    <li className="step-wizard-item">
                        <span className={`progress-count ${detailing ? 'progress-count1' : ''}`}>3</span>
                        <span className="progress-label">Detailing Services</span>
                    </li>
                    <li className="step-wizard-item">
                        <span className={`progress-count ${final_touches ? 'progress-count1' : ''}`}>4</span>
                        <span className="progress-label">Final Touches</span>
                    </li>
                    <li className="step-wizard-item">
                        <span className={`progress-count ${completion ? 'progress-count1' : ''}`}>5</span>
                        <span className="progress-label">Completion</span>
                    </li>
                </ul>
            </section>

        );
    };

    return (
        <>
            <div id='back-ground'>
                <div id='progress-form'>
                    <img src='./Pictures/corollabackground.jpeg' alt='Progress Background'/>
                    <div id='Progress-content'>
                        <h1>Progress <span>Tracking</span></h1>
                        <h2>You can track the progress of your Car.</h2>
                        <button id='checking-progress-btn' onClick={() => setTrack(true)}>Track Progress:</button>
                    </div>
                    <Modal className='cancel-appoint' isOpen={track}>
                        <h4>Progress Tracking</h4>
                        {error && <p>{error}</p>}
                        {appointments.map(appointment => (
                            <button className='sub-service-btn'
                                key={appointment.id}
                                onClick={() => handleAppointmentClick(appointment)}
                            >
                                <p>Name: {appointment.name.charAt(0).toUpperCase() + appointment.name.slice(1)} </p>
                                  <p>Service Type:  {appointment.service_type.charAt(0).toUpperCase() + appointment.service_type.slice(1)}</p>
                               <p>Service package: {appointment.service_package.charAt(0).toUpperCase() + appointment.service_package.slice(1)}</p>
                               <p>Price: {appointment.price}</p>
                            </button>
                        ))}
                        <button id='close' onClick={() => setTrack(false)}>X</button>
                    </Modal>
                </div>
               <h2 style={{marginBottom: '0px',paddingTop: '20px'}} id='before-steper'>Our Working Steps:</h2>
                {renderProgressBar()}
            </div>
        </>
    );
}

export default Progressbar;

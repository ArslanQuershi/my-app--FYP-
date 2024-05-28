import React, { useState, useEffect } from 'react';
import './AppointmentForm.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Modal from 'react-modal';
import UpdateProgress from './UpdateProgress';

const AppointForm = ({ onClose }) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [progressModalOpen, setProgressModalOpen] = useState(false);
    const [selectedProgress, setSelectedProgress] = useState(null);
    const [updateProgressOpen, setUpdateProgressOpen] = useState(false);
    const [appointFormOpen, setAppointFormOpen] = useState(true);


    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/appointmentsentry');
            console.log('Appointments fetched:', response.data.appointment);
            if (Array.isArray(response.data.appointment)) {
                setContacts(response.data.appointment);
            } else {
                console.error('Unexpected response structure:', response.data.appointment);
                setError('Unexpected response structure');
            }
        } catch (err) {
            console.error('Error fetching appointments:', err);
            setError('Error fetching appointments');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteAppointment = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/Delappointments/${id}`);
                alert('Appointment deleted');
                fetchAppointments();
            } catch (err) {
                console.error('Error deleting appointment:', err);
                setError('Error deleting appointment');
            }
        } else {
            console.log('Appointment deletion cancelled');
        }
    };

    const handleEditAppointment = (appointment) => {
        setSelectedAppointment(appointment);
        setIsEditing(true);

    };

    const handleUpdateAppointment = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/updateappoint/${selectedAppointment.id}`, selectedAppointment);
            console.log('Appointment updated:', response.data);
            setContacts(prevAppointments => prevAppointments.map(appointment =>
                appointment.id === selectedAppointment.id ? response.data.appointment : appointment
            ));
            setIsEditing(false);
            setSelectedAppointment(null);
        } catch (error) {
            console.error('Error updating appointment:', error);
            setError('Error updating appointment');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedAppointment(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckProgress = (appointment) => {
        setSelectedProgress(appointment);
        setProgressModalOpen(true);

    };

    const handleOpenUpdateProgress = () => {
        setUpdateProgressOpen(true);
        setAppointFormOpen(false);
        setProgressModalOpen(false)


    };
    const columns = [
        { name: 'Name', selector: row => row.name, sortable: true, grow: 3 },
        { name: 'Email', selector: row => row.email, sortable: true, grow: 5 },
        { name: 'Phone', selector: row => row.phone, grow: 3 },
        { name: 'Car Model', selector: row => row.car_model, grow: 1 },
        { name: 'Car Year', selector: row => row.car_year, grow: 1 },
        { name: 'Date', selector: row => row.appointment_data, grow: 3 },
        { name: 'Time', selector: row => row.appointment_time, grow: 2 },
        { name: 'Service type', selector: row => row.service_type, grow: 4 },
        { name: 'Package', selector: row => row.service_package, grow: 5 },
        { name: 'Price', selector: row => row.price, grow: 2 },
        {
            cell: (row) => <button onClick={() => handleEditAppointment(row)}>Edit</button>,
            button: true,
            ignoreRowClick: true,
            allowOverflow: true,
            buttonStyle: { backgroundColor: 'transparent', color: 'blue', border: 'none', cursor: 'pointer' },
            grow: 2,
        },
        {
            cell: (row) => <button onClick={() => handleDeleteAppointment(row.id)}>Delete</button>,
            button: true,
            ignoreRowClick: true,
            allowOverflow: true,
            buttonStyle: { backgroundColor: 'transparent', color: 'red', border: 'none', cursor: 'pointer' },
            grow: 2,
        },
        {
            cell: (row) => <button onClick={() => handleCheckProgress(row)}>Check Status</button>,
            button: true,
            ignoreRowClick: true,
            allowOverflow: true,
            buttonStyle: { backgroundColor: 'transparent', color: 'green', border: 'none', cursor: 'pointer' },
            grow: 3,
        }
    ];

    return (
        <div className="appointment-form">
            {!isEditing && !progressModalOpen && !updateProgressOpen ? (
                <>
                    <h3>Appointment Entries</h3>
                    <DataTable
                        columns={columns}
                        data={contacts}
                        progressPending={loading}
                        pagination
                        highlightOnHover
                        customStyles={{
                            headRow: {
                                style: {
                                    backgroundColor: '#f2f2f2',
                                    borderBottom: '2px solid #dee2e6',
                                },
                            },
                            headCells: {
                                style: {
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                },
                            },
                            rows: {
                                style: {
                                    fontSize: '14px',
                                },
                            },
                        }}
                    />
                    <form onSubmit={fetchAppointments}>
                        <button className='form-submit' type="submit" disabled={loading}>
                            {loading ? 'Fetching...' : 'Fetch Appointment Entries'}
                        </button>
                        <button className='form-submit' type="button" onClick={onClose}>Cancel</button>
                        {error && <p className="error">{error}</p>}
                    </form>
                </>
            ) : (
                isEditing && selectedAppointment && (
                        <div className="form3">
                            <h3>Edit Appointment</h3>
                            <form onSubmit={handleUpdateAppointment}>
                                <label>
                                    Name:
                                    <input
                                        type="text"
                                        name="name"
                                        value={selectedAppointment.name}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label>
                                    Email:
                                    <input
                                        type="email"
                                        name="email"
                                        value={selectedAppointment.email}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label>
                                    Phone:
                                    <input
                                        type="text"
                                        name="phone"
                                        value={selectedAppointment.phone}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label>
                                    Car Model:
                                    <input
                                        type="text"
                                        name="car_model"
                                        value={selectedAppointment.car_model}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label>
                                    Car Year:
                                    <input
                                        type="text"
                                        name="car_year"
                                        value={selectedAppointment.car_year}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label>
                                    Date:
                                    <input
                                        type="date"
                                        name="appointment_date"
                                        value={selectedAppointment.appointment_data}
                                        onChange={handleChange}
                                    />
                                </label>
                                <label>
                                    Time:
                                    <input
                                        type="time"
                                        name="appointment_time"
                                        value={selectedAppointment.appointment_time}
                                        onChange={handleChange}
                                    />
                                </label><br />
                                <button type="submit">Update Appointment</button><br /><br />
                                <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                            </form>
                        </div>
                    )
            )}

            {(progressModalOpen && selectedProgress) && (
                <div className="progress-details">
                    <h3>Progress Details</h3>
                    <p>{selectedProgress.name}</p>
                    <p>{selectedProgress.email}</p>
                    <p>{selectedProgress.service_type}</p>
                    <p>{selectedProgress.service_package}</p>
                    <p><strong>Inspection:</strong> {selectedProgress.inspection ? 'Completed' : 'Pending'}</p>
                    <p><strong>Wash:</strong> {selectedProgress.wash ? 'Completed' : 'Pending'}</p>
                    <p><strong>Detailing:</strong> {selectedProgress.detailing ? 'Completed' : 'Pending'}</p>
                    <p><strong>Final Touches:</strong> {selectedProgress.final_touches ? 'Completed' : 'Pending'}</p>
                    <p><strong>Completion:</strong> {selectedProgress.completion ? 'Completed' : 'Pending'}</p>
                    <button type="button" onClick={() => setProgressModalOpen(false)}>Close</button>
                    <button type="button" onClick={() => {
                        handleOpenUpdateProgress();
                    }}>Update Progress</button>
                </div>
            )}
            {updateProgressOpen && (
                <UpdateProgress onClose={() => setUpdateProgressOpen(false)} progressData={selectedProgress} />
            )}

        </div>
    );
};

export default AppointForm;

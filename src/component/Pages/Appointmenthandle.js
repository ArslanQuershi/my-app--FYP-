import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';
import DataTable from 'react-data-table-component';
import Model from "react-modal";

function Appointmenthandle() {
    const [appointments, setAppointments] = useState([]);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [formVisible, setIsEditing] = useState(false);
    const { userId } = useContext(UserContext);

    const fetchAppointments = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/Getappointments/${userId}`);
            console.log('Appointments fetched:', response.data.appointments);
            setAppointments(response.data.appointments);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    const handleDeleteAppointment = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await axios.delete(`http://127.0.0.1:8000/api/Delappointments/${id}`);
            alert('Appointment deleted');
            setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment.id !== id));
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
            setAppointments(prevAppointments => prevAppointments.map(appointment =>
                appointment.id === selectedAppointment.id ? response.data.appointment : appointment
            ));
            setIsEditing(false);
            setSelectedAppointment(null);
        } catch (error) {
            console.error('Error updating appointment:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedAppointment(prevState => ({ ...prevState, [name]: value }));
    };

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            grow: 1,
        },
        {
            name: 'Email',
            selector: row => row.email,
            grow: 3,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            grow: 1,
        },
        {
            name: 'Car Model',
            selector: row => row.car_model,
            grow: 1,
        },
        {
            name: 'Car Year',
            selector: row => row.car_year,
            grow: 1,
        },
        {
            name: 'Date',
            selector: row => row.appointment_data,
            grow: 2,
        },
        {
            name: 'Time',
            selector: row => row.appointment_time,
            grow: 1,
        },
        {
            name: 'Service type',
            selector: row => row.service_type,
            grow: 2,
        },
        {
            name: 'Package',
            selector: row => row.service_package,
            grow: 2,
        },
        {
            name: 'Price',
            selector: row => row.price,
            grow: 1,
        },
        {
            cell: (row) => <button onClick={() => handleEditAppointment(row)}>Edit</button>,
            button: true,
            ignoreRowClick: true,
            allowOverflow: true,
            buttonStyle: { backgroundColor: 'transparent', color: 'blue', border: 'none', cursor: 'pointer' },
            grow: 1,
        },
        {
            cell: (row) => <button onClick={() => handleDeleteAppointment(row.id)}>Delete</button>,
            button: true,
            ignoreRowClick: true,
            allowOverflow: true,
            buttonStyle: { backgroundColor: 'transparent', color: 'red', border: 'none', cursor: 'pointer' },
            grow: 1,
        }
    ];

    return (
        <>
            <h2 style={{marginTop: '10px'}}>ABOUT US</h2><br/>
            <div className='container1'>
                <div className='content'>
                    <h3>
                        <span>Appointments</span> Listing
                    </h3>
                    <p>Here you can see all your appointments</p>
                    <button  className='sub-service-btn'
                             onClick={fetchAppointments}>Fetch Appointments</button><br />
                    <DataTable
                        columns={columns}
                        data={appointments}
                        noHeader
                        defaultSortField="name"
                        pagination
                        highlightOnHover
                        customStyles={{
                            headRow: {
                                style: {
                                    backgroundColor: '#f2f2f2',
                                    borderBottom: '5px solid #dee2e6',
                                },
                            },
                            headCells: {
                                style: {
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    color: 'red',
                                },
                            },
                            rows: {
                                style: {
                                    fontSize: '14px',
                                },
                            },
                            columns: {
                                style: {
                                    maxWidth: '500px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                },
                            },
                            pagination: {
                                style: {
                                    borderTop: '1px solid #dee2e6',
                                    paddingTop: '20px',
                                    paddingBottom: '20px',
                                },
                            },
                        }}
                    />
                </div>
            </div>
            <Model className='model' isOpen={formVisible}>

            {formVisible && (
                <div className="form3">
                    <h3>Edit Appointment</h3>
                    <form className="form3"
                          onSubmit={handleUpdateAppointment}>
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
                                name="appointment_data"
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
                        </label><br/>

                        <button type="submit">Update Appointment</button><br/><br/>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </form>
                </div>
            )}
            </Model>
            </>
    );
}

export default Appointmenthandle;

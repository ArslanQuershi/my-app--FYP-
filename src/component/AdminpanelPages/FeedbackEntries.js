import React, { useState } from 'react';
import './AppointmentForm.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const FeedbackEntries = ({ onClose }) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchContact = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/feedbackentry');
            console.log('feedback fetched:', response.data.feedback);
            if (Array.isArray(response.data.feedback)) {
                setContacts(response.data.feedback);
            } else {
                console.error('Unexpected response structure:', response.data.feedback);
                setError('Unexpected response structure');
            }
        } catch (err) {
            console.error('Error fetching contacts:', err);
            setError('Error fetching contacts');
        } finally {
            setLoading(false);
        }
    };

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Rating',
            selector: row => row.rating,
            sortable: true,
        },
        {
            name: 'Feedback',
            selector: row => row.feedback,
            sortable: true,
        },
        {
            name: 'Submission Time',
            selector: row => new Date(row.created_at).toLocaleString(),
            sortable: true,
        },
    ];

    return (
        <div className="appointment-form">
            <h3>Feedback Entries</h3>
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
            <form onSubmit={fetchContact}>

                <button className='form-submit' type="submit" disabled={loading}>
                    {loading ? 'Fetching...' : 'Fetch Feedback Entries'}
                </button>
                <button className='form-submit' type="button" onClick={onClose}>Cancel</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default FeedbackEntries;

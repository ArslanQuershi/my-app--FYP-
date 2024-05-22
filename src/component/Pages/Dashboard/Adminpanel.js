
import React, { useState } from 'react';
import './Adminpanel.css';
import AppointmentForm from '../../AdminpanelPages/AppointmentForm'
import ServiceForm from '../../AdminpanelPages/ServiceForm';
import UpdateProgress from '../../AdminpanelPages/UpdateProgress';
import RescheduleAppointment from '../../AdminpanelPages/RescheduleAppointment';


function Adminpanel ()  {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [reschedule, setreschedule] = useState(false);
  const [Serviceform, setServiceform] = useState(false);
  const [Progress, setProgress] = useState(false);


  const handleAddAppointmentClick = () => {
    setIsFormVisible(true);
  };
  const handleRescheduleAppointmentClick = () => {
    setreschedule(true);
  };
  const handleAddServiceClick = () => {
    setServiceform(true);
  };
  const handleUpdateProgressClick = () => {
    setProgress(true);
  };


  const handleCloseForm = () => {
    setIsFormVisible(false);
  };
  const handleCloseRescheduleForm = () => {
    setreschedule(false);
  };
  const handleCloseServiceForm = () => {
    setServiceform(false);
  };
  const handleCloseUpdateProgress = () => {
    setProgress(false);
  };


  return (
    <>
      <div className="admin-panel">
        <div className="sidebar">
          <h3><i className="fa-solid fa-user-tie"></i><span>A</span>dmin</h3>
          <ul>
            <li><a href="#"><i className="fa-solid fa-rectangle-list"></i>Dashboard</a></li>
            <li><a href="#" onClick={handleAddAppointmentClick}><i className="fa-solid fa-calendar-days"></i>Add Appointment</a></li>
            <li><a href="#"><i className="fa-solid fa-eye"></i>View Appointment</a></li>
            <li><a href="#" onClick={handleRescheduleAppointmentClick}><i className="fa-solid fa-calendar-days"></i>Reschedule Appointment</a></li>
            <li><a href="#" onClick={handleUpdateProgressClick}><i className="fa-solid fa-arrows-rotate"></i>Update Progress</a></li>
            <li><a href="#"onClick={handleAddServiceClick}><i className="fa-solid fa-calendar-days"></i>Add Services</a></li>
            <li><a href="#"><i className="fa-solid fa-eye"></i>View Contact</a></li>
          </ul>
        </div>
        <div className='Panel-nav'>
          <nav>
            <h3>Dashboard</h3>
            
          </nav>
        </div>
        <div className="dashboard-content">
         
          {/* Content of each section will be rendered here */}
          {isFormVisible && <AppointmentForm onClose={handleCloseForm} />}
          {reschedule && <RescheduleAppointment onClose={handleCloseRescheduleForm} />}
          {Serviceform && <ServiceForm onClose={handleCloseServiceForm} />}
          {Progress && <UpdateProgress onClose={handleCloseUpdateProgress} />}
        </div>
      </div>
    </>
  );
}

export default Adminpanel;


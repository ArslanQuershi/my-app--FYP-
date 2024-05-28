
import React, { useState } from 'react';
import './Adminpanel.css';
import AppointmentForm from '../../AdminpanelPages/AppointmentForm'
import UpdateProgress from '../../AdminpanelPages/UpdateProgress';
import RescheduleAppointment from '../../AdminpanelPages/RescheduleAppointment';

import ContactusEntries from "../../AdminpanelPages/ContactusEntries";
import FeedbackEntries from "../../AdminpanelPages/FeedbackEntries";


function Adminpanel ()  {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [Contactus, setContactus] = useState(false);
const [Feedback,setFeedback] = useState(false);

  const handleAddAppointmentClick = () => {
  setFeedback(false);
    setContactus(false);
    setIsFormVisible(true);
  };



  const handleContactusEntries = () => {
    setIsFormVisible(false);
    setFeedback(false);
    setContactus(true);

  }
  const handleFeedback = () => {
 setIsFormVisible(false);
 setContactus(false);
    setFeedback(true);
  }


  const handleCloseForm = () => {
    setIsFormVisible(false);
  };



  const handleCloseContactusEntries = () => {

    setContactus(false);
  }
  const handleCloseFeedback = () => {
    setFeedback(false);
  }



  return (
    <>
      <div className="admin-panel">
        <div className="sidebar">
          <h3><i className="fa-solid fa-user-tie"></i><span>A</span>dmin</h3>

          <ul>

            <li><a href="#" onClick={handleAddAppointmentClick}><i className="fa-solid fa-eye"></i>Manage
              Appointment</a></li>
            <li><a href="#" onClick={handleFeedback}><i className="fa-solid fa-comment"></i>View
              Feedback</a></li>
            <li><a href="#" onClick={handleContactusEntries}><i className="fa-solid fa-phone-volume"></i>View
              Contact Us</a></li>
          </ul>
        </div>
        <div className='Panel-nav'>
          <nav>
            <h3>DashBoard</h3>
          </nav>
        </div>
        <div className="dashboard-content">

        {isFormVisible && <AppointmentForm onClose={handleCloseForm} />}
          {Feedback && <FeedbackEntries onClose={handleCloseFeedback} />}
          {Contactus && <ContactusEntries onClose={handleCloseContactusEntries}/>}
        </div>
      </div>
    </>
  );
}

export default Adminpanel;


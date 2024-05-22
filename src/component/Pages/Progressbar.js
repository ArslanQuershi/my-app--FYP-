
 import React, { useState } from 'react'
 import Model from 'react-modal'


 function Progressbar() {
    const [Track, setTrack] =useState(false)
   return (
    <>
     <div id='back-ground'>
        
        <div id='progress-form'>
            <img src='./Pictures/corollabackground.jpeg'/>
            <div id='Progress-content'>
            <h1> Progress <span>Tracking</span></h1>
            <h2>You can track the progress of your Car.</h2>
            <button id='checking-progress-btn' onClick={()=>setTrack(true)}>Track Progress</button>
            </div>
            <Model className='cancel-appoint' isOpen={Track}>
        <h4>Progress Tracking</h4>

        <form className='form5' >

        <input placeholder=' Appointment_id' type='text'name="appointment_id"/><br/>

        <input type='text' placeholder='Car Number' name="carModel"/><br/>
        
         <button className='submit'>Submit</button>
         
        </form>
        <button id='close' onClick={()=>setTrack(false)}>X</button>
      </Model>


     </div>
     <h2 id='before-steper'>Our Working Steps</h2>
     <section class="step-wizard">  
         <ul class="step-wizard-list">
             <li class="step-wizard-item">
                 <span class="progress-count">1</span>
                 <span class="progress-label">Inspection</span>
             </li>
             <li class="step-wizard-item current-item">
                 <span class="progress-count">2</span>
                 <span class="progress-label">Interior & Exterior Wash</span>
             </li>
             <li class="step-wizard-item">
                 <span class="progress-count">3</span>
                 <span class="progress-label"> Detailling Services</span>
             </li>
             <li class="step-wizard-item">
                 <span class="progress-count">4</span>
                <span class="progress-label">Final Touches</span>
            </li>
            <li class="step-wizard-item">
                <span class="progress-count">5</span>
                 <span class="progress-label">Completion</span>
             </li>

        </ul>
     </section>
     </div>
    </>
  )
 }

 export default Progressbar


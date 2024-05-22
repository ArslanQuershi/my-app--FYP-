import React, { useState } from 'react'
import Model from 'react-modal'

function Engine() {
  const [visible, setvisible] =useState(false)
  return (
    <>
      <div className='Engine-1'>
    <img src='./Pictures/Engine1.jpeg'></img>
    
    <p>Engine Detailing<br/> Cleaning the exterior of the engine and the engine compartment.</p>
    <button className='enginebtn'onClick={()=>setvisible(true)} >Book now</button>
     {/* Appointment form */}
     <Model className='model' isOpen={visible}>
        <h4>Book Your Appointment</h4>
        <form className='form3'>
        <input placeholder=' First Name' type='text'/>
        <input placeholder=' Last Name' type='text'/><br/>
        <input placeholder=' Phone' type='text'/>
        <input placeholder=' Email' type='Email'/><br/>
        <input type='text' placeholder='Car Model'/>
        <input type='text' placeholder='Car Year'/><br/>
        <input type="date" id="date" name="date" class="dtt"/>
        <input type="time" id="time" name="utime" min="8:00" max="20:00" value="8:00" class="dtt" /><br/>
        
        <p>Tick the services you are interested in?</p><br/>
        <input type='checkbox'/> <label>Ceramic coating</label>
        <input type='checkbox'/> <label>Glass coating</label><br/>
        <input type='checkbox'/><label>Paint Protection Film</label>
        <input type='checkbox'/><label>Car Wrapping</label><br/>
           
         <button className='submit'>Submit</button>
        </form>
        <button id='close' onClick={()=>setvisible(false)}>X</button>
      </Model>

    </div>
    <div className='Enginetext'>
      <h2>What is Engine Detailing ?</h2>
      <p>cleaning the exterior of the engine and the engine compartment, and applying dressing to protect and beautify the engine.</p>

      <h2>Why Engine Detailing is Important ?</h2>
      <p>One of the main benefits of engine detailing is that it helps to remove built-up grime and debris that can cause damage to your engine over time. Regular cleaning can help to prevent rust and corrosion, as well as improve the overall efficiency of your engine. Additionally, a clean engine bay can make it easier to spot any potential issues, such as leaks or worn parts, allowing you to address them before they become major problems.</p>

      <h2>The Benefits of a Engine Detailling</h2>
      <p><i class="fa-solid fa-check"></i> Adds protective coating to your engine</p>
      <p><i class="fa-solid fa-check"></i> Cleans and makes compartments look like new</p>
      <p><i class="fa-solid fa-check"></i> Easily identifies leaks and deteriorations</p>
      
      <h2>Before and After Engine Detailling</h2>
      <div id='enginebefore' >
      <img  src='./Pictures/enginebefore.webp'></img>
      </div>
    </div>
    {/* Pakage Section */}
    <div id='Pakage-heading'>
    <h2>Pakages we offer</h2>
    <div className='Pakage-section-engine'>
      <div className='Engine-bay'>
        <h5>Engine Bay Cleaning</h5>
        <h6>PKR 8000</h6>
        <p> A full sweep of all components, making sure they are washed, scrubbed and degreased to keep them functioning as intended.</p>
        <button className='sub-service-btn'>Book</button>
      </div>
      <div className='Complete-engine'>
      <h5>Complete Engine Detailing</h5>
      <h6>PKR 10000</h6>
       <p> Cleaning the exterior of the engine and the engine compartment, and applying dressing to protect and beautify the engine.</p>
       <button className='sub-service-btn'>Book</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Engine

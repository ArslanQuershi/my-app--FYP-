import React, { useState } from 'react'
import Model from 'react-modal'

function AutoDetail() {
  const [visible, setvisible] =useState(false)
  return (
    <>
       <div className='wrapping-1'>
    <img src='./Pictures/AutoDetail.jpg'></img>
    <p> Auto Detailing <br/>Auto detailing is an activity that keeps the vehicle in its best possible condition. </p>
    <button className='wrappingbtn'onClick={()=>setvisible(true)} >Book now</button>
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
    <div className='wrappingtext'>
      <h2>What is Auto detailing?</h2>
      <p>Auto detailing is an activity that keeps the vehicle in its best possible condition, primarily cosmetic, as opposed to mechanical. Detailing is achieved by removing visible and invisible contaminants from the vehicle's interior and polishing the exterior to its original blemish-free finish.</p>
    

    <h2>How much time required for auto detailing ?</h2>
    <p>If you're aiming for quite a deep clean, this can take anywhere between 4 and 8 hours. If you're including things like headlight restoration, paint correction, and a full body polish, it could be 2 to 3 days until you're done.</p>

    <h2>How long does detailing last?</h2>
    <p>The auto detailing results should last four to six months. However, a number of factors come into play. There will be less need for detailing if you clean, car wash, and wax your vehicle on a regular basis. Detailing for such a neat person should be done only twice a year, which is sufficient</p>

    <h2>Benefits of Auto detailing</h2>
    <p><i class="fa-solid fa-check"></i>Improved Resale Value. If you plan to sell your car in the future, auto detailing can significantly enhance its resale value.</p>
    <p><i class="fa-solid fa-check"></i>Stain removal. Car interior detailing removes old and stubborn stains from your dashboards,</p>
    <p><i class="fa-solid fa-check"></i>Extending vehicle lifespan. Car detailing services help to extend the life of your vehicle.</p>
    <p><i class="fa-solid fa-check"></i>Enhanced driving experience. A clean and well-maintained interior can make for a more pleasant and comfortable driving experience.</p>
    <p><i class="fa-solid fa-check"></i>Enhanced Appearance. One of the most obvious benefits of professional car detailing is the improved appearance of your vehicle. </p>
    </div>
    
    {/* Pakages Section */}
    
    <div id='Pakage-heading'>
    <h2>Pakages we offer</h2>
    <div className='Pakage-section'>
      <div className='wash-wax'>
        <h5>Basic Wash & Wax</h5>
        <h6>PKR 3000</h6>
        <p>car wash shampoo with wax components that work to add an extra layer of protection to your paint</p>
        <button className='sub-service-btn'>Book</button>
      </div>
      <div className='Interior'>
      <h5>Interior Detailing</h5>
      <h6>PKR 8000</h6>
       <p>cleaning of your car interior surfaces and parts, such as the dashboard, seats, steering wheel, carpets etc.</p>
       <button className='sub-service-btn'>Book</button>
      </div>
      <div className='Exterior'>
      <h5>Exterior Detailing</h5>
      <h6>PKR 5000</h6>
      <p> The process of cleaning and restoring all exterior surfaces of a vehicle to achieve a show-ready finish.</p>
      <button className='sub-service-btn'>Book</button>
      </div>
      <div className='Complete-detail'>
      <h5>Complete Auto Detailing</h5>
      <h6>PKR 10000</h6>
      <p>Removing visible and invisible contaminants from the vehicle's interior and polishing the exterior to its original blemish-free finish.</p>
      <button className='sub-service-btn'>Book</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default AutoDetail

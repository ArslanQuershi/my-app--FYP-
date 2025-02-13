import React, { useState } from 'react'
 import Model from 'react-modal'

function Home() {
   const [visible, setvisible] =useState(false)
  
  return (
   
    <>
    <div id='container1'>
       <img src='./Pictures/home.jpg'/> 
      
      <div id='text'>
      <h1>Complete <span>Interior & Exterior</span> Car Detailing.
      </h1>
      <p>Imperial Car Detailing Is Famous For Transforming Your Cars To Original Showroom Condition.<br/> Our budget friendly Package Includes Complete Restoration of Your Car inside and Outside..</p>
      <button onClick={()=>setvisible(true)} className='appoint'> Book your slot</button> 

     {/* Booking Appointment */}
       <Model className='model' isOpen={visible}>
        <h4>Book Your Appointment</h4>
        
        <form className='form3'>
          
          
         
          <input placeholder=' Name' type='text' name="name"  />
         
          <input placeholder=' Phone' type='text' name="phone" />
         
          <input placeholder=' Email' type='Email' name="email" />
         
          <input type='text' placeholder='Car Model' name="carModel" />
         
          <input type='text' placeholder='Car Number' name="carYear" />
         
          <input type="date" id="date" name="date" class="dtt"   />
         
          <input type="time" id="time" name="time" min="8:00" max="20:00"  class="dtt" />
          
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
    </div>
    <div className='container2'>
      <div className='content'>
        <h2>WHY DO YOU NEED CAR DETAILING & PROTECTION FOR YOUR CAR?</h2>
        <p>In Pakistan where temperatures can cross as excessive as 40 degrees Celsius, getting a great car detailing session for your vehicle is crucial to shield your car coat from the harshness of the weather.</p>
        <p>The solar frequently receives first-class metal surfaces which require non-stop protection and maintenance. UV radiation in Pakistan can reach levels where it starts off evolved to endanger the coat of the automobile.</p>
        <p>If no longer nicely cared for, the automobile’s paint can crack, fade, and even peel away. Those radiations can also result in a greenhouse gasoline effect inner of the car that could severely harm the interiors and upholstery of the automobile</p>
        <p>Therefore, it becomes vital to ensure that your car is nicely shielded from the harm of the warmth and solar. At IMPERIAL CAR DETAILING you can get first-class offers at car detailing & coating all around Lahore. Repair the pristine shine back on your vehicle and armor its excessive grade protecting coat so your vehicle remains shielded from the summer season warmth and the road dirt at all times.</p>
      </div>
    </div>
     <div className='heading'>
    <h2>IMPERIAL CAR DETAILING STUDIO</h2>
  
    </div>
    <div className='container3'>
      <div className='image'>
       <img src='./Pictures/container3.jpg'/>
      </div>
      <p>IMPERIAL Car Care is a specialized and service oriented car detailing studio. Its Located on Main Walton Road Rawalpindi. Our car detailing crew is expert in precision cleaning, paint polishing, glass/ceramic coating and waxing cars. Our Services include Interior Reconditioning, Engine Bay Cleaning, Exterior Detailing and application of Protective Coatings on Paint, Leather, Trims, Rims and Also Fabric. You are our guest as proud car owner and your precious possession is assured of a conditioned and safe environment where we can work to perfection. Our goal is to provide our customers with the friendliest and also most convenient car detailing experience.</p>
      </div>
      <div className='container4'>
        <div className='text1'>
          <div className='icon'>
        <i id='ribbon' class="fa-solid fa-ribbon"></i>
        </div>
    <h4>THE BEST CAR DETAILING STUDIO</h4>

          <p><i class="fa-solid fa-check"></i>We offer car exterior and interior detailing services</p>
          <p><i class="fa-solid fa-check"></i>We use 100% genuine American Car Care products</p>
          <p><i class="fa-solid fa-check"></i>Equipped with state of the art machinery and tools</p>
          <p><i class="fa-solid fa-check"></i>Trained and skilled detailing crew members</p>
          <p><i class="fa-solid fa-check"></i>We are result oriented Car Care Company</p>
        </div>
        <div className='text2'>
          <div className='icon'>
        <i id='contact' class="fa-solid fa-user"></i>
        </div>
        <h4>CONTACTING US</h4>

          <p><i class="fa-solid fa-check"></i>We are very open and easy to reach company</p>
          <p><i class="fa-solid fa-check"></i>Book an appointment online in under 3 minutes</p>
          <p><i class="fa-solid fa-check"></i>We provide free vehicle inspection and valuation</p>
          <p><i class="fa-solid fa-check"></i>We have parking facility and waiting area</p>
          <p><i class="fa-solid fa-check"></i>Avail free consultancy on Detailing and Coatings</p>
        </div>
      </div> 
      <div className='heading'>
        <h2>Our Promise To You</h2>
      </div>
      <div className='container5'>
        <div className='content5'>
        <img id='ic1' src='./Pictures/icon1.webp'></img>
        <h4>Online Booking</h4>
    <p>Simply reserve your appointment online when it's convenient for you.</p>
        </div>

        <div className='content5'>
        <img id='ic2' src='./Pictures/icon2.webp'></img>
        <h4>Quality Products</h4>
    <p>Just like your doctor, we don't use any products that will cause any harm.</p>
        </div>

        <div className='content5'>
        <img id='ic3' src='./Pictures/icon3.webp'></img>
        <h4>Premium Care</h4>
    <p>Choose between quality Interior, Exterior and Full Body Packages.</p>
        </div>
        <div>

        </div>

      </div>
    </>
  )
}

export default Home

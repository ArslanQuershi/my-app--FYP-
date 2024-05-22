import React, { useState } from 'react'
import Model from 'react-modal'

function Blog() {
  const [visible, setvisible] =useState(false)
  return (
    <>
      <h2>ABOUT US</h2>
      <div className='container1'>
         <div className='content'>
          <h3> <span>IMPERIAL</span> CAR CARE</h3>
          <span>Professional Car Care & Detailing Services in Rawalpindi</span>
          <p>IMPERIAL is a specialized and service oriented car detailing company located in Rawalpindi. In This Website You Will Get To Know About  IMPERIAL And  Their Service .Experts in precision cleaning, polishing, coatings and also waxing cars. You are our guest as proud car owner and your precious possession is assured of a conditioned and safe environment where we can work to perfection. Our goal is to provide our customers with the friendliest, most convenient car detailing experience.</p>
          <p><i class="fa-solid fa-check"></i>We use professional equipment and also have a fully trained detailing crew</p>
          <p><i class="fa-solid fa-check"></i>We use American and European professional line car care products for detailing</p>
          <p><i class="fa-solid fa-check"></i>Detailing will increase glamour and also resale value of your car</p>
          <button className='btn'onClick={()=>setvisible(true)} > Book Now</button>
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
          <div className='images'>
            <img src='./Pictures/img2.webp'></img>
          </div>
      </div>
      <div className='container2'>
        <div className='content2'>
          <h3>OUR 5 P'S OF DETAILING</h3>
        <div className="nav-item dropdown">
          <a className="points dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         PHILOSOPHY
          </a>
          <ul className="dropdown-menu">
            <li><p className="dropdown-item" >American Products are used quality service.</p></li>
          </ul>
          </div>

          <div className="nav-item dropdown">
          <a className="points dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          PROCESS
          </a>
          <ul className="dropdown-menu">
            <li><p className="dropdown-item" >Process includes evaluation, precision cleaning .</p></li>
          </ul>
          </div>

          <div className="nav-item dropdown">
          <a className="points dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          PEOPLE
          </a>
          <ul className="dropdown-menu">
            <li><p className="dropdown-item" >We view our team as an asset.</p></li>
          </ul>
          </div>

          <div className="nav-item dropdown">
          <a className="points dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          PERFORMANCE
          </a>
          <ul className="dropdown-menu">
            <li><p className="dropdown-item" >Our performance is measured in numbers.</p></li>
          </ul>
          </div>

          <div className="nav-item dropdown">
          <a className="points dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          PRICE
          </a>
          <ul className="dropdown-menu">
            <li><p className="dropdown-item" >Our prices are competitive.</p></li>
          </ul>
          </div>
        </div>
        <div className='text-1'>
          <h3>QUALITY OF SERVICE</h3>
          <p>We love what we do, we treat your car as if it is like our own. We care about the feelings you have for your vehicle. We take responsibility and spend well time to make sure every detail and corner of your vehicle gets cleaned and finished</p>
          <div className='pic'>
          <div className='imgtext1'>
            <img src='./Pictures/paint.webp'></img>
          </div>

          <div className='imgtext1'>
            <img src='./Pictures/getsun.jpg'></img>
          </div>

          <div className='imgtext1'>
            <img src='./Pictures/clean.jpg'></img>
          </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Blog

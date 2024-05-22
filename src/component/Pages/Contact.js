import React from 'react'

function Contact() {
  return (
    <>
    <div className='box-1'>
      <img src='./Pictures/contactimg.jpg' ></img>
      <h1>Get in touch with us</h1>
    </div>
    <div className='item01'>
        <h2>Imperial Car </h2> <br/>
        <h2>Shah Wali Colony, Wah Cantt, Rawalpindi</h2>
      </div>
    <div className='box-2'>
      <div className='item02'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.4738933401136!2d72.71819197480244!3d33.80008173100464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa73eea300dd7%3A0x61acc8bd9150e174!2sImperial%20Rent%20a%20Car!5e0!3m2!1sen!2s!4v1710244645619!5m2!1sen!2s"  height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
      <div className='item03'>
        <div className='sub-item'>
        <i class="fa-solid fa-phone"></i>
          <p><b>CALL US</b> <br/>0345 5258766</p>
          </div>
          <div className='sub-item'>
          <i class="fa-solid fa-paper-plane"></i>
          <p><b>OUR ADDRESS</b><br/>Shah Wali Colony Wah Cantt RWP</p>
          </div>
          <div className='sub-item'>
          <i class="fa-solid fa-clock"></i>
          <p><b>WORKING HOURS</b><br/>Monday – Saturday : 11:00 am – 8:00 pm</p>
          </div>
          <div className='sub-item'>
          <i class="fa-solid fa-envelope"></i> 
          <p><b>EMAIL</b><br/>charslan.0000@gmail.com</p>
        </div>
      </div>
      
      <div className='form1'>
        <h4>Fill Free to Contact </h4>
        <form>
          <input placeholder='Name' type='text'/><br/>
          <input placeholder='Email' type='Email'/><br/>
          <input placeholder='Phone no' type='text'/><br/>
          <input placeholder='Message' ></input><br/>
          
          <button className='btn-2'>Submit</button>
        </form>
      </div>
    
      
    </>
  )
}

export default Contact

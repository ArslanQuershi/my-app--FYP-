import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <div className='Footer'> 
    <div className='container'>
    <div className='row'>
    <div className='col-md-6 col-lg-5 col-12 ft-1'>
        <h2><span>Imperial</span> Car Detailing</h2>
        <p>Imperial Car Detailing Is Famous For Transforming Your Cars To Original Showroom Condition. Our budget friendly Package Includes Complete Restoration of Your Car inside and Outside..</p>
        <div className='footer-icon'>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
    </div>
    <div className='col-md-6 col-lg-3 col-12 ft-2'>
    <h3>Quick Links</h3>
    <ul>
        <li> <Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Progressbar'>Progress</Link></li>
        
        <li><Link to='/Contact'>Contact</Link></li>
    </ul>
    </div>
    <div className='col-md-6 col-lg-4 col-12 ft-3'>
        <h3>Contact Info</h3>
        <p><i class="fa-solid fa-phone"></i> 0345 5258766</p>
        <p><i class="fa-solid fa-envelope"></i> charslan.0000@gmail.com</p>
        <p><i class="fa-solid fa-paper-plane"></i> Imperial Rent a Car, Shah Wali Colony, Wah Cantt, Rawalpindi</p>
        </div> 
     </div>
    </div>
    </div>
      <div className='last-footer'> 
      <p>Copyright@All Right Reserved!</p>
      </div>
      
    </>
  )
}

export default Footer

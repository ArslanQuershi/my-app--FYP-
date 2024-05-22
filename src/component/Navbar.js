import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Model from 'react-modal'




const Navbar = () => {
  const[log, setlog]=useState(false)
  const[toggle, settoggle]=useState(false)
  const [visible, setvisible] =useState(false)
  const [Resechdule, setResechdule] =useState(false)
  const [Cancel, setCancel] =useState(false)

  return (
    <>
      <nav  className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  {/* <img id='logo' src='download (1).png'/> */}
  <p><span>Imperial</span> Car Detailing</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* Home */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current='page' to="/">Home</Link>
        </li>
        {/* About */}
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        {/* services */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <Link to="/AutoDetail"><a className="dropdown-item" >Auto Detailing</a></Link>
            <Link to="/Ceramic"> <a className="dropdown-item"  >Ceramic coating</a></Link>
            <Link to="/Engine"> <a className="dropdown-item"  >Engine detailing</a></Link>
            <Link to="/Paint"><a className="dropdown-item"  >Paint Protection Film</a></Link>
          </ul>
        </li>
        {/* Progress tracking */}
        <li className="nav-item">
          <Link className="nav-link" to="/Progressbar">Progress Bar</Link>
        </li>
       
    
       {/* Bookings */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bookings
          </a>
          <ul className="dropdown-menu">
            <Link><a className="dropdown-item" onClick={()=>setvisible(true)} >Sechdule Appointment</a></Link>

             {/* Appointment form */}
          <Model className='model' isOpen={visible}>
        <h4>Book Your Appointment</h4>
        <form className='form3'>
          
        
        <input placeholder=' Name' type='text' name="name" />
       
        <input placeholder=' Phone' type='text' name="phone" />
         
        <input placeholder=' Email' type='Email' name="email"/>
         
        <input type='text' placeholder='Car Model' name="carModel"/>
        
        <input type='text' placeholder='Car Number' name="carYear"/><br/>
        
        <input type="date" id="date" name="date" class="dtt"/>

         <input type="time" id="time" name="time" min="8:00" max="20:00"  class="dtt"  /><br/>
        
        <p>Tick the services you are interested in?</p><br/>
        <input type='checkbox'/> <label>Ceramic coating</label>
        <input type='checkbox'/> <label>Glass coating</label><br/>
        <input type='checkbox'/><label>Paint Protection Film</label>
        <input type='checkbox'/><label>Car Wrapping</label><br/>
           
         <button className='submit'>Submit</button>
        </form>
        <button id='close' onClick={()=>setvisible(false)}>X</button>
      </Model>

        {/* Resechdule Appointment form */}
     <Link > <a className="dropdown-item a" onClick={()=>setResechdule(true)} >Resechdule Appointment</a></Link>
      
          <Model className='reschedule-appoint' isOpen={Resechdule}>
        <h4>Resechdule Appointment</h4>
        <form className='form4' >

        <input placeholder=' Appointment_id' type='text'name="appointment_id" />
        <br/>


        <input type="date" id="date" name="date" class="dtt" />
        <br/>
        
        
        <input type="time" id="time" name="time" min="8:00" max="20:00"  class="dtt" />
        <br/>
        
        <p>Tick the services you are interested in?</p>
        <input type='checkbox'/> <label>Ceramic coating</label>
        <input type='checkbox'/> <label>Glass coating</label><br/>
        <input type='checkbox'/><label>Paint Protection Film</label>
        <input type='checkbox'/><label>Car Wrapping</label><br/>
           
         <button className='submit'>Save changes</button>
        </form>
        <button id='close' onClick={()=>setResechdule(false)}>X</button>
      </Model>
      
       {/* Cancel Appointment form */}
      <Link> <a className="dropdown-item" onClick={()=>setCancel(true)} >Cancel Appointment</a></Link>
            <Model className='cancel-appoint' isOpen={Cancel}>
        <h4>Cancel Appointment</h4>

        <form className='form5' >

        <input placeholder=' Email' type='Email' name="email" /><br/>
        

        <input placeholder=' Appointment_id' type='text'name="appointment_id"/><br/>

        <input type='text' placeholder='Car Number' name="carModel"/><br/>
        
         <button className='submit'>Cancel Appointment</button>
         
        </form>
        <button id='close' onClick={()=>setCancel(false)}>X</button>
      </Model>
            
          </ul>
        </li>
        
        
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
       
      </ul>
      {/* for right side button */}
      
      
          <a id='signin' className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sign in
          </a>
          <li  id='signdrop' className="dropdown-menu">
            <li><a onClick={()=>setlog(true)} className="dropdown-item" href="#">Log in</a></li>
            <Model className='popup' isOpen={log}>

              {/* log in form */}
            <h4>Login</h4>  
        <form className='form12'>

        <div>
        <input placeholder=' Email'  name="email" type="email"/><i class="fa-solid fa-envelope"></i><br/>
        
        </div>
        <div>
        <input placeholder=' Password'  name="password" type="password"/><i class="fa-solid fa-lock"></i> <br/>
         
        </div>

        <button className='login'>login</button><br/>
        <span id='login-span'>Not a member?<a onClick={()=>settoggle(true)}  href="#">Signup</a></span>
        </form>
        <button id='close' onClick={()=>setlog(false)}>X</button>
            </Model>

            <li><a onClick={()=>settoggle(true)} className="dropdown-item" href="#">sign up</a></li>
            <Model className='popup1' isOpen={toggle}>

              {/* Sign up Form */}
            <h4>Signup</h4>
        <form className='form12' >

          <div>

        <input placeholder='Name' name= "username" type='text'/><i class="fa-solid fa-user"></i><br/>
         
          </div>

          <div>
        <input  placeholder='Email' name="email" type="email"/><i class="fa-solid fa-envelope"></i><br/>
         
          </div>

          <div>
        <input placeholder='Password' name="password" type="password" /><i class="fa-solid fa-lock"></i><br/>
           
           </div>

        <button className='login'>Sign in</button> <br/>
       
        <span id='login-span'>Already a member?<a onClick={()=>settoggle(false)}  href="#">Login</a></span>
        </form>
        <button id='close' onClick={()=>settoggle(false)}>X</button>
            </Model>
            </li>
            
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar

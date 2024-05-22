import React, { useState } from 'react'
import Model from 'react-modal'

function Paint() {
  const [visible, setvisible] =useState(false)
  return (
    <>
     <div className='PPF-1'>
    <img src='./Pictures/ppf.webp'></img>
    
    <p> Paint Protection Film<br/>PPF is the ultimate protection for a car from scratches.</p>
    <button className='ppfbtn' onClick={()=>setvisible(true)} >Book now</button>
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
    <div className='PPFtext'>
      <h2>What is a Paint Protection Film?</h2>
      <p>A Paint Protection Film or PPF is a clear or tinted film applied to a vehicle’s exterior surface to protect the paint from various forms of damage. It is usually made of a thin layer of Urethane, which is transparent and self-healing.</p><br/>
      <p>PPF, also known as Anti-stone Film, offers protection from road debris, rocks and gravel, which may cause damage to the vehicle if splashed against the car’s body. It also protects from insects, limescale and resins, as it has high hydrophobic properties.</p>

      <h2>Features of the car Paint Protection Film</h2>
      <p><i class="fa-solid fa-check"></i> <span>Self-healing:</span> Scratches and scuffs can accumulate in the PPF. However, the film has self-healing capabilities because it is made up of Urethane, a thermoplastic polymer which can soften and become pliable when heated.</p>
      <p><i class="fa-solid fa-check"></i> <span>Stain resistance and discolouration:</span> The PPF protects the car’s exterior paint from discolouration and stains. It remains clear under the harshest conditions.</p>
      <p><i class="fa-solid fa-check"></i> <span>Highly durable:</span> PPF for cars can last up to 10 years, ensuring the car’s paint looks brand new. This also adds to the resale value of the vehicle.</p>
      <p><i class="fa-solid fa-check"></i> <span>Does not turn yellow:</span> The PPF will not turn yellow from UV exposure. While it may seem like a regular plastic sheet, the PPF does not discolour or turn yellow over time.</p>
      <p><i class="fa-solid fa-check"></i> <span>Damage protection:</span> The primary aspect of using a PPF on a car is that it protects your car’s body paint from minor abrasions and maintains the colour in its best condition.</p>
      <p><i class="fa-solid fa-check"></i><span>Easy to maintain:</span> Maintaining the PPF does not require complex procedures. You can clean it with regular water and car wash soap solutions.</p>

      <h2>Benefits of the Paint Protection Film (PPF)</h2>
      <p><i class="fa-solid fa-check"></i>Produces enhanced finish</p>
      <p><i class="fa-solid fa-check"></i>Superior protection against corrosion</p>
      <p><i class="fa-solid fa-check"></i>Instant healing of minor scratches</p>
      <p><i class="fa-solid fa-check"></i>High-temperature resistance</p>
      <p><i class="fa-solid fa-check"></i>Ease of repairability</p>

      <h2>Functions of different PPF layers</h2>
      <p>PPF comes in rolls of ready-to-use material. There are different layers, each having its functions. Here are the functions of different PPF layers.</p>
      <ul>
        <li><i class="fa-solid fa-check"></i> <span>Top layer:</span> It protects other layers and keeps them clean until installation is complete. When it is time for the installation, this layer is removed.</li>
        <li><i class="fa-solid fa-check"></i><span>Middle layer:</span> It has an adhesive that bonds the film to the clear coat but remains stuck in the film, making it removable without damaging the paint.</li>
        <li><i class="fa-solid fa-check"></i><span>Urethane layer:</span> The thickest part of the layer is the urethane layer. It will flex when impacted by debris or a flying stone chip, absorbing most of the impact and spreading out the rest to a broader area. This means the paint remains protected.</li>
        <li><i class="fa-solid fa-check"></i> <span>Last layer:</span> It features a thin clear film, which seals and protects the urethane layer from contaminants.</li>
      </ul>
    </div>
    {/* Pakage section */}
    <div id='Pakage-heading'>
    <h2>Pakages we offer</h2>
    <div className='Pakage-section'>
      <div className='Partial-front'>
        <h5>Partial-front</h5>
        <h6>PKR 5000</h6>
        <p>It involves safeguarding the front bumper, approximately 18 inches of the hood, and both front fenders.</p>
        <button className='sub-service-btn'>Book</button>
      </div>
      <div className='Full-Front'>
      <h5>Full Front</h5>
      <h6>PKR 10000</h6>
       <p> Typically covers the entire front portion of a vehicle, providing extensive protection against common forms of damages.</p>
       <button className='sub-service-btn'>Book</button>
      </div>
      <div className='Track-package'>
      <h5>Track Package</h5>
      <h6>PKR 18000</h6>
      <p> Includes coverage for the car parts most susceptible to damage from high-speed driving and road debris,</p>
      <button className='sub-service-btn'>Book</button>
      </div>
      <div className='Complete-body'>
      <h5>Complete Body</h5>
      <h6>PKR 35000</h6>
      <p>It covers the entire body of a vehicle, providing extensive protection against common forms of damages.</p>
      <button className='sub-service-btn'>Book</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Paint

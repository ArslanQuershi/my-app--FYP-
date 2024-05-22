import React, { useState } from 'react'
import Model from 'react-modal'

function Ceramic() {
  const [visible, setvisible] =useState(false)
  return (
    <>
    <div className='cream-1'>
    <img src='./Pictures/creamic.jpg' ></img>
    
    <p>Creamic Coating<br/>Also known as glass coating.</p>
    <button className='creambtn' onClick={()=>setvisible(true)} >Book now</button>
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
    <div className='creamtext'>
      <h2>What is Ceramic Coating?</h2>
      <p>A ceramic coating is a product that is in a form of Pquid appPed on the external body of the car. The chemicals involved into the Pquid are mild and effective that bonds quickly with the texture of the car’s paint. The ceramic coating is a valuable protection layer that shields the car from contamination and dirt particles. With the usage of ceramic appPcation the paint is covered into a strong layer of secluded form. Moreover, it can be called as a defensive substance that provides a long durabiPty to the exterior parts of the vehicle.  The consuming time of the ceramic coating is great and does not require after few months. The ceramic chemical bonds with the surface of the car for more than twelve months, that adds up a supreme protection towards the body of the car. In addition, the ceramic product is also known as the wax alternative that does not wash away or break down perhaps it stays for a longer time. The coating gives a result that the surface becomes resiPent smooth and easier to clean. In addition, none of the product serves this kind of sPckness, protection and durabiPty.</p>
      <h2>BENEFITS OF CERAMIC COATING</h2>
      
        <p><i class="fa-solid fa-check"></i>It protects the car’s paint from UV radiations and oxidation</p>
        <p><i class="fa-solid fa-check"></i>Oxidizing is rusting: If a car exposed to the rays of sun or you park your car under the sky so its paint will turn into colorless and begin to fade., whereas the layer of ceramic coating will help to shield it from oxidation and environmental contamination</p>
        <p><i class="fa-solid fa-check"></i>Ceramic coating leaves high gloss and mirror like reflections after the application, it is not only the source of protection but also improves shine</p>
        <p><i class="fa-solid fa-check"></i>With a use of ceramic coating the road grimes and dirt particles will take time to bon with surface of the car</p>
        <p><i class="fa-solid fa-check"></i>The contamination can be washed easily from the external body of the car</p>
        <p><i class="fa-solid fa-check"></i>It adds a clarity and depth into the paint that enhances the reflection and produces candy gloss</p>
      

      <h2>LIMITATIONS OF CERAMIC COATING</h2>
    
        <p><i class="fa-solid fa-check"></i>Almost all swirl marks are dissolved with the ceramic coating whereas, the deep scratches are often exaggerated</p>
        <p><i class="fa-solid fa-check"></i>The ceramic coating helps to slide over the water, but water droplets contains several minerals in it that stick to the surface of the car and it becomes difficult to take them out of the body. Therefore, the minerals in a form of beads remain on the externals parts of the auto which is called as water-spotting</p>
        <p><i class="fa-solid fa-check"></i>While using the ceramic coating one needs to wash the body of the car regularly in order to maintain its outlook</p>
        <p><i class="fa-solid fa-check"></i>The application of ceramic material does not make the 100% maintenance-free</p>
        
      

      <h2>DURABILITY</h2>
      <p>The durability lies according to the level of formation of the products, there are different chemicals, expensive and moderate that helps to maintain the surface of the car. The products of ceramic coating leads to five years of international warranty but in Lahore, Pakistan, we can stretch for 2-2.5 years approximately due to environmental contamination and carelessness of a car owner.</p>

      <h2>PRODUCTS</h2>
      <p>The ceramic coating products are safe and best to apply on the exterior of the car. The application avoids damaging the clear coat of the paint surface. Moreover, the ceramic coating does not peel off from the parts or becomes yellow or crack up. The versatility of ceramic coating is that it can be applied on any clear coat surfaces. We use the products by GYEON such as the Gyeon one, Gyeon pure and Gyeon dura flex. These products give the finest outlook to the surface that the customer will not lead to apply wax or sealant protection layers. Our trained crew work with detailing in order to have a versatile coating layer. The ceramic coating works as water repellent prevent from UV radiations, protect the surface from discoloration and road grimes</p>
      <div className='products'>
       <div className='productsimg'>
        <img src='./Pictures/cream1.jpeg'></img>
       </div>
       <div className='productsimg'>
        <img src='./Pictures/cream2.jpeg'></img>
       </div>
       <div className='productsimg'>
        <img src='./Pictures/cream3.jpeg'></img>
       </div>
      </div>
    </div>
    {/* Pakage section */}
    <div id='Pakage-heading'>
    <h2>Pakages we offer</h2>
    <div className='Pakage-section'>
      <div className='month-3'>
        <h5>3 Month Glass/Ceramic Coating</h5>
        <h6>PKR 5000</h6>
        <p>A Ceramic Coating creates a bond that last as long as the factory specs for that particular coating,</p>
        <button className='sub-service-btn'>Book</button>
      </div>
      <div className='year-1'>
      <h5>1 Year Glass/Ceramic Coating</h5>
      <h6>PKR 10000</h6>
       <p> An extra layer protection on top of the paint which much harder than clear coat helping keep your vehicle looking like new</p>
       <button className='sub-service-btn'>Book</button>
      </div>
      <div className='year-2'>
      <h5>2 Year Glass/Ceramic Coating</h5>
      <h6>PKR 18000</h6>
      <p> The coating chemically bonds with the vehicles clear coat, creating an extra layer of protection.</p>
      <button className='sub-service-btn'>Book</button>
      </div>
      <div className='year-5'>
      <h5>5 Year Glass/Ceramic Coating</h5>
      <h6>PKR 35000</h6>
      <p>A Ceramic Coating is a liquid polymer that is applied by hand to the vehicle’s surface and may also be applied to other areas.</p>
      <button className='sub-service-btn'>Book</button>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Ceramic

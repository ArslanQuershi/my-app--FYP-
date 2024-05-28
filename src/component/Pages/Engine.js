import React, {useContext, useRef, useState} from 'react'
import Model from 'react-modal'
import {UserContext} from "./UserContext";
import AuthContext from "./AuthContext";
import axios from "axios";

function Engine() {
    const { userId } = useContext(UserContext);

    const { IsloggedIn } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        user_id: '',
        name: '',
        phone: '',
        email: '',
        car_model: '',
        car_year: '',
        appointment_data: '',
        appointment_time: '',
        service_type: '',
        price: '',
        service_package: '',
    });

    const [formVisible, setFormVisible] = useState(false);
    const handleBookClick = (packageName, price) => {
        setFormData({
            ...formData,
            user_id: userId,
            service_type: "engine detailing",
            service_package: packageName,
            price: price,
        });
        setFormVisible(true);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!IsloggedIn) {
            alert('You must be logged in to book an appointment.');
            window.location.href = '/';
            return;

        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/appointments', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            alert("appointment booked against your logged in email");
            console.log('Appointment booked:', response.data);

        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
            } else if (error.request) {
                console.error('Error request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
        }
    };

    const packageSectionRef = useRef(null);
    const scrollToPackageSection = () => {
        if (packageSectionRef.current) {
            packageSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <>
      <div className='Engine-1'>
    <img src='./Pictures/Engine1.jpeg'></img>
    
    <p>Engine Detailing<br/> Cleaning the exterior of the engine and the engine compartment.</p>
          <button className='wrappingbtn'
                  onClick={scrollToPackageSection}>
              Book now
          </button>

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
    <div id='Pakage-heading' ref={packageSectionRef}>
    <h2>Pakages we offer</h2>
    <div className='Pakage-section-engine'>
        <div className='Engine-bay'>
            <h5>Engine Bay Cleaning</h5>
            <h6>PKR 8000</h6>
            <p> A full sweep of all components, making sure they are washed, scrubbed and degreased to keep them
                functioning as intended.</p>
            <button className='sub-service-btn'
                    onClick={() => handleBookClick('engine bay cleaning', 8000)}>Book
            </button>
        </div>
        <div className='Complete-engine'>
            <h5>Complete Engine Detailing</h5>
            <h6>PKR 10000</h6>
            <p> Cleaning the exterior of the engine and the engine compartment, and applying dressing to protect and beautify the engine.</p>
            <button className='sub-service-btn'
                    onClick={() => handleBookClick('complete engine detailing', 10000)}>Book
            </button>
        </div>
    </div>
        <Model className='model' isOpen={formVisible}>

            {formVisible && (

                <form className='form3'
                      onSubmit={handleSubmit}>
                    <h4>BOOK FOR APPOINTMENT FOR AUTO DETAILING</h4>
                    <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange}
                           required/><br/>
                    <input type='text' name='phone' placeholder='Phone' value={formData.phone} onChange={handleChange}
                           required/><br/>
                    <input type='email' name='email' placeholder='Email' value={formData.email}
                           onChange={handleChange} required/><br/>
                    <input type='text' name='car_model' placeholder='car_model' value={formData.car_model}
                           onChange={handleChange} required/><br/>
                    <input type='text' name='car_year' placeholder='car_year' value={formData.car_year}
                           onChange={handleChange} required/><br/>
                    <input type='date' name='appointment_data' placeholder='appointment_data'
                           value={formData.appointment_data}
                           onChange={handleChange} required/><br/>
                    <input type='time' name='appointment_time' placeholder='appointment_time'
                           value={formData.appointment_time}
                           onChange={handleChange} required/>
                    <input type='hidden' name='service_type' value={formData.service_type}/>
                    <input type='hidden' name='price' value={formData.price}/>
                    <input type='hidden' name='service_package' value={formData.service_package}/><br/><br/>
                    <button type='submit' className='sub-service-btn'>Submit</button>
                    <br/><br/>
                    <button type='button' className='sub-service-btn' onClick={() => setFormVisible(false)}>Close
                    </button>
                </form>
            )}
        </Model>
    </div>
    </>
  )
}

export default Engine

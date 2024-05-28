import React, {useState, useRef, useContext} from 'react'
import Model from 'react-modal'
import axios from 'axios';
import AuthContext from './AuthContext';
import {UserContext, UserProvider} from "./UserContext";

function AutoDetail() {

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
            service_type: "auto detail",
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
          <div className='wrapping-1'>
              <img src='./Pictures/AutoDetail.jpg'></img>
              <p> Auto Detailing <br/>Auto detailing is an activity that keeps the vehicle in its best possible
                  condition.
              </p>
              <button className='wrappingbtn'
                      onClick={scrollToPackageSection}>
                  Book now
              </button>
          </div>
          <div className='wrappingtext'>
              <h2>What is Auto detailing?</h2>
              <p>Auto detailing is an activity that keeps the vehicle in its best possible condition, primarily
                  cosmetic, as opposed to mechanical. Detailing is achieved by removing visible and invisible
                  contaminants from the vehicle's interior and polishing the exterior to its original blemish-free
                  finish.</p>


              <h2>How much time required for auto detailing ?</h2>
              <p>If you're aiming for quite a deep clean, this can take anywhere between 4 and 8 hours. If you're
                  including things like headlight restoration, paint correction, and a full body polish, it could be 2
                  to 3 days until you're done.</p>

              <h2>How long does detailing last?</h2>
              <p>The auto detailing results should last four to six months. However, a number of factors come into play.
                  There will be less need for detailing if you clean, car wash, and wax your vehicle on a regular basis.
                  Detailing for such a neat person should be done only twice a year, which is sufficient</p>

              <h2>Benefits of Auto detailing</h2>
              <p><i class="fa-solid fa-check"></i>Improved Resale Value. If you plan to sell your car in the future,
                  auto detailing can significantly enhance its resale value.</p>
              <p><i class="fa-solid fa-check"></i>Stain removal. Car interior detailing removes old and stubborn stains
                  from your dashboards,</p>
              <p><i class="fa-solid fa-check"></i>Extending vehicle lifespan. Car detailing services help to extend the
                  life of your vehicle.</p>
              <p><i class="fa-solid fa-check"></i>Enhanced driving experience. A clean and well-maintained interior can
                  make for a more pleasant and comfortable driving experience.</p>
              <p><i class="fa-solid fa-check"></i>Enhanced Appearance. One of the most obvious benefits of professional
                  car detailing is the improved appearance of your vehicle. </p>
          </div>

          {/* Pakages Section */}

          <div id='Pakage-heading' ref={packageSectionRef}>
              <h2>Pakages we offer</h2>
              <div className='Pakage-section'>
                  <div className='wash-wax'>
                      <h5>Basic Wash & Wax</h5>
                      <h6>PKR 3000</h6>
                      <p>car wash shampoo with wax components that work to add an extra layer of protection to your
                          paint</p>
                      <button className='sub-service-btn'
                              onClick={() => handleBookClick('Basic Wash & Wax Detailing', 3000)}>Book
                      </button>
                  </div>
                  <div className='Interior'>
                      <h5>Interior Detailing</h5>
                      <h6>PKR 8000</h6>
                      <p>cleaning of your car interior surfaces and parts, such as the dashboard, seats, steering wheel,
                          carpets etc.</p>
                      <button className='sub-service-btn'
                              onClick={() => handleBookClick('Interior Detailing', 8000)}>Book
                      </button>
                  </div>
                  <div className='Exterior'>
                      <h5>Exterior Detailing</h5>
                      <h6>PKR 5000</h6>
                      <p>The process of cleaning and restoring all exterior surfaces of a vehicle to achieve a
                          show-ready finish.</p>
                      <button className='sub-service-btn'
                              onClick={() => handleBookClick('Exterior Detailing', 5000)}>Book
                      </button>
                  </div>
                  <div className='Complete-detail'>
                      <h5>Complete Auto Detailing</h5>
                      <h6>PKR 10000</h6>
                      <p>Removing visible and invisible contaminants from the vehicle's interior and polishing the
                          exterior to its original blemish-free finish.</p>
                      <button className='sub-service-btn'
                              onClick={() => handleBookClick('Complete Auto Detailing', 10000)}>Book
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
                      <button type='button' className='sub-service-btn' onClick={() => setFormVisible(false)}>Close</button>

                  </form>
              )}
              </Model>
          </div>
      </>
  )
}

export default AutoDetail

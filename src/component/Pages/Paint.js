import React, {useContext, useRef, useState} from 'react'
import Model from 'react-modal'
import {UserContext} from "./UserContext";
import AuthContext from "./AuthContext";
import axios from "axios";

function Paint() {
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
            service_type: "Paint Protection",
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
        <div className='PPF-1'>
            <img src='./Pictures/ppf.webp'></img>

            <p> Paint Protection Film<br/>PPF is the ultimate protection for a car from scratches.</p>
            <button className='wrappingbtn'
                    onClick={scrollToPackageSection}>
                Book now
            </button>


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
    <div id='Pakage-heading' ref={packageSectionRef}>
    <h2>Pakages we offer</h2>
    <div className='Pakage-section'>
      <div className='Partial-front'>
        <h5>Partial-front</h5>
        <h6>PKR 5000</h6>
        <p>It involves safeguarding the front bumper, approximately 18 inches of the hood, and both front fenders.</p>
          <button className='sub-service-btn'
                  onClick={() => handleBookClick('partial front', 5000)}>Book
          </button>
      </div>
        <div className='Full-Front'>
            <h5>Full Front</h5>
            <h6>PKR 10000</h6>
            <p> Typically covers the entire front portion of a vehicle, providing extensive protection against common forms of damages.</p>
            <button className='sub-service-btn'
                    onClick={() => handleBookClick('full front', 10000)}>Book
            </button>
        </div>
        <div className='Track-package'>
            <h5>Track Package</h5>
            <h6>PKR 18000</h6>
            <p> Includes coverage for the car parts most susceptible to damage from high-speed driving and road debris,</p>
            <button className='sub-service-btn'
                    onClick={() => handleBookClick('track package paint', 18000)}>Book
            </button>
        </div>
        <div className='Complete-body'>
            <h5>Complete Body</h5>
            <h6>PKR 35000</h6>
            <p>It covers the entire body of a vehicle, providing extensive protection against common forms of damages.</p>
            <button className='sub-service-btn'
                    onClick={() => handleBookClick('complete body paint', 35000)}>Book
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

export default Paint

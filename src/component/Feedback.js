import React, { useState ,useContext} from 'react';
import Model from 'react-modal';
import axios from 'axios';
import AuthContext from './Pages/AuthContext';
const StarRating = ({ onRate, rating }) => {
  const handleStarClick = (value) => {
    onRate(value);
  };

  return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((value) => (
            <span
                key={value}
                className={value <= rating ? 'star-filled' : 'star-empty'}
                onClick={() => handleStarClick(value)}
            >
          ★
        </span>
        ))}
      </div>
  );
};

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [Ratingform, setRatingform] = useState(false);
  const { IsloggedIn } = useContext(AuthContext);





  const handleRate = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!IsloggedIn) {
      alert('You must be logged in');
      setRatingform(false);
      return;

    }



    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;

    const formData = {
      name: name,
      email: email,
      rating: rating,
      feedback: feedback,
    };


    axios.post('http://127.0.0.1:8000/api/feedback', formData)
        .then(response => {
          console.log('Feedback submitted successfully:', response.data);

          setFeedback('');
          setRating(0);
          alert("data filled successfully");
          setRatingform(false);
        })
        .catch(error => {
          console.error('Error submitting feedback:', error);
          // Handle error if necessary
        });
  };

  return (
      <>
        <div id='Rating'>
          <button id='Star' onClick={() => setRatingform(true)}><i className="fa-solid fa-star"></i> Reward</button>
          <Model className='Rating-form' isOpen={Ratingform}>
            <div className="feedback-form">
              <h2>Feedback Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="form-group">
                    <label>Name:</label><br/>
                    <input type="text" name="name"/><br/>
                    <label>Email:</label><br/>
                    <input type='email' name="email"/>
                  </div>
                </div>
                <div className="form-group">
                  <label>Rate us:</label>
                  <StarRating onRate={handleRate} rating={rating}/>
                </div>
                <div className="form-group">
                  <label>Feedback:</label>
                  <textarea
                      value={feedback}
                      onChange={handleFeedbackChange}
                      rows={4}
                      cols={45}
                  />
                </div>
                <button id='rating-btn' type="submit">Submit</button>
              </form>
            </div>
            <button id='close-x' onClick={() => setRatingform(false)}>X</button>
          </Model>
        </div>
      </>
  );
};

export default FeedbackForm;

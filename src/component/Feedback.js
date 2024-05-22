import React, { useState } from 'react';
import Model from 'react-modal'

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
  const[Ratingform, setRatingform]=useState(false)

  const handleRate = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the feedback and rating to your backend or handle it accordingly
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    // Reset form state
    setFeedback('');
    setRating(0);
  };

  return (
    <>
    <div id='Rating'>
    <button id='Star' onClick={()=>setRatingform(true)} ><i class="fa-solid fa-star"></i> Reward</button>
    <Model className='Rating-form' isOpen={Ratingform}>
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Email:</label><br/>
          <input type='email'/>
        </div>
        <div className="form-group">
          <label>Rate us:</label>
          <StarRating onRate={handleRate} rating={rating} />
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
    <button id='close-x' onClick={()=>setRatingform(false)}>X</button> 
    </Model>
    </div>
    </>
  );
};

export default FeedbackForm;


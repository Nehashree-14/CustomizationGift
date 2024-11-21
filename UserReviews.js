import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserReviews() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://api.example.com/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://api.example.com/reviews', { text: newReview });
      setMessage('Review submitted successfully!');
      setNewReview('');
    } catch (error) {
      setMessage(`Failed to submit review: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>User Reviews</h2>
      <form onSubmit={handleReviewSubmit}>
        <input
          type="text"
          placeholder="Write a review"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          required
        />
        <button type="submit">Submit Review</button>
      </form>
      <p>{message}</p>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserReviews;

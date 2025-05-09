'use client';
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hasActiveMembership = (membership: { plan: any; expiryDate: any }) => {
  return (
    membership.plan !== 'Free' && new Date(membership.expiryDate) > new Date()
  );
};

function RatingSection() {
  const [isMember, setIsMember] = useState(false);

  // Mock user data (replace with actual data from API or context)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    membership: {
      plan: 'Premium',
      expiryDate: '2025-12-31',
    },
  };

  useEffect(() => {
    if (hasActiveMembership(user.membership)) {
      setIsMember(true);
    }
  }, [user]);

  // const handleRating = (e: { target: { value: React.SetStateAction<number>; }; }) => {
  //   setRating(e.target.value);
  // };

  // const handleCommentChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
  //   setComment(e.target.value);
  // };

  // const handleSubmitRating = () => {

  //   alert(`Rating submitted: ${rating} \nComment: ${comment}`);
  // };

  return (
    <section className='py-16 bg-gradient-to-br from-indigo-500 to-purple-600'>
      <div className='max-w-4xl mx-auto text-center px-4'>
        <h2 className='text-4xl font-bold text-white mb-6'>
          Rate Your Gym Experience
        </h2>

        {/* Show message if the user doesn't have an active membership */}
        {!isMember && (
          <p className='text-white mb-6 text-xl font-semibold'>
            You need an active membership to leave a rating.
          </p>
        )}

        {/* Rating and Comment Form */}
        {/* {isMember && (
          <div className='bg-white p-8 rounded-xl shadow-xl max-w-md mx-auto mt-8'>
            <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
              Please rate your experience
            </h3>
            <div className='mb-6'>
              <label className='block text-lg text-gray-600 mb-2'>
                Rate your experience:
              </label>
              <div className='flex justify-center space-x-4'>
                <select
                  title='raiting'
                  className='border p-3 rounded-lg w-full text-lg font-medium text-gray-700'
                  value={rating}
                  onChange={handleRating}
                >
                  <option value={0}>Select Rating</option>
                  <option value={1}>1 - Poor</option>
                  <option value={2}>2 - Fair</option>
                  <option value={3}>3 - Good</option>
                  <option value={4}>4 - Very Good</option>
                  <option value={5}>5 - Excellent</option>
                </select>
              </div>
            </div>

        
            <div className='mb-6'>
              <label className='block text-lg text-gray-600 mb-2'>
                Leave a Comment:
              </label>
              <textarea
                className='w-full p-4 border rounded-lg text-lg text-gray-700'
                rows='4'
                placeholder='Share your experience...'
                value={comment}
                onChange={handleCommentChange}
              ></textarea>
            </div>

            <button
              onClick={handleSubmitRating}
              className='w-full py-3 bg-indigo-700 text-white font-semibold rounded-lg hover:bg-indigo-800 transition-colors duration-300'
            >
              Submit Rating & Comment
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
}

export default RatingSection;

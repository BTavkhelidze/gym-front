'use client';
import React, { useState, useEffect } from 'react';

function LiveGymActivitySection() {
  const [peopleCount, setPeopleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPeopleCount(Math.floor(Math.random() * 100)); // Replace with real API data
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='py-16 bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='max-w-5xl mx-auto px-4 text-center'>
        {/* Heading */}
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
          Live Gym Activity
        </h1>

        {/* Description */}
        <p className='text-gray-600 text-lg max-w-2xl mx-auto mb-8'>
          Stay in the know with real-time updates on gym activity. Our tracker
          shows you how many people are currently working out, so you can plan
          your visit with ease—whether you prefer a quiet session or a bustling
          vibe.
        </p>

        {/* Live Activity Card */}
        <div className='inline-block p-8 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300'>
          <h2 className='text-lg font-light text-gray-500 tracking-wide'>
            Live Count
          </h2>
          <div className='mt-4 text-center'>
            <span className='text-5xl font-bold text-gray-800 animate-pulse-slow'>
              {peopleCount}
            </span>
            <p className='mt-2 text-sm text-gray-400'>In the Gym Now</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-10'>
          <a
            href='#join'
            className='inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200'
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default LiveGymActivitySection;

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
    <section className='py-16 bg-black'>
      <div className='max-w-5xl mx-auto px-4 text-center'>
        {/* Heading */}
        <h1 className='text-3xl md:text-4xl font-semibold text-white mb-4'>
          Live Gym Activity
        </h1>

        {/* Description */}
        <p className='text-gray-400 text-lg max-w-2xl mx-auto mb-8'>
          Stay updated with real-time gym activity. See how many people are
          working out now to plan your visit—whether you want a quiet session or
          a lively atmosphere.
        </p>

        {/* Live Activity Card */}
        <div className='inline-block p-8 bg-gray-900 rounded-xl shadow-sm transform hover:shadow-md transition-all duration-300'>
          <h2 className='text-sm font-medium text-gray-400 tracking-wide'>
            Live Count
          </h2>
          <div className='mt-4 text-center'>
            <span className='text-5xl font-bold text-white animate-pulse'>
              {peopleCount}
            </span>
            <p className='mt-2 text-sm text-gray-500'>In the Gym Now</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-10'>
          <a
            href='#join'
            className='inline-block px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-xl hover:bg-blue-600 transition-colors duration-200'
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default LiveGymActivitySection;

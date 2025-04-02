import React from 'react';
import Image from 'next/image';

export default function TestimonialSection() {
  return (
    <div className='max-w-[1200px] w-full flex flex-col items-center justify-center m-auto mt-[90px] text-center'>
      <h2 className='text-[40px] font-bold text-[#E43071]'>
        What Our Members Are Saying
      </h2>
      <p className='mt-4 text-lg font-semibold text-gray-700'>
        Real people. Real results.
      </p>

      <div className='mt-10 flex flex-wrap justify-center gap-8'>
        <div className='max-w-[300px] w-full bg-white p-6 rounded-lg shadow-lg'>
          <Image
            src='/image/person.jpg'
            alt='Member 1'
            width={150}
            height={150}
            className='rounded-full mx-auto mb-4'
          />
          <p className='font-semibold text-xl text-[#E43071]'>John Doe</p>
          <p className='text-base mt-2 text-gray-600'>
            &quot;Joining this gym changed my life! The trainers are amazing,
            and the community is so supportive. I’ve never felt stronger!&quot;
          </p>
        </div>

        <div className='max-w-[300px] w-full bg-white p-6 rounded-lg shadow-lg'>
          <Image
            src='/image/person.jpg'
            alt='Member 2'
            width={150}
            height={150}
            className='rounded-full mx-auto mb-4'
          />
          <p className='font-semibold text-xl text-[#E43071]'>Jane Smith</p>
          <p className='text-base mt-2 text-gray-600'>
            &quot;The personalized workout plans helped me achieve my fitness
            goals faster than I expected. Highly recommend!&quot;
          </p>
        </div>

        <div className='max-w-[300px] w-full bg-white p-6 rounded-lg shadow-lg'>
          <Image
            src='/image/person.jpg'
            alt='Member 3'
            width={150}
            height={150}
            className='rounded-full mx-auto mb-4'
          />
          <p className='font-semibold text-xl text-[#E43071]'>Mark Johnson</p>
          <p className='text-base mt-2 text-gray-600'>
            &quot;I’ve tried many gyms, but this one truly stands out. The
            variety of classes and workouts kept me motivated!&quot;
          </p>
        </div>
      </div>

      <div className='mt-8'>
        <button className='bg-[#E43071] hover:bg-[#be285e] text-white text-lg py-3 px-8 rounded-full'>
          Join Our Community
        </button>
      </div>
    </div>
  );
}

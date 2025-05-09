'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { realTimeSectionGym } from '../../../public/image';

function LiveGymActivitySection() {
  const [peopleCount, setPeopleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPeopleCount(Math.floor(Math.random() * 100)); // Replace with real API data
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=' h-[800px]  w-full  flex  relative'>
      <div className='max-w-[1440px] mx-auto w-full items-center justify-center lg:justify-between flex  relative  px-[10%] md:px-10  xl:px-30'>
        <div className='absolute top-0 left-0 bg-[#00000040]'></div>
        <div className='z-10 hidden  text-white p-2 lg:flex flex-col gap-6'>
          <p className='text-xl md:text-3xl font-light'>
            Muscles loading… please wait!
          </p>
        </div>
        <div className='flex items-center flex-col justify-center  px-3 max-w-[400px] xl:max-w-[500px] text-center z-40'>
          {/* Heading */}
          <h1 className='text-xl xl:text-3xl  font-semibold text-white mb-4'>
            Live Gym Activity
          </h1>

          {/* Description */}
          <p className='text-gray-400 text-base  xl:text-lg  mb-8'>
            Stay updated with real-time gym activity. See how many people are
            working out now to plan your visit—whether you want a quiet session
            or a lively atmosphere.
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
          <button className=' cursor-pointer mt-4 block w-[166px] h-[50px] rounded-[200px] bg-white hover:bg-[#e0dcdc]'>
            <span className='font-[popins] font-normal text-[16px] text-[#000000] text-center'>
              Start Now
            </span>
          </button>
        </div>
      </div>
      <div className='w-full bg-green h-full absolute left-0 top-0 -z-10'>
        <div className='flex-1  w-full lg:w-[50%] h-full py-10 relative overflow-hidden flex items-center px-[10%] md:px-10  xl:px-30 '>
          <div className='w-full absolute h-full  top-0 left-0  -z-10  '>
            <Image
              src={realTimeSectionGym}
              className='object-cover w-full h-full'
              alt='gym '
            />
          </div>
          <div className='w-full absolute h-full  top-0 left-0 bg-[#00000060]'></div>
        </div>
        <div className='flex-1 bg-white'>s</div>
      </div>
    </section>
  );
}

export default LiveGymActivitySection;

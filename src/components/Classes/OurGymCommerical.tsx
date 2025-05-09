'use client';
import Image from 'next/image';
import React from 'react';
import { GymClasses } from '../../../public/image';

function OurGymCommerical() {
  return (
    <section className=' h-[800px] mt-30  w-full  flex  relative'>
      <div className='max-w-[1440px] mx-auto w-full items-center justify-center lg:justify-between flex  relative  px-[10%] md:px-10  xl:px-30'>
        <div className='absolute top-0 left-0 bg-[#00000040]'></div>
        <div className='z-10 hidden  text-white p-2 lg:flex flex-col gap-6'>
          <p className='text-xl  max-w-[450px] md:text-3xl font-light'>
            Powering up for gym class… unleash your beast mode!
          </p>
        </div>
        <div className='flex items-center flex-col justify-center  px-3 max-w-[400px] xl:max-w-[500px] text-center z-40'>
          <h1 className='text-xl xl:text-3xl  font-semibold text-white mb-4'>
            Our Gym Classes
          </h1>

          <p className='text-gray-400 text-base  xl:text-lg  mb-8'>
            Discover a variety of dynamic gym classes led by expert instructors,
            designed to elevate your fitness journey. From high-intensity
            interval training to yoga and strength conditioning, our classes are
            crafted to enhance performance, improve wellness, and foster
            community. Certified by top fitness institutions, our instructors
            bring expertise in movement, mindfulness, and recovery to create
            tailored experiences for all levels.
          </p>
        </div>
      </div>
      <div className='w-full bg-green h-full absolute left-0 top-0 -z-10'>
        <div className='flex-1  w-full lg:w-[50%] h-full py-10 relative overflow-hidden flex items-center px-[10%] md:px-10  xl:px-30 '>
          <div className='w-full absolute h-full  top-0 left-0  -z-10  '>
            <Image
              src={GymClasses}
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

export default OurGymCommerical;

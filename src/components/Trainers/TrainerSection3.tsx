'use client';
import React, { useState } from 'react';
import { OurCoaches, PersonWorkoutResult } from '../../../public/image';
import Image from 'next/image';

import { motion } from 'framer-motion';
// import SwiperSection3Mob from './swiperSection3Mob';
import '@/app/globals.css';

function Section3Trainer() {
  const [activeCategory, setActiveCategory] = useState<string | null>('space');

  return (
    <section className='max-w-[1440px] mx-auto w-full h-[700px] relative flex items-end md:items-center mt-20'>
      <div className='w-full  h-full absolute top-0 left-0 z-10'>
        {activeCategory?.startsWith('space') && (
          <Image
            src={OurCoaches}
            alt='space'
            className='object-cover flex w-full h-full'
          />
        )}
        {activeCategory?.startsWith('classes') && (
          <Image
            src={PersonWorkoutResult}
            alt='classes'
            className='object-cover not-only:flex w-full h-full'
          />
        )}
      </div>

      <div className=' hidden  gap-2 px-[10%] md:px-10  xl:px-30 md:flex  flex-col z-20 '>
        <motion.div
          animate={
            activeCategory?.startsWith('space')
              ? { background: 'white' }
              : { background: 'transparent' }
          }
          className={`group max-w-[400px]  w-full transition-color justify-between duration-500 border border-transparent border-t-white p-6 lg:p-10 flex flex-col gap-6 cursor-pointer`}
          onMouseEnter={() => setActiveCategory('space')}
        >
          <h3
            className={`text-2xl lg:text-3xl font-light transition-all duration-200 ${
              activeCategory?.startsWith('space') ? 'text-black' : 'text-white'
            }`}
          >
            Our Coaches
          </h3>
          <p
            className={`max-w-sm text-sm lg:text-base font-light transition-all duration-200 ${
              activeCategory?.startsWith('space') ? 'text-black' : 'text-white'
            }`}
          >
            Armed with advanced education, equipment, and training, Equinox
            Coaches are the exponent in maximizing potential and pushing human
            performance forward. Certified by the Equinox Fitness Training
            Institute, every Coach is a fitness leader with extensive experience
            across the EXQ OS and MNR (Movement. Nutrition. Regeneration.)
            protocols to develop personalized, holistic approaches to full
            health optimization.
          </p>
        </motion.div>

        <motion.div
          animate={
            activeCategory?.startsWith('classes')
              ? { background: 'white' }
              : { background: 'transparent' }
          }
          className={`group transition-color max-w-[400px] w-full  border border-transparent border-t-white p-6 lg:p-10 flex flex-col gap-3 md:gap-6  cursor-pointer justify-between`}
          onMouseEnter={() => setActiveCategory('classes')}
        >
          <h3
            className={` lg:text-3xl text-xl font-light transition-all duration-200 ${
              activeCategory?.startsWith('classes')
                ? 'text-black'
                : 'text-white'
            }`}
          >
            Engineered Results{' '}
          </h3>
          <p
            className={`max-w-sm font-light text-sm lg:text-base transition-all duration-200 ${
              activeCategory?.startsWith('classes')
                ? 'text-black'
                : 'text-white'
            }`}
          >
            Trained, educated, and backed by our Health Advisory Board, Equinox
            Coaches are certified to develop programs for total body
            conditioning, specialized needs, and advanced health optimization.
          </p>
        </motion.div>
      </div>
      <div className='flex md:hidden mb-40 w-full p-[10%]'>
        {/* <SwiperSection3Mob
          activeCategory={activeCategory}
          handlesetActiveCategory={setActiveCategory}
        /> */}
      </div>
    </section>
  );
}

export default Section3Trainer;

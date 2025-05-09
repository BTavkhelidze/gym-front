'use client';
import React, { useState } from 'react';
import { classes, personalTrainer, sauna } from '../../../public/image';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SwiperSection3Mob from './swiperSection3Mob';
import '@/app/globals.css';

function Section3() {
  const [activeCategory, setActiveCategory] = useState<string | null>('space');

  return (
    <section className='w-full h-dvh relative flex items-end md:items-center xl:justify-center xl:items-end'>
      <div className='w-full h-full absolute top-0 left-0 -z-10'>
        {activeCategory?.startsWith('space') && (
          <Image
            src={sauna}
            alt='space'
            className='object-cover flex w-full h-full'
          />
        )}
        {activeCategory?.startsWith('classes') && (
          <Image
            src={classes}
            alt='classes'
            className='object-cover not-only:flex w-full h-full'
          />
        )}
        {activeCategory?.startsWith('trainer') && (
          <Image
            src={personalTrainer}
            alt='trainer'
            className='object-cover flex w-full h-full'
          />
        )}
      </div>
      <div className='w-full absolute  top-0 h-full bg-black opacity-30 -z-10'></div>
      <div className='hidden gap-2 px-[10%] md:px-10  xl:px-30 xl:mb-20 md:flex xl:flex-row flex-col '>
        <motion.div
          animate={
            activeCategory?.startsWith('space')
              ? { background: 'white' }
              : { background: 'transparent' }
          }
          className={`group max-w-[400px] w-full transition-color justify-between duration-500 border border-transparent border-t-white p-6 lg:p-10 flex flex-col gap-6 cursor-pointer`}
          onMouseEnter={() => setActiveCategory('space')}
        >
          <h3
            className={`text-2xl lg:text-3xl font-light transition-all duration-200 ${
              activeCategory?.startsWith('space') ? 'text-black' : 'text-white'
            }`}
          >
            Luxury Recovery Spaces
          </h3>
          <p
            className={`max-w-sm text-sm lg:text-base font-light transition-all duration-200 ${
              activeCategory?.startsWith('space') ? 'text-black' : 'text-white'
            }`}
          >
            Unwind in our state-of-the-art saunas, ice baths, and relaxation
            zones designed to optimize your recovery and well-being.
          </p>
          <div
            className={`relative self-start mt-2 cursor-pointer flex flex-col gap-1 ${
              activeCategory?.startsWith('space') ? 'text-black' : 'text-white'
            }`}
          >
            <Link
              href={'/'}
              className='hover:text-gray-600 transition-colors duration-100 text-sm lg:text-base'
            >
              Discover Facilities
            </Link>
            <div
              className={`w-full h-[1px] bg-white transition-all duration-100 group-hover:bg-black -bottom-2 self-start`}
            ></div>
          </div>
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
            Dynamic Group Classes
          </h3>
          <p
            className={`max-w-sm font-light text-sm lg:text-base transition-all duration-200 ${
              activeCategory?.startsWith('classes')
                ? 'text-black'
                : 'text-white'
            }`}
          >
            Join high-energy classes led by expert instructors, from yoga and
            spin to strength training and HIIT workouts.
          </p>
          <div
            className={`relative self-start mt-2 cursor-pointer flex flex-col gap-1 ${
              activeCategory?.startsWith('classes')
                ? 'text-black'
                : 'text-white'
            }`}
          >
            <Link
              href={'/'}
              className='hover:text-gray-600 transition-colors duration-100 text-sm lg:text-base'
            >
              View Class Schedule
            </Link>
            <div
              className={`w-full h-[1px] bg-white transition-all duration-100 group-hover:bg-black -bottom-2 self-start`}
            ></div>
          </div>
        </motion.div>

        <motion.div
          animate={
            activeCategory?.startsWith('trainer')
              ? { background: 'white' }
              : { background: 'transparent' }
          }
          className={`group max-w-[400px] w-full  transition-color duration-500 border border-transparent border-t-white p-6 lg:p-10 flex flex-col gap-6 cursor-pointer justify-between`}
          onMouseEnter={() => setActiveCategory('trainer')}
        >
          <h3
            className={`text-2xl lg:text-3xl font-light transition-all duration-200 ${
              activeCategory?.startsWith('trainer')
                ? 'text-black'
                : 'text-white'
            }`}
          >
            Personal Training
          </h3>
          <p
            className={`max-w-sm font-light text-sm lg:text-base transition-all duration-200 ${
              activeCategory?.startsWith('trainer')
                ? 'text-black'
                : 'text-white'
            }`}
          >
            Achieve your goals with one-on-one sessions tailored by certified
            trainers to your fitness level and aspirations.
          </p>
          <div
            className={`relative self-start mt-2 cursor-pointer flex flex-col gap-1 ${
              activeCategory?.startsWith('trainer')
                ? 'text-black'
                : 'text-white'
            }`}
          >
            <Link
              href={'/'}
              className='hover:text-gray-600 transition-colors duration-100 text-sm lg:text-base'
            >
              Meet Our Trainers
            </Link>
            <div
              className={`w-full h-[1px] bg-white transition-all duration-100 group-hover:bg-black -bottom-2 self-start`}
            ></div>
          </div>
        </motion.div>
      </div>
      <div className='flex md:hidden mb-40 w-full p-[10%]'>
        <SwiperSection3Mob
          activeCategory={activeCategory}
          handlesetActiveCategory={setActiveCategory}
        />
      </div>
    </section>
  );
}

export default Section3;

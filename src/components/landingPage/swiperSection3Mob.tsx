'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface IProps {
  handlesetActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
  activeCategory: string | null;
}

const SwiperSection3Mob: React.FC<IProps> = ({
  handlesetActiveCategory,
  activeCategory,
}) => {
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={10}
      // pagination={{
      //   clickable: true,
      // }}
      modules={[Pagination]}
      className='mySwiper'
    >
      <SwiperSlide className=''>
        <motion.div
          animate={
            activeCategory?.startsWith('space')
              ? { background: 'white' }
              : { background: 'transparent' }
          }
          className={`group transition-color duration-500 border border-transparent border-t-white p-2 md:p-10 flex flex-col w-[250px] gap-2 md:gap-6 cursor-pointer mr-10`}
          onMouseEnter={() => handlesetActiveCategory('space')}
        >
          <h3
            className={`text-lg md:text-3xl font-light transition-all duration-200 ${
              activeCategory?.startsWith('space') ? 'text-black' : 'text-white'
            }`}
          >
            Luxury Recovery Spaces
          </h3>
          <p
            className={`max-w-sm font-light text-xs md:text-base transition-all duration-200 ${
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
              className='hover:text-gray-600 text-xs self-center md:text-base transition-colors duration-100'
            >
              Discover Facilities &rarr;
            </Link>
            <div
              className={`w-full h-[1px] bg-white transition-all duration-100 group-hover:bg-black -bottom-2 self-start`}
            ></div>
          </div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide className=''>
        <motion.div
          animate={
            activeCategory?.startsWith('classes')
              ? { background: 'white' }
              : { background: 'transparent' }
          }
          className={`group transition-color duration-500 border border-transparent border-t-white p-2 md:p-10 flex flex-col w-[250px] gap-2 md:gap-6 cursor-pointer `}
          onMouseEnter={() => handlesetActiveCategory('classes')}
        >
          <h3
            className={`text-lg md:text-3xl font-light transition-all duration-200 ${
              activeCategory?.startsWith('classes')
                ? 'text-black'
                : 'text-white'
            }`}
          >
            Dynamic Group Classes
          </h3>
          <p
            className={`max-w-sm font-light text-xs md:text-base transition-all duration-200 ${
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
              className='hover:text-gray-600 text-xs md:text-base transition-colors duration-100'
            >
              View Class Schedule &rarr;
            </Link>
            <div
              className={`w-full h-[1px] bg-white transition-all duration-100 group-hover:bg-black -bottom-2 self-start`}
            ></div>
          </div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide className=''>
        <motion.div
          animate={
            activeCategory?.startsWith('trainer')
              ? { background: 'white' }
              : { background: 'transparent' }
          }
          className={`group transition-color duration-500 border border-transparent border-t-white p-2 md:p-10 flex flex-col w-[250px] gap-2 md:gap-6 cursor-pointer `}
          onMouseEnter={() => handlesetActiveCategory('trainer')}
        >
          <h3
            className={`text-lg md:text-3xl font-light transition-all duration-200${
              activeCategory?.startsWith('trainer')
                ? 'text-black'
                : 'text-white'
            }`}
          >
            Personal Training
          </h3>
          <p
            className={`max-w-sm font-light text-xs md:text-base transition-all duration-200  ${
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
              className='hover:text-gray-600 text-xs md:text-base transition-colors duration-100'
            >
              Meet Our Trainers &rarr;
            </Link>
            <div
              className={`w-full h-[1px] bg-white transition-all duration-100 group-hover:bg-black -bottom-2 self-start`}
            ></div>
          </div>
        </motion.div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSection3Mob;

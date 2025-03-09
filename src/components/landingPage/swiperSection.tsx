'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import '@/app/globals.css';

import { Pagination, Autoplay } from 'swiper/modules';
import Framer from '../ui/framer';
import Image from 'next/image';

export default function App() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={2000}
      modules={[Pagination, Autoplay]}
      className='mySwiper'
    >
      <SwiperSlide>
        <div className='relative w-full xl:min-h-[700px] lg:min-h-[500px] max-h-[700px] h-full  flex items-center justify-center bg-red-300 text-white text-lg font-semibold'>
          <div className='absolute w-full h-full top-0 '>
            <Image
              alt='image'
              fill
              className='object-cover h-full w-full '
              src='/image/workout1.avif'
            />
          </div>
          <div className='absolute inset-0 bg-black/40'></div>
          <div className='relative z-10 flex px-4 py-[77px] lg:py-2 lg:px-2 items-center flex-col justify-center gap-2 text-center'>
            <p className='lg:text-[60px] text-[40px]'>
              Become more than you are.
            </p>
            <p className='text-base font-semibold'>
              Staying active is great fun and keeps you healthy. Check out how
              you can join in.
            </p>
            <div className='w-[200px] mt-4 h-[100px]'>
              <Framer>
                <div className='text-base rounded-[38px] font-normal px-[26px] py-[16px] cursor-pointer bg-[#e43071] hover:bg-[#be285e] text-[#ffffff] text-center flex items-center justify-center'>
                  <p>Let’s do it!</p>
                </div>
              </Framer>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='relative w-full xl:min-h-[700px] lg:min-h-[500px] max-h-[700px] h-full  flex items-center justify-center bg-red-300 text-white text-lg font-semibold'>
          <div className='absolute w-full h-full top-0 '>
            <Image
              alt='image'
              fill
              className='object-cover h-full w-full '
              src='/image/workout1.avif'
            />
          </div>
          <div className='absolute inset-0 bg-black/40'></div>
          <div className='relative z-10 flex px-4 py-[77px] lg:py-2 lg:px-2 items-center flex-col justify-center gap-2 text-center'>
            <p className='lg:text-[60px] text-[40px]'>
              Strength comes from within.
            </p>
            <p className='text-base font-semibold'>
              Discover workouts that challenge your limits and boost your
              confidence.
            </p>
            <div className='w-[200px] mt-4 h-[100px]'>
              <Framer>
                <div className='text-base rounded-[38px] font-normal px-[26px] py-[16px] cursor-pointer bg-[#1e90ff] hover:bg-[#1877cc] text-[#ffffff] text-center flex items-center justify-center'>
                  <p>Start Training</p>
                </div>
              </Framer>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='relative w-full xl:min-h-[700px] lg:min-h-[500px] max-h-[700px] h-full  flex items-center justify-center bg-red-300 text-white text-lg font-semibold'>
          <div className='absolute w-full h-full top-0 '>
            <Image
              alt='image'
              fill
              className='object-cover h-full w-full '
              src='/image/workout1.avif'
            />
          </div>
          <div className='absolute inset-0 bg-black/40'></div>
          <div className='relative z-10 flex px-4 py-[77px] lg:py-2 lg:px-2 items-center flex-col justify-center gap-2 text-center'>
            <p className='lg:text-[60px] text-[40px]'>Push your limits.</p>
            <p className='text-base font-semibold'>
              Your journey to peak fitness starts here. Join a community of
              goal-setters.
            </p>
            <div className='w-[200px] mt-4 h-[100px]'>
              <Framer>
                <div className='text-base rounded-[38px] font-normal px-[26px] py-[16px] cursor-pointer bg-[#28a745] hover:bg-[#218838] text-[#ffffff] text-center flex items-center justify-center'>
                  <p>Join Now</p>
                </div>
              </Framer>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='relative w-full xl:min-h-[700px] lg:min-h-[500px] max-h-[700px] h-full  flex items-center justify-center bg-red-300 text-white text-lg font-semibold'>
          <div className='absolute w-full h-full top-0 '>
            <Image
              alt='image'
              fill
              className='object-cover h-full w-full '
              src='/image/workout1.avif'
            />
          </div>
          <div className='absolute inset-0 bg-black/40'></div>
          <div className='relative z-10 flex px-4 py-[77px] lg:py-2 lg:px-2 items-center flex-col justify-center gap-2 text-center'>
            <p className='lg:text-[60px] text-[40px]'>Make every move count.</p>
            <p className='text-base font-semibold'>
              Transform your body and mind with expert training programs.
            </p>
            <div className='w-[200px] mt-4 h-[100px]'>
              <Framer>
                <div className='text-base rounded-[38px] font-normal px-[26px] py-[16px] cursor-pointer bg-[#dc3545] hover:bg-[#c82333] text-[#ffffff] text-center flex items-center justify-center'>
                  <p>Get Started</p>
                </div>
              </Framer>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

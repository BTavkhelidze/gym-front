'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import '@/app/globals.css';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Framer from '../ui/framer';
import Image from 'next/image';

export default function App() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      //   autoplay={{
      //     delay: 5000,
      //     disableOnInteraction: false,
      //   }}
      speed={2000}
      modules={[Pagination]}
      className='mySwiper'
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className='relative w-full h-[700px] flex items-center justify-center text-white text-lg font-semibold'>
          {/* Background Image */}
          <div
            className='absolute w-full h-full top-0 '
            // style={{
            //   backgroundImage:
            //     "url('https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/9a799228-30ae-411b-95dc-5c625b67d97e/nike-training-club-app-home-workouts-more.jpg')",
            // }}
          >
            <Image
              alt='image'
              fill
              className='object-cover w-full h-[20px] '
              src={
                'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/9a799228-30ae-411b-95dc-5c625b67d97e/nike-training-club-app-home-workouts-more.jpg'
              }
            />
          </div>

          {/* Content */}
          <div className='relative z-10 flex items-center flex-col justify-center gap-2 text-center'>
            <p className='text-[60px]'>Become more than you are.</p>
            <p className='text-[17px] font-semibold'>
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

      {/* Slide 2 */}
      <SwiperSlide>
        <div className='relative w-full h-[700px] flex items-center justify-center text-white text-lg font-semibold'>
          <div
            className='absolute inset-0 bg-cover bg-center'
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/1600x900/?running')",
            }}
          ></div>
          <div className='absolute inset-0 bg-black/40'></div>
          <div className='relative z-10 flex items-center flex-col justify-center gap-2 text-center'>
            <p className='text-[60px]'>Strength comes from within.</p>
            <p className='text-[17px] font-semibold'>
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

      {/* Slide 3 */}
      <SwiperSlide>
        <div className='relative w-full h-[700px] flex items-center justify-center text-white text-lg font-semibold'>
          <div
            className='absolute inset-0 bg-cover bg-center'
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/1600x900/?gym')",
            }}
          ></div>
          <div className='absolute inset-0 bg-black/40'></div>
          <div className='relative z-10 flex items-center flex-col justify-center gap-2 text-center'>
            <p className='text-[60px]'>Push your limits.</p>
            <p className='text-[17px] font-semibold'>
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

      {/* Slide 4 */}
      <SwiperSlide>
        <div className='relative w-full h-[700px] flex items-center justify-center text-white text-lg font-semibold'>
          <div
            className='absolute inset-0 bg-cover bg-center'
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/1600x900/?training')",
            }}
          ></div>
          <div className='absolute inset-0 bg-black/40'></div>
          <div className='relative z-10 flex items-center flex-col justify-center gap-2 text-center'>
            <p className='text-[60px]'>Make every move count.</p>
            <p className='text-[17px] font-semibold'>
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

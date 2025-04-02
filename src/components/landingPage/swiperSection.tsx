'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
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
      className='mySwiper mt-[99px]'
    >
      <SwiperSlide>
        <div className='relative w-full xl:min-h-[700px] lg:min-h-[500px] max-h-[700px] h-full flex items-center justify-center bg-red-300 text-white text-lg font-semibold'>
          <div className='absolute w-full h-full top-0'>
            <Image
              alt='image'
              fill
              className='object-cover h-full w-full'
              src='/image/workout1.avif'
            />
          </div>
          <div className='absolute inset-0 bg-black/40'></div>
          <div className='relative z-10 flex px-4 py-[77px] lg:py-2 lg:px-2 items-center flex-col justify-center gap-2 text-center'>
            <p className='lg:text-[60px] text-[40px]'>Transform Your Body</p>
            <p className='text-base font-semibold'>
              Join our tailored fitness programs to achieve your dream physique.
              Get started with a free consultation today!
            </p>
            <div className='w-[200px] mt-4 h-[100px]'>
              <Framer>
                <div className='text-base rounded-[38px] font-normal px-[26px] py-[16px] cursor-pointer bg-[#e43071] hover:bg-[#be285e] text-[#ffffff] text-center flex items-center justify-center'>
                  <p>Start Now</p>
                </div>
              </Framer>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='relative w-full xl:min-h-[700px] lg:min-h-[500px] max-h-[700px] h-full flex items-center justify-center bg-red-300 text-white text-lg font-semibold'>
          <div className='absolute w-full h-full top-0'>
            <Image
              alt='image'
              fill
              className='object-cover h-full w-full'
              src='/image/workout1.avif'
            />
          </div>
          <div className='absolute inset-0 bg-black/40'></div>
          <div className='relative z-10 flex px-4 py-[77px] lg:py-2 lg:px-2 items-center flex-col justify-center gap-2 text-center'>
            <p className='lg:text-[60px] text-[40px]'>Get Stronger Every Day</p>
            <p className='text-base font-semibold'>
              Our training programs are designed to push your limits and help
              you grow stronger, faster, and more resilient.
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
        <div className='relative w-full xl:min-h-[700px] lg:min-h-[500px] max-h-[700px] h-full flex items-center justify-center bg-red-300 text-white text-lg font-semibold'>
          <div className='absolute w-full h-full top-0'>
            <Image
              alt='image'
              fill
              className='object-cover h-full w-full'
              src='/image/workout1.avif'
            />
          </div>
          <div className='absolute inset-0 bg-black/40'></div>
          <div className='relative z-10 flex px-4 py-[77px] lg:py-2 lg:px-2 items-center flex-col justify-center gap-2 text-center'>
            <p className='lg:text-[60px] text-[40px]'>
              Achieve Your Fitness Goals
            </p>
            <p className='text-base font-semibold'>
              Whether you&apos;re a beginner or an expert, we have the right
              programs to meet your fitness goals.
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
        <div className='relative w-full xl:min-h-[700px] lg:min-h-[500px] max-h-[700px] h-full flex items-center justify-center bg-red-300 text-white text-lg font-semibold'>
          <div className='absolute w-full h-full top-0'>
            <Image
              alt='image'
              fill
              className='object-cover h-full w-full'
              src='/image/workout1.avif'
            />
          </div>
          <div className='absolute inset-0 bg-black/40'></div>
          <div className='relative z-10 flex px-4 py-[77px] lg:py-2 lg:px-2 items-center flex-col justify-center gap-2 text-center'>
            <p className='lg:text-[60px] text-[40px]'>
              Join a Fitness Community
            </p>
            <p className='text-base font-semibold'>
              Become part of a supportive community that motivates you to reach
              your full potential.
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

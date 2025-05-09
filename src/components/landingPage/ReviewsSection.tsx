'use client';
import React from 'react';
import Image from 'next/image';
import {
  DraggableCardBody,
  DraggableCardContainer,
} from '../ui/draggable-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function TestimonialSection() {
  const reviews = [
    {
      name: 'Emma Thompson',
      title: 'Transformative Experience',
      text: 'The recovery spaces here are unparalleled. The saunas and ice baths have become a staple in my wellness routine, leaving me refreshed and energized.',
    },
    {
      name: 'Liam Carter',
      title: 'Top-Notch Facilities',
      text: 'I’ve never experienced such well-designed recovery zones. The attention to detail and ambiance make every visit feel like a luxury retreat.',
    },
    {
      name: 'Sophia Nguyen',
      title: 'Community Vibes',
      text: 'Not only are the facilities amazing, but the community is so welcoming. It’s motivating to be around like-minded people who prioritize health.',
    },
    {
      name: 'James Patel',
      title: 'Game-Changer for Recovery',
      text: 'The ice baths and relaxation zones have significantly improved my post-workout recovery. I feel stronger and more focused every day.',
    },
    {
      name: 'Olivia Brooks',
      title: 'Pure Bliss',
      text: 'Every session feels like a mini-vacation. The serene environment and cutting-edge equipment make this place a must-visit for anyone serious about wellness.',
    },
  ];

  return (
    <div className='max-w-[1200px] w-full flex flex-col items-center justify-center m-auto mt-[90px] text-center px-[10%] md:px-10 xl:px-30'>
      <h2 className='text-xl md:text-[40px] font-bold text-[white]'>
        What Our Members Are Saying
      </h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper'
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              className={`group max-w-[400px] bg-white w-full transition-color duration-500 border border-transparent border-t-white p-6 lg:p-10 flex flex-col gap-6 cursor-pointer`}
            >
              <h3
                className={`text-2xl lg:text-3xl font-light transition-all duration-200`}
              >
                {review.title}
              </h3>
              <p
                className={`max-w-sm text-sm lg:text-base font-light transition-all duration-200`}
              >
                {review.text}
              </p>
              <div
                className={`relative self-start mt-2 cursor-pointer flex flex-col gap-1`}
              >
                <p className='text-sm font-semibold'>{review.name}</p>
                <div
                  className={`w-full h-[1px] bg-white transition-all duration-100 group-hover:bg-black -bottom-2 self-start`}
                ></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='mt-8'>
        <button className='bg-[#E43071] hover:bg-[#be285e] text-white text-lg py-3 px-8 rounded-full'>
          Join Our Community
        </button>
      </div>
    </div>
  );
}

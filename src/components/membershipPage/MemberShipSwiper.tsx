'use client';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { swpperData } from '@/commons/services/memberShip';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const MemberShipSwiper = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  // Swiper-ის ინიციალიზაციის შემდეგ განახლება
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.update();
    }
  }, [swiperInstance]);

  return (
    <div className='relative w-full h-[500px]'>
      <Swiper
        slidesPerView={2} // ერთდროულად 2 სლაიდი
        spaceBetween={30} // სლაიდებს შორის მანძილი
        centeredSlides={true} // ცენტრირება
        centeredSlidesBounds={false} // ცენტრირება საზღვრებში (გამორთულია)
        initialSlide={1} // იწყებს შუა სლაიდიდან
        loop={false} // Loop გამორთულია
        pagination={{ clickable: true }} // პაგინაცია
        modules={[Pagination]} // მოდულები
        onSwiper={(swiper) => setSwiperInstance(swiper)} // Swiper ინსტანსის შენახვა
        className='mySwiper2'
      >
        {swpperData.map((item) => (
          <SwiperSlide
            key={item.id}
            className='swiper-slide3 border border-gray-300 rounded-lg overflow-hidden'
          >
            <div className='relative h-full w-full'>
              <Image
                src={item.img}
                fill
                alt={`Swiper image ${item.id}`}
                className='object-cover'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ნავიგაციის ღილაკები */}
      <div className='absolute top-1/2 w-full flex justify-between z-10 px-4'>
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className='custom-prev bg-black/50 text-white p-2 rounded-full'
        >
          ←
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className='custom-next bg-black/50 text-white p-2 rounded-full'
        >
          →
        </button>
      </div>
    </div>
  );
};

export default MemberShipSwiper;

'use client';
import React from 'react';

import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';

export default function HomeS2() {
  const user = useAuthStore((s) => s.user);
  const url = user ? '/dashboard/membership' : '/auth';
  return (
    <section className='w-full h-[110vh] py-10 relative overflow-hidden flex items-center  '>
      <div className='w-full h-full absolute top-0 left-0 overflow-hidden -z-10'>
        <video
          className='w-full object-cover h-full'
          src='/memberVideo.mp4'
          autoPlay
          muted
          loop
        />
      </div>
      <div className='max-w-[1440px] w-full mx-auto flex items-start px-[10%] md:px-10  xl:px-30 '>
        <div className='  bg-white md:mb-80 md:p-10 p-4 flex flex-col gap-6 '>
          <h3 className='text-xl md:text-3xl font-light'>
            One Membership. No Limits.
          </h3>
          <p className='max-w-sm font-light md:text-base text-sm '>
            From dynamic classes to personal training and luxury recovery zones,
            your journey to peak performance starts here.
          </p>
          <div className='relative self-start mt-2 cursor-pointer  flex flex-col gap-1'>
            <Link
              href={url}
              className='hover:text-gray-600 text-xs md:text-sm  transition-colors duration-500'
            >
              Explore Membership
            </Link>
            <div className=' w-full h-[1px] bg-black -bottom-2 self-start'></div>
          </div>
        </div>
      </div>
    </section>
  );
}

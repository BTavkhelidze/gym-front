import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { animationDiv } from '@/framer';
import Link from 'next/link';

export default function HomeS2() {
  return (
    <div className='w-full h-[110vh] py-10 relative overflow-hidden flex items-center px-30'>
      <div className='w-full h-full absolute top-0 left-0 overflow-hidden -z-10'>
        <video
          className='w-full object-cover h-full'
          src='/memberVideo.mp4'
          autoPlay
          muted
          loop
        />
      </div>
      <div className='  bg-white mb-80 p-10 flex flex-col gap-6'>
        <h3 className='text-3xl font-light'>One Membership. No Limits.</h3>
        <p className='max-w-sm font-light '>
          From dynamic classes to personal training and luxury recovery zones,
          your journey to peak performance starts here.
        </p>
        <div className='relative self-start mt-2 cursor-pointer  flex flex-col gap-1'>
          <Link
            href={'/'}
            className='hover:text-gray-600 transition-colors duration-500'
          >
            Explore Membership
          </Link>
          <div className=' w-full h-[1px] bg-black -bottom-2 self-start'></div>
        </div>
      </div>
    </div>
  );
}

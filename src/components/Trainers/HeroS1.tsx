'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { animationDiv } from '@/framer';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';

function TrainersHeroS1() {
  const user = useAuthStore((s) => s.user);
  const route = useRouter();
  const startNowHref = user ? '/dashboard/classes' : '/auth';
  return (
    <div className='w-full h-screen py-10 relative overflow-hidden flex items-center '>
      <div className='w-full h-full absolute top-0 left-0 overflow-hidden z-10'>
        <video
          className='w-full object-cover h-full'
          src='//videos.ctfassets.net/drib7o8rcbyf/4aMHPB1EC8PchZEv1YvGSY/251403550fc17b5f1fadf87a46eac341/PT_LANDING_PAGE_WEB_1440x900.mp4'
          autoPlay
          muted
          loop
        />
      </div>
      <div className='max-w-[1440px] w-full z-20  mx-auto  px-[10%] md:px-10  xl:px-30'>
        <motion.div
          className='w-[600px] h-[50px] '
          variants={animationDiv}
          transition={{ delay: 2.5 }}
          initial='initial'
          animate='animate'
        >
          <div className='text-4xl mx-auto font-normal text-neutral-300 dark:text-neutral-400'>
            <div className='text-4xl mx-auto font-normal text-neutral-300 dark:text-neutral-400'>
              Your Fitness, Our Mission!
            </div>
          </div>
          <div className='mt-[40px]'>
            <button
              onClick={() => route.push(startNowHref)}
              className='text-base rounded-[38px]  font-normal px-[64px] py-[18px]  cursor-pointer bg-white hover:bg-[#e0dcdc] text-[black] text-center flex items-center justify-center gap-[10px]'
            >
              <p>Start now</p>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TrainersHeroS1;

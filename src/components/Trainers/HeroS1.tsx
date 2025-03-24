'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { animationDiv } from '@/framer';
import Framer from '@/components/ui/framer';

function TrainersHeroS1() {
  return (
    <div className='w-full h-screen py-10 relative overflow-hidden flex items-center px-30'>
      <div className='w-full h-full absolute top-0 left-0 overflow-hidden z-10'>
        <video
          className='w-full object-cover h-full'
          src='//videos.ctfassets.net/drib7o8rcbyf/4aMHPB1EC8PchZEv1YvGSY/251403550fc17b5f1fadf87a46eac341/PT_LANDING_PAGE_WEB_1440x900.mp4'
          autoPlay
          muted
          loop
        />
      </div>
      <motion.div
        className='w-[600px] h-[50px] z-20'
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
        <div className='mt-[40px] w-[200px] h-[400px]'>
          <Framer>
            <div className='text-base rounded-[38px] font-normal px-[10px] py-[14px] cursor-pointer bg-[#e43071] hover:bg-[#be285e] text-[#ffffff] text-center flex items-center justify-center gap-[10px]'>
              <p>Start now</p> <div className='pt-1'></div>
            </div>
          </Framer>
        </div>
      </motion.div>
    </div>
  );
}

export default TrainersHeroS1;

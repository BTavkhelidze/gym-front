'use client';
import { motion } from 'framer-motion';
import { FlipWords } from '../ui/flip-words';
import Framer from '../ui/framer';
import { useAuthStore } from '@/store/authStore';
import { useEffect } from 'react';
// import Button from '../ui/Button';

const WelcomeS1 = () => {
  const words = ['shaped', 'forged', 'tailored'];

  const fetchUser = useAuthStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className='w-full h-dvh py-10 relative overflow-hidden flex items-center px-[10%] md:px-30'>
      <div className='w-full h-full absolute top-0 left-0 overflow-hidden -z-10'>
        <video
          className='w-full object-cover h-full'
          src='https://www.crossfit.com/wp-content/uploads/2023/11/13114552/CrossFit-Where-Fitness-Meets-Health.mp4'
          autoPlay
          muted
          loop
        />
      </div>
      <div className=' left-0 w-full h-full absolute bg-[#00000030]'></div>
      <div className='max-w-[1440px] w-full mx-auto'>
        <motion.div
          className='max-w-[600px] h-[50px]'
          initial={{ opacity: 0.0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
        >
          <div className='text-xl md:text-4xl mx-auto font-normal text-neutral-300 dark:text-neutral-400'>
            Workout
            <FlipWords words={words} className='md:ml-2 ' />
            to you
          </div>

          <div className={'mt-4 self-start max-w-[300px]'}>
            <button className='text-base rounded-[38px]  font-normal px-[32px] py-[12px] md:px-[64px] md:py-[18px]  cursor-pointer bg-white hover:bg-[#e0dcdc] text-[black] text-center flex items-center justify-center gap-[10px]'>
              <p>Start now</p> <p className='pt-1'></p>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeS1;

'use client';
import { motion } from 'framer-motion';
import { FlipWords } from '../ui/flip-words';
import Framer from '../ui/framer';
import arrow from '@/../public/svg/arrow.svg';
import Image from 'next/image';

const WelcomeS1 = () => {
  const words = ['shaped', 'forged', 'tailored'];

  return (
    <div className='w-full h-[100vh] py-10  relative  overflow-y-hidden  flex items-center px-30 '>
      <div className='w-full h-screen fixed  top-0 overflow-hidden  left-0 -z-10 '>
        <video
          className='w-full  object-cover h-screen   '
          src='https://www.crossfit.com/wp-content/uploads/2023/11/13114552/CrossFit-Where-Fitness-Meets-Health.mp4'
          autoPlay
          muted
          loop
        />
      </div>
      <motion.div
        className='w-[600px] h-[50px] '
        initial={{ opacity: 0.0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        // whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
      >
        <div className='text-4xl mx-auto font-normal text-neutral-300 dark:text-neutral-400'>
          Workout
          <FlipWords words={words} className='ml-2 ' />
          to you
        </div>
        <div className='mt-[40px] w-[200px] '>
          <Framer>
            <div className='text-base rounded-[38px] font-normal px-[10px] py-[14px] cursor-pointer bg-[#e43071] hover:bg-[#be285e]  text-[#ffffff] text-center flex items-center justify-center gap-[10px] '>
              <p>Start now</p>{' '}
              <div className='pt-1 '>
                {' '}
                <Image
                  src={arrow}
                  alt='arrow'
                  className='fill-red-300 stroke-amber-100'
                />
              </div>
            </div>
          </Framer>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeS1;

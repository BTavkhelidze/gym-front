'use client';

import { FlipWords } from '../ui/flip-words';

import { useAuthStore } from '@/store/authStore';
import { useEffect } from 'react';

import { useRouter } from 'next/navigation';
// import Button from '../ui/Button';

const WelcomeS1 = () => {
  const words = ['shaped', 'forged', 'tailored'];
  const route = useRouter();
  const fetchUser = useAuthStore((state) => state.fetchUser);
  const user = useAuthStore((s) => s.user);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const startNowHref = user ? '/dashboard/classes' : '/auth';

  return (
    <section className='w-full h-dvh py-10 relative overflow-hidden flex items-center p'>
      <div className='w-full h-full absolute top-0 left-0 overflow-hidden -z-20'>
        <video
          className='w-full object-cover h-full'
          src='https://www.crossfit.com/wp-content/uploads/2023/11/13114552/CrossFit-Where-Fitness-Meets-Health.mp4'
          autoPlay
          muted
          loop
        />
      </div>
      <div className=' left-0 w-full h-full absolute -z-10 bg-[#00000030]'></div>
      <div
        className='max-w-[1440px] w-full mx-auto px-[10%] md:px-10  xl:px-30
        '
      >
        <div className='max-w-[600px] h-[50px]'>
          <div className='text-xl md:text-4xl mx-auto font-normal text-neutral-300 dark:text-neutral-400'>
            Workout
            <FlipWords words={words} className='md:ml-2 ' />
            to you
          </div>

          <div className={'mt-4 self-start max-w-[300px]'}>
            <button
              onClick={() => route.push(startNowHref)}
              className='text-base rounded-[38px]  font-normal px-[32px] py-[12px] md:px-[64px] md:py-[18px] bg-white hover:bg-[#e0dcdc] text-[black] text-center flex items-center justify-center gap-[10px] cursor-pointer'
            >
              <p>Start now</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeS1;

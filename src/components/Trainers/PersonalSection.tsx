import React from 'react';
import Image from 'next/image';
import { trainer, trainer1 } from '../../../public/image';

function PersonalSection() {
  return (
    <section className='max-w-[1440px] w-full mx-auto flex   px-[10%] md:px-10  xl:px-30 h-[700px]  gap-10 justify-between text-white md:flex-row flex-col pt-10 '>
      <div className=' max-w-[500px] flex-1 flex flex-col gap-3  h-full justify-center '>
        <h3 className='text-xl md:text-2xl font-medium'>
          1:1 PRECISION RUN <span>COACHING</span>
        </h3>
        <p className='mt-4 text-sm md:text-base'>
          offers a new approach to train toward a personal best, a first big
          race, or simply a way to become a better runner.
        </p>
        <p className='mt-4 text-sm md:text-base'>
          Train with a certified COACH in-Club and get a personalized strength,
          conditioning, and regeneration plan.
        </p>
        <button className='bg-red-400 px-2 py-4 mt-4 self-start cursor-pointer text-sm md:text-base'>
          Book A Session
        </button>
      </div>
      <div className='flex-1 max-w-[550px]'>
        <div className='relative w-full h-full'>
          <Image
            alt='trainers'
            className='object-cover absolute top-0 right-0 w-[90%] h-full'
            src={trainer}
          />
          <Image
            alt='trainers'
            width={150}
            height={200}
            className='object-cover absolute -top-10 md:top-6 z-20 -right-5 md:right-none md:left-5'
            src={trainer1}
          />
          <Image
            alt='trainers'
            width={200}
            height={200}
            className='object-cover absolute bottom-10 z-20 -left-4 md:-left-10'
            src={trainer1}
          />
        </div>
      </div>
    </section>
  );
}

export default PersonalSection;

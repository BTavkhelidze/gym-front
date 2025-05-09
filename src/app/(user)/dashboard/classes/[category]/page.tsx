'use client';
import React from 'react';
import { categoryClasses } from '@/components/Classes/ClassesCategory';
import Image from 'next/image';

function page({ params }) {
  const classParam = params.category;

  const classCategory = categoryClasses.filter(
    (el) => el.name === classParam
  )[0];

  console.log(classCategory, 'classCategory');
  return (
    <main className='text-white '>
      <div className='w-full  h-screen py-10 relative overflow-hidden flex items-center '>
        <div className='w-full h-full absolute top-0 left-0 overflow-hidden -z-20'>
          <Image
            src={classCategory.image}
            alt={classCategory.name}
            fill
            className='object-cover'
          />
        </div>
        <div className='w-full h-full absolute top-0 left-0 overflow-hidden -z-10 bg-[#00000050]'></div>
        <div className='max-w-[1440px] h-full w-full mx-auto px-[10%] md:px-10  xl:px-30'>
          <div className=' h-full flex flex-col justify-center text-center md:text-start '>
            <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold    relative z-20 pb-6 t-to-b  dark:via-white dark:to-white'>
              {classCategory.name} <br />
              {'    '}
            </h1>
            <p className='text-xl md:text-2xl '>{classCategory.description}</p>
            <div className='mt-6 self-center md:self-start'>
              <button className='text-base rounded-[38px]  font-normal px-[32px] py-[14px] md:px-[64px] md:py-[18px]  cursor-pointer bg-white hover:bg-[#e0dcdc] text-[black] text-center flex items-center justify-center gap-[10px]'>
                <p className=''>Try {classCategory.name}</p>{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <p>{classCategory.name}</p>{' '} */}
    </main>
  );
}

export default page;

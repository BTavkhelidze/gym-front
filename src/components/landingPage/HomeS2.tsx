import Image from 'next/image';
import React from 'react';

export default function HomeS2() {
  return (
    <div className='max-w-[1200px] w-full flex justify-between items-center m-auto mt-[90px]'>
      <div className=''>
        <Image src='/image/weight.png' width={347} height={399} alt='weight' />
        <Image
          src='/image/situp.png'
          width={241}
          height={359}
          alt='situp'
          className='relative mt-[-220px] ml-[199px]'
        />
      </div>
      <div className='max-w-[540px] w-full'>
        <h2 className='text-[40px] font-bold text-[#E43071] '>
          Meet your new body
        </h2>
        <p className='mt-2.5 text-[16px]'>
          Transform your fitness journey with personalized training, tailored to
          your goals. Whether you're looking to build muscle, lose weight, or
          boost your stamina, we have the right plan for you. Join our community
          and start seeing results today!
        </p>
        <button className='cursor-pointer max-w-[237px] w-full h-[68px] bg-none border-[1px] border-[#E43071] rounded-[38px] mt-[20px] text-[#E43071]'>
          Join Now
        </button>
      </div>
    </div>
  );
}

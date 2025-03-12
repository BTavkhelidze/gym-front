'use client';

import { benefits } from '@/commons/services/memberShip';

const Benefits = () => {
  return (
    <div className=' w-full flex py-[60px]'>
      <div>
        <p className='w-[400px] font-[popins] font-normal text-[40px] leading-[40px] text-white '>
          NEW MEMBER BENEFITS WHEN YOU JOIN
        </p>
      </div>
      <div className='ml-[100px]'>
        <p className='w-[400px]  font-[popins] font-normal text-[19px] leading-[30px] text-white '>
          Join Equinox today and unlock exclusive benefits:
        </p>
        <ul className='ml-[15px]'>
          {benefits.map((item) => (
            <li
              key={item.id}
              className='w-[400px] font-[popins] font-normal text-[16px] leading-[25px] text-white list-disc'
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Benefits;

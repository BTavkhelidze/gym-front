'use client';

import { SocialLinks } from '@/commons/services/FooterLinks';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='relative overflow-hidden w-full h-[300px]  bg-[#000000]  flex flex-col justify-center items-center'>
      <div className=' h-full  pt-30 flex overflow-hidden flex-col  max-w-[1440px] w-full bottom-0 mx-auto justify-between px-[10%] md:px-10  xl:px-30 '>
        <div className='  w-full  flex-col sm:flex-row flex gap-4  items-start  justify-between'>
          <div className='flex  flex-col mr-[50px] max-w-[255px] w-full gap-[24px]'>
            <div>
              <h1 className='text-white font-bold text-xl md:text-2xl'>
                AlphaZone
              </h1>
            </div>
          </div>

          <div className='flex  flex-col gap-[10px] sm:gap-[24px] w-[255px]'>
            <h6 className='font-[manrope] font-medium text-[20px] leading-[30px] text-white'>
              Reach us
            </h6>
            <nav>
              <ul className='flex w-full gap-[16px]'>
                {SocialLinks.map((item) => (
                  <li
                    key={item.link}
                    className=' flex justify-center items-center  '
                  >
                    <Image
                      src={item.img}
                      width={24}
                      height={24}
                      alt='Social Icons'
                      className='cursor-pointer'
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className=' w-full flex my-10  '>
          <span className='font-[manrope] font-normal text-[14px] leading-[24px] text-[#D9DBE1]'>
            © 2020 AlphaZone. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';

import { headerLink } from '@/commons/services/hedaerLinks';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='w-full bg-[#E43071] h-[64px] sm:h-[101px] flex justify-center items-center'>
      <div className='max-w-[1440px] w-full px-[16px] sm:px-[40px] flex justify-between items-center'>
        <div className='hidden lg:block'>
          <Image
            src='/svg/The Benefits of Milo.svg'
            width={187}
            height={44}
            alt='Logo'
          />
        </div>
        <div className='block lg:hidden'>
          <Image src='/svg/MobileLogo.svg' width={102} height={28} alt='Logo' />
        </div>
        <nav className='max-w-[590px] w-full mx-[20px] hidden lg:flex'>
          <ul className='w-full flex  justify-between'>
            {headerLink.map((item) => (
              <Link key={item.link} href={item.link}>
                <li>
                  <span className='font-[popins] font-normal text-[16px] leading-[110px] text-white'>
                    {item.title}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className='flex items-center justify-between gap-[25px] lg:gap-[36px] '>
          <button className='flex'>
            <span className='hidden lg:block font-[popins] font-normal text-[16px] leading-[110px] text-white'>
              Search
            </span>
            <Image
              src='/svg/Search Icon.svg'
              width={20}
              height={20}
              alt='Search Icon'
            />
          </button>
          <button className='hidden lg:block w-[166px] h-[50px] rounded-[200px] bg-white '>
            <span className='font-[popins] font-normal text-[16px]  text-[#E43071] text-center '>
              Login
            </span>
          </button>
          {/*  */}
          <div className='flex lg:hidden  items-center justify-between p-4 '>
            <button
              onClick={toggleMenu}
              className=' text-white focus:outline-none'
            >
              <span
                className={`block w-[24px] h-[2px] bg-white mb-1 transition-transform duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block  w-[24px] h-[2px] bg-white mb-1 transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block  w-[24px] h-[2px] bg-white transition-transform duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

'use client';

// import Image from 'next/image';
import { useEffect, useState } from 'react';
import HeaderNav from './HeaderNav';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import LogOutBtn from './LogOutBtn';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const user = useAuthStore((state) => state.user);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    // Show header when scrolling up, hide when scrolling down
    setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const goToProfile = () => {
    router.push('/dashboard/profile');
  };

  return (
    <header
      className={`w-full h-[64px] sm:h-[101px] bg-[#000000] fixed top-0 left-0 right-0 z-50 flex justify-center items-center transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='max-w-[1440px] w-full px-[10%] md:px-[40px] flex justify-between items-center'>
        <h1 className='text-white font-bold text-xl md:text-2xl'>AlphaZone</h1>

        <div className='md:flex hidden gap-[200px]'>
          <HeaderNav />
          <div className='flex items-center justify-between gap-[25px] lg:gap-[36px]'>
            {!user ? (
              <button
                onClick={() => {
                  router.push('/auth');
                }}
                className='hidden cursor-pointer lg:block w-[166px] h-[50px] rounded-[200px] bg-white hover:bg-[#e0dcdc]'
              >
                <span className='font-[popins] font-normal text-[16px] text-[#000000] text-center'>
                  Login
                </span>
              </button>
            ) : (
              <>
                <LogOutBtn />
                <div
                  onClick={goToProfile}
                  className='text-white border-b py-2 cursor-pointer'
                >
                  Profile
                </div>
              </>
            )}

            <div className='flex lg:hidden items-center justify-between p-4'>
              <button
                type='button'
                title='button'
                onClick={toggleMenu}
                className='text-white focus:outline-none'
              >
                <span
                  className={`block w-[24px] h-[2px] bg-white mb-1 transition-transform duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block w-[24px] h-[2px] bg-white mb-1 transition-opacity duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`block w-[24px] h-[2px] bg-white transition-transform duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1' : ''
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>
        <div className='flex md:hidden text-white'> burger</div>
      </div>
    </header>
  );
};

export default Header;

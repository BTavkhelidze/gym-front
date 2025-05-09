'use client';

import { useEffect, useState } from 'react';
import HeaderNav from './HeaderNav';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import LogOutBtn from './LogOutBtn';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const user = useAuthStore((state) => state.user);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className='max-w-[1440px] w-full  px-[10%] md:px-10  xl:px-30 flex justify-between items-center'>
        <h1 className='text-white font-bold text-xl md:text-2xl'>AlphaZone</h1>

        <div className='md:flex hidden gap-[50px] lg:gap-[200px]'>
          <HeaderNav />
          <div className='flex items-center justify-between gap-[15px] lg:gap-[36px]'>
            {!user ? (
              <button
                onClick={() => {
                  router.push('/auth');
                }}
                className='hidden cursor-pointer md:block w-[166px] h-[50px] rounded-[200px] bg-white hover:bg-[#e0dcdc]'
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
          </div>
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;

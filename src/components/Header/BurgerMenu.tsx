'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeaderNav from './HeaderNav';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className='flex md:hidden text-white items-center justify-between p-4 z-50'>
      <button
        type='button'
        title='button'
        onClick={toggleMenu}
        className='text-white focus:outline-none z-30'
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
      {
        <motion.div
          initial={{ x: '600' }}
          animate={isOpen ? { x: 0 } : { x: 500 }}
          transition={{ duration: 0.5 }}
          className='absolute top-[64px]  sm:top-[101px]  right-0 w-[300px] z-20 h-screen bg-black p-10'
        >
          <div>
            <HeaderNav setIsOpen={setIsOpen} />
          </div>
        </motion.div>
      }
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className='absolute w-dvw h-screen top-0 left-0  bg-black opacity-50'
        ></div>
      )}
    </div>
  );
}

export default BurgerMenu;

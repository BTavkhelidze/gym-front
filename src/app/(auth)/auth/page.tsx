'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import LogIn from '@/components/(auth)/Login';
import Register from '@/components/(auth)/Register';
import { authImage } from '../../../../public/image';
import Image from 'next/image';
import { useAuthStore } from '@/store/Auth';

function Auth() {
  // const [isActiveLogIn, setIsActiveLogIn] = useState(true);
  const isActiveLogIn = useAuthStore((state) => state.isActiveLogIn);

  console.log(isActiveLogIn, 'isActiveLogIn');

  return (
    <>
      <motion.main
        initial={{ x: 0 }}
        animate={isActiveLogIn ? { x: 0 } : { x: '-50%' }}
        transition={{ duration: 0.4 }}
        className='flex    items-center min-h-screen w-full  '
      >
        <section className='overflow-hidden  min-w-[50%] w-full  flex justify-center items-center min-h-screen'>
          <LogIn />
        </section>
        <section className='min-w-[50%] w-full flex items-center    min-h-screen'>
          <Image
            src={authImage}
            alt='image of quote: "start doing" '
            className='w-full h-full object-cover'
          />
        </section>
        {!isActiveLogIn && (
          <section className='overflow-hidden min-w-[50%] w-full'>
            <Register />
          </section>
        )}
      </motion.main>
    </>
  );
}

export default Auth;

'use client';

import Framer from './framer';
import { useState } from 'react';

export default function ButtonNav() {
  const [active, setActive] = useState('');

  return (
    <main className='flex gap-10'>
      <Framer>
        <div
          className=' cursor-pointer relative'
          onMouseEnter={() => setActive('home')}
          onMouseLeave={() => setActive('')}
        >
          Home
          {active === 'home' && (
            <div className='absolute mt-1 w-full flex justify-center'>
              <div className=' w-2 h-2 rounded-full bg-black '> </div>
            </div>
          )}
        </div>
      </Framer>
      <Framer>
        <div
          className=' cursor-pointer relative'
          onMouseEnter={() => setActive('about')}
          onMouseLeave={() => setActive('')}
        >
          About
          {active === 'about' && (
            <div className='absolute mt-1 w-full flex justify-center'>
              <div className=' w-2 h-2 rounded-full bg-black '> </div>
            </div>
          )}
        </div>
      </Framer>
      <Framer>
        <div
          className=' cursor-pointer relative'
          onMouseEnter={() => setActive('services')}
          onMouseLeave={() => setActive('')}
        >
          Services
          {active === 'services' && (
            <div className='absolute mt-1 w-full flex justify-center'>
              <div className=' w-2 h-2 rounded-full bg-black '> </div>
            </div>
          )}
        </div>
      </Framer>
    </main>
  );
}

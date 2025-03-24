import React from 'react';
import Framer from './framer';

function ButtonMagnet() {
  return (
    <Framer>
      <button className='hidden cursor-pointer lg:block w-[166px] h-[50px] rounded-[200px] bg-white '>
        <span className='font-[popins] font-normal text-[16px]  text-[#000000] text-center '>
          Login
        </span>
      </button>
    </Framer>
  );
}

export default ButtonMagnet;

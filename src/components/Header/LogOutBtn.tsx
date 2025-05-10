'use client';
import axios from 'axios';

import React from 'react';

function LogOutBtn() {
  const logOut = async () => {
    try {
      const response = await axios.post('/api/logOut', {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        window.location.replace('/dashboard/home');
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <button
      onClick={() => logOut()}
      className='hidden cursor-pointer lg:block w-[166px] h-[50px] rounded-[200px] bg-white'
    >
      <span className='font-[popins] font-normal text-[16px] text-[#000000] text-center'>
        Log Out
      </span>
    </button>
  );
}

export default LogOutBtn;

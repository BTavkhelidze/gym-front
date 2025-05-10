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

      console.log(response, 'ressssLogOut');
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
      className='cursor-pointer  md:w-[150px] h-[50px] rounded-[200px]  bg-none md:bg-white'
    >
      <span className='font-[popins] font-normal text-[16px] text-white md:text-[#000000] text-start md:text-center'>
        Log Out
      </span>
    </button>
  );
}

export default LogOutBtn;

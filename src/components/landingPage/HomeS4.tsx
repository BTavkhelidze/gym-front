import React from 'react';
import HomeCustomers from './HomeCustomers';

export default function MembershipSection() {
  return (
    <div className='max-w-[1200px] w-full flex flex-col items-center justify-center m-auto mt-[90px] text-center'>
      <h2 className='text-[40px] font-bold text-[#E43071]'>Choose Your Plan</h2>
      <p className='mt-4 text-lg font-semibold text-gray-700'>
        Affordable membership options for every fitness level.
      </p>

      <HomeCustomers />

      <div className='mt-2 mb-4'>
        <p className='text-lg text-gray-700'>
          Not sure which plan is right for you?{' '}
          <span className='text-[#E43071]'>Contact us</span> for personalized
          recommendations.
        </p>
      </div>
    </div>
  );
}

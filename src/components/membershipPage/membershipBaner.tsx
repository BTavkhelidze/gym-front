'use client';

import Image from 'next/image';

const MembershipBaner = () => {
  return (
    <div className='relative h-auto inset-0 '>
      <Image
        src='/image/member_benefits.webp'
        alt='Member Benefits'
        layout='responsive'
        objectFit='contain'
        width={1440}
        height={1118}
      />
      <div className='absolute top-0 left-0 w-full h-full   flex justify-center'>
        <div className='max-w-[1440px] px-[40px] w-full flex flex-col  justify-center'>
          <div className=''>
            <h3 className='w-[600px] mb-[20px] font-[popins] font-normal text-[70px] leading-[70px] text-white '>
              MEMBERSIP WITH BENEFITS
            </h3>
            <p className='w-[600px] font-[popins] font-normal text-[20px] leading-[25px] text-white '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              expedita quisquam a laboriosam. Harum cumque, excepturi est
              quibusdam, cum commodi ex, corporis necessitatibus voluptatibus
              animi nobis porro fugit illo praesentium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipBaner;

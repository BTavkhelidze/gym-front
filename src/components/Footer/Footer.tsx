'use client';

import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='w-full bg-[#0B0D17] h-[64px] sm:h-[101px] flex justify-center items-center'>
      <div className='max-w-[1160px] w-full  flex justify-between items-center'>
        <div className='flex flex-col'>
          <div>
            <Image
              src='/svg/MobileLogo.svg'
              width={102}
              height={28}
              alt='Logo'
            />
          </div>
          <p>
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
            quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

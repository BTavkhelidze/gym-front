import React, { useState } from 'react';
import { headerLink } from '@/commons/services/hedaerLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ISetOpen {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

const HeaderNav: React.FC<ISetOpen> = ({ setIsOpen }) => {
  const [isActive, setIsActive] = useState('');
  const path = usePathname();

  return (
    <nav className='flex '>
      <ul className='gap-2 md:gap-10 flex md:flex-row flex-col  justify-between'>
        {headerLink.map((item) => (
          <li
            key={item.link}
            onMouseEnter={() => setIsActive(item.link)}
            onMouseLeave={() => setIsActive('')}
          >
            <Link href={item.link} className='relative  justify-center'>
              <span
                onClick={() => setIsOpen?.(false)}
                className='font-[popins] font-medium text-lg leading-[50px] md:leading-[110px]  text-white '
              >
                {item.title}
              </span>
              {isActive.startsWith(item.link) && (
                <div className='w-full hidden md:flex -bottom-3  absolute justify-center'>
                  <div className='w-1 h-1 rounded-full bg-white '></div>
                </div>
              )}
              {path.startsWith(item.link) && (
                <div className='w-full hidden md:flex -bottom-3  absolute justify-center'>
                  <div className='w-1 h-1 rounded-full bg-white '></div>
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;

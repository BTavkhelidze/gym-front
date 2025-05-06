'use client';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { AnimatePresence, motion } from 'motion/react';

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    bgImage: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  async function memberActivation(title: string) {
    const res = await axios.post(
      '/api/createMembership',
      { plan: title },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(res);
    console.log(res.data.message.status === 201);
    if (res.data.message.status === 201) {
      return toast(res.data.message.message);
    }
    if (res.data.message.status === 400) {
      return toast(res.data.message.message);
    }
    return toast('somthing went wrong, please contact us');
  }

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          onClick={() => memberActivation(item.title)}
          className='relative group block p-2 h-full w-full'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 h-full w-full bg-gray-400 dark:bg-amber-400-800/[0.8] block rounded-3xl'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card bgImage={item.bgImage}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription className='text-white'>
              {item.description.split(', ').map((item) => (
                <span
                  className=' flex flex-col gap-3 py-1 text-base'
                  key={item}
                >
                  {item}
                </span>
              ))}
            </CardDescription>
          </Card>
        </div>
      ))}
      <div className='absolute w-2 h-4 bg-red-300 right-0 bottom-0'>
        <ToastContainer />
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
  bgImage,
}: {
  className?: string;
  children: React.ReactNode;
  bgImage?: string;
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl w-full  overflow-hidden border border-transparent dark:blue-b-blue-950/[0.9] group-hover:border-blue-700 group-hover:bg-blue-500/20 relative z-20 max-w-[450px] h-[335px] transition-all duration-300',
        className
      )}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='absolute w-full h-full bg-black opacity-30'></div>
      <div className='relative z-50'>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn('text-zinc-100 font-bold tracking-wide mt-4', className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        'mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  );
};

'use client';

import { Box, Lock, Search, Settings, Sparkles } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import Image from 'next/image';

export function TrainersSection() {
  return (
    <section className='max-w-[1440px] w-full mx-auto px-[50px] py-[10px] '>
      <ul className='grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-3 md:grid-rows-3 lg:gap-8 xl:grid-rows-2'>
        <GridItem
          area=''
          icon={<Box className='h-4 w-4 text-black dark:text-neutral-400' />}
          title='Do things the right way'
          description="Running out of copy so I'll write anything."
        />

        <GridItem
          area=''
          icon={
            <Settings className='h-4 w-4 text-black dark:text-neutral-400' />
          }
          title='The best AI code editor ever.'
          description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
        />

        <GridItem
          area=''
          icon={<Lock className='h-4 w-4 text-black dark:text-neutral-400' />}
          title='You should buy Aceternity UI Pro'
          description="It's the best money you'll ever spend"
        />

        <GridItem
          area=''
          icon={
            <Sparkles className='h-4 w-4 text-black dark:text-neutral-400' />
          }
          title='This card is also built by Cursor'
          description="I'm not even kidding. Ask my mom if you don't believe me."
        />

        <GridItem
          area=''
          icon={<Search className='h-4 w-4 text-black dark:text-neutral-400' />}
          title='Coming soon on Aceternity UI'
          description="I'm writing the code as I record this, no shit."
        />
      </ul>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[600px] list-none cursor-pointer ${area}`}>
      <div className='relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3'>
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className='relative flex h-full  flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6'>
          <Image
            alt='trainers'
            fill
            className='object-cover'
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfeRW1Q_S6o2aVBNoBNGEqbrMw6UB5eq0Hyg&s'
            }
          />
          <div className='text-2xl absolute bottom-5 text-white  w-full '>
            <p>Personal Trainer </p>
          </div>
        </div>
      </div>
    </li>
  );
};

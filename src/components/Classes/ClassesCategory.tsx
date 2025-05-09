'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import {
  boxingClass,
  MMACLass,
  MuayThaiClass,
  PilatesClass,
  RunningClass,
  YogaClass,
} from '../../../public/image';
import { StaticImageData } from 'next/image';

export interface ICategory {
  id: number;
  name: string;
  image: StaticImageData;
  description: string;
}

export const categoryClasses: ICategory[] = [
  {
    id: 1,
    name: 'Boxing',
    image: boxingClass,
    description:
      'A high-energy combat sport that builds strength, agility, and endurance through punches, footwork, and defensive techniques.',
  },
  {
    id: 2,
    name: 'Yoga',
    image: YogaClass,
    description:
      'A mindful practice combining physical poses, breathing exercises, and meditation to enhance flexibility, balance, and mental clarity.',
  },
  {
    id: 3,
    name: 'Pilates',
    image: PilatesClass,
    description:
      'A low-impact workout focusing on core strength, posture, and controlled movements to improve flexibility and muscle tone.',
  },
  {
    id: 4,
    name: 'MMA',
    image: MMACLass,
    description:
      'Mixed Martial Arts blends techniques from boxing, wrestling, and jiu-jitsu for a dynamic, full-body combat training experience.',
  },
  {
    id: 5,
    name: 'Running',
    image: RunningClass,
    description:
      'A cardiovascular exercise that boosts stamina, heart health, and mental resilience through guided outdoor or treadmill sessions.',
  },
  {
    id: 6,
    name: 'Muay Thai',
    image: MuayThaiClass,
    description:
      'A Thai martial art using strikes, kicks, and clinching to develop power, coordination, and self-defense skills.',
  },
];

function ClassesCategory() {
  const [mouseEnter, setMouseEnter] = useState<string | null>(null);

  return (
    <section className='max-w-[1440px] text-white w-full mx-auto px-[10%] md:px-10  xl:px-30 flex flex-col md:flex-row gap-10  md:gap-0 justify-between my-20'>
      <p className='text-xl lg:text-3xl  font-semibold'>Classes Categories</p>
      <div className={' flex gap-2 flex-wrap'}>
        {categoryClasses.map((el) => (
          <div key={el.id} className='flex items-center'>
            <motion.div
              onMouseEnter={() => setMouseEnter(el.name)}
              onMouseLeave={() => setMouseEnter(null)}
              transition={{ duration: 1.3 }}
              className={
                mouseEnter && mouseEnter !== el.name
                  ? ' text-white blur-[1px]'
                  : ''
              }
            >
              <Link href={`/dashboard/classes/${el.name}`} className='text-xl'>
                {el.name}
              </Link>
            </motion.div>

            {el.id !== 6 && (
              <span className={cn('ml-2', mouseEnter && 'blur-[1px]')}>/</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClassesCategory;

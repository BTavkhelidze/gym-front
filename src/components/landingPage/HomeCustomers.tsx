import React from 'react';
import { HoverEffect } from '../ui/card-hover-effect';

export default function HomeCustomers() {
  return (
    <div className='max-w-[1200px] w-full mx-auto '>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: 'Basic',
    description:
      'Access to gym facilities, Weekly group classes, Free fitness assessment',

    bgImage: '/image/gymss.webp',
  },
  {
    title: 'Premium',

    description:
      'All Basic Plan benefits, Unlimited access to all classes, Personal training (2 sessions/month)',

    bgImage: '/image/teamsGirl.jpg',
  },
  {
    title: 'Vip',
    description:
      'All Premium Plan benefits, Priority booking for classes, Free gym merchandise',

    bgImage: '/image/girl.jpg',
  },
];

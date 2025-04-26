'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FormProvider } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { passwordMatchSchema } from '@/validation/passwordMatchSchema';
import Link from 'next/link';
import LogIn from '@/components/(auth)/Login';
import Register from '@/components/(auth)/Register';
import { authImage } from '../../../../public/image';
import Image from 'next/image';

const formSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
  })
  .and(passwordMatchSchema);

function Auth() {
  const [isActiveLogIn, setIsActiveLogIn] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <>
      <motion.main
        initial={{ x: 0 }}
        animate={isActiveLogIn ? { x: 0 } : { x: '-50%' }}
        transition={{ duration: 0.4 }}
        className='flex    items-center min-h-screen w-full  '
      >
        <section className='overflow-hidden  min-w-[50%] w-full  flex justify-center items-center min-h-screen'>
          <LogIn />
        </section>
        <section className='min-w-[50%] w-full flex items-center    min-h-screen'>
          <Image
            src={authImage}
            alt='image of quote: "start doing" '
            className='w-full h-full object-cover'
          />
          <button
            className='text-white'
            onClick={() => setIsActiveLogIn((prev) => !prev)}
          >
            click
          </button>
        </section>
        {!isActiveLogIn && (
          <section className='overflow-hidden min-w-[50%] w-full'>
            <Register />
          </section>
        )}
      </motion.main>
    </>
  );
}

export default Auth;

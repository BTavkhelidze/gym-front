'use client';
import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { z } from 'zod';

import { passwordSchema } from '@/validation/passwordSchema';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import SignInWithGoogle from './SignInWithGoogle';

const formSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

export default function LogIn() {
  const router = useRouter();
  const [backError, setBackError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setBackError(null);
    try {
      const requestData = {
        email: data.email,
        password: data.password,
      };
      const res = await axios.post('/api/login', requestData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.data.status === 200 && res.data.role === 'user') {
        form.reset();
        router.push('/dashboard/home');
      }

      if (res.data.status === 400) {
        setBackError(res.data.message);
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {}
  };

  const ChangeIsActiveLogIn = useAuthStore(
    (state) => state.ChangeIsActiveLogIn
  );

  return (
    <div className='shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black'>
      <h2 className='text-xl font-bold text-neutral-800 dark:text-neutral-200'>
        Welcome to AlphaZone
      </h2>
      <FormProvider {...form}>
        <form className='my-8' onSubmit={form.handleSubmit(handleSubmit)}>
          <LabelInputContainer className='mb-4 '>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              id='email'
              placeholder='Exapmle@gmail.com'
              type='email'
              {...form.register('email')}
            />
            {form.formState.errors.email && (
              <p className='text-sm text-red-500'>
                {form.formState.errors.email.message}
              </p>
            )}
          </LabelInputContainer>
          <LabelInputContainer className='mb-4 '>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              placeholder='••••••••'
              type='password'
              {...form.register('password')}
            />
            {form.formState.errors.password && (
              <p className='text-sm text-red-500'>
                {form.formState.errors.password.message}
              </p>
            )}
          </LabelInputContainer>

          <div className='h-5 w-full '>
            {backError && <p className='text-sm text-red-400'>{backError}</p>}
          </div>

          <button
            className='group/btn relative block mt-4 cursor-pointer h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]'
            type='submit'
          >
            Log In &rarr;
            <BottomGradient />
          </button>

          <div className='mt-4'>
            <p className='text-md font-light text-white'>
              Dont have a account?{' '}
              <span
                className='cursor-pointer text-blue-400 underline font-semibold'
                onClick={() => ChangeIsActiveLogIn()}
              >
                {' '}
                Sign Up
              </span>
            </p>
          </div>

          <div className='my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700' />

          <div className='flex flex-col space-y-4'>
            <SignInWithGoogle />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className='absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100' />
      <span className='absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100' />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex w-full flex-col space-y-2', className)}>
      {children}
    </div>
  );
};

'use client';
import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { z } from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { passwordMatchSchema } from '@/validation/passwordMatchSchema';
import { useAuthStore } from '@/store/authStore';
import axios from 'axios';
import SignInWithGoogle from './SignInWithGoogle';

const formSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
  })
  .and(passwordMatchSchema);

export default function Register() {
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
    const formData = {
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    };

    try {
      const res = await axios.post('/api/register', formData);

      if (res.data.status === 200) {
        form.reset();
        ChangeIsActiveLogIn();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const ChangeIsActiveLogIn = useAuthStore(
    (state) => state.ChangeIsActiveLogIn
  );

  return (
    <div className='shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black'>
      <h2 className='text-xl font-bold text-neutral-800 dark:text-neutral-200'>
        Welcome to AlphaZone{' '}
      </h2>
      <p className='mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300'>
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p>
      <FormProvider {...form}>
        <form className='my-8' onSubmit={form.handleSubmit(handleSubmit)}>
          <div className='mb-4 flex flex-col  space-y-2 md:flex-row md:space-y-0 md:space-x-2'>
            <LabelInputContainer className=''>
              <Label htmlFor='firstname'>First name</Label>
              <Input
                id='firstname'
                placeholder='Tyler'
                type='text'
                {...form.register('firstName')}
              />
              {form.formState.errors.firstName && (
                <p className='text-sm text-red-500'>
                  {form.formState.errors.firstName.message}
                </p>
              )}
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor='lastname'>Last name</Label>
              <Input
                id='lastname'
                placeholder='Durden'
                type='text'
                {...form.register('lastName')}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className='mb-4 '>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              id='email'
              placeholder='projectmayhem@fc.com'
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
          <LabelInputContainer className='mb-8'>
            <Label htmlFor='passwordConfirm'>Confirm password</Label>
            <Input
              id='passwordConfirm'
              placeholder='••••••••'
              type='password'
              {...form.register('passwordConfirm')}
            />
            {form.formState.errors.passwordConfirm && (
              <p className='text-sm text-red-500'>
                {form.formState.errors.passwordConfirm.message}
              </p>
            )}
          </LabelInputContainer>

          <button
            className='group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]'
            type='submit'
          >
            Sign up &rarr;
            <BottomGradient />
          </button>

          <div className='mt-4'>
            <p className='text-md font-light text-white'>
              Already have an account?{' '}
              <span
                className='cursor-pointer text-blue-400 underline font-semibold'
                onClick={() => ChangeIsActiveLogIn()}
              >
                {' '}
                Log In{' '}
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

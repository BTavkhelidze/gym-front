'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import axios from 'axios';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const signInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(4, 'pasword must contain al least 5 character')
    .max(20, 'pasword must contain  maximum 20 character'),
});

export default function SignInPage() {
  const router = useRouter();
  const [signInAsCompany, setSignInAsCompany] = useState(true);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: async () => {
      return { email: '', password: '' };
    },
  });

  const handleSubmit = async (formData: any) => {
    console.log(formData);
  };
  return (
    <main className='flex justify-center items-center min-h-screen '>
      <section className='flex-1 min-h-screen'></section>
      <section className='flex-1 flex justify-center items-center min-h-screen'>
        <Card className='w-[550px] p-6 border-0 shaddow-none text-white bg-gray-500'>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription className='pt-4'>
              {signInAsCompany
                ? 'Register your company account'
                : 'Register as a user'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormProvider {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className='gap-5 flex flex-col'
                onChange={() => setErrorMessage(undefined)}
              >
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder='Email' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Password'
                          type='password'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className='h-6'>
                  {errorMessage && (
                    <p className='text-red-400'>{errorMessage}</p>
                  )}
                </div>
                <Button
                  className='bg-amber-300 cursor-pointer'
                  type='submit'
                  variant={'secondary'}
                >
                  Sign In
                </Button>
              </form>
            </FormProvider>
          </CardContent>
          <CardFooter className=' flex flex-col'>
            <p>
              {' '}
              try{' '}
              <span
                className='cursor-pointer text-blue-400 underline font-semibold'
                onClick={() => router.push('/register')}
              >
                {' '}
                Sign Up{' '}
              </span>
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}

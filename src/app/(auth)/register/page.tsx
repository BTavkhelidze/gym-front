'use client';
import React from 'react';
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

const formSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
  })
  .and(passwordMatchSchema);

function Register() {
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
      <main className='flex justify-center items-center min-h-screen w-full '>
        <section className='flex-1 bg-amber-300 min-h-screen'></section>
        <section className='flex-1 flex justify-center items-center min-h-screen'>
          <Card className='w-[550px] border-none shadow-none '>
            <CardHeader>
              <CardTitle className='text-3xl'>Register</CardTitle>
            </CardHeader>
            <CardContent>
              <FormProvider {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSubmit)}
                  className='flex gap-5 flex-col'
                >
                  <div className='flex gap-10 w-full justify-between '>
                    <FormField
                      control={form.control}
                      name='firstName'
                      render={({ field }) => (
                        <FormItem className='flex-1'>
                          {/* <FormLabel>Email</FormLabel> */}
                          <FormControl className='px-[24px]  py-[26px]'>
                            <Input placeholder='First Name' {...field} />
                          </FormControl>

                          <FormMessage className='text-red-500' />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='lastName'
                      render={({ field }) => (
                        <FormItem className='flex-1'>
                          <FormControl className='px-[24px]  py-[26px]'>
                            <Input placeholder='Last Name' {...field} />
                          </FormControl>

                          <FormMessage className='text-red-500' />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl className='px-[24px] py-[26px]'>
                          <Input placeholder='Email' {...field} />
                        </FormControl>

                        <FormMessage className='text-red-500' />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl className='px-[24px] py-[26px]'>
                          <Input
                            placeholder='Password'
                            {...field}
                            type='password'
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='passwordConfirm'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl className='px-[24px] py-[26px]'>
                          <Input placeholder='Confirm Password' {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type='submit'
                    className='border self-center px-12 py-4 max-h-[40px] cursor-pointer'
                  >
                    Register
                  </Button>
                </form>
              </FormProvider>
            </CardContent>
            <CardFooter>
              <p className='text-md font-light'>
                Already have an account?{' '}
                <Link href='/login ' className='hover:underline text-blue-400'>
                  Login
                </Link>
              </p>
            </CardFooter>
          </Card>
        </section>
      </main>
    </>
  );
}

export default Register;

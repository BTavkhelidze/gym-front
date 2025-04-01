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

function Register() {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
  });
  return (
    <>
      <main className='flex justify-center items-center min-h-screen'>
        <Card className='w-[350px] '>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Register for a new account </CardDescription>
          </CardHeader>
          <CardContent>
            {/* <FormProvider>
                
            </FormProvider> */}
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}

export default Register;

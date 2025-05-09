'use client';
import RatingSection from '@/components/Profile/Reitingsection/page';
import { useAuthStore } from '@/store/authStore';
import Image from 'next/image';
import React from 'react';

function ProfilePage() {
  const user1 = useAuthStore((state) => state.user);

  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatar: 'https://via.placeholder.com/100',
    membership: {
      plan: 'Premium',
      expiryDate: '2025-12-31',
      visitsLeft: 10,
      paymentStatus: 'Active',
    },
    bookings: [
      { id: 1, className: 'Yoga', date: '2025-04-15', time: '10:00 AM' },
      { id: 2, className: 'HIIT', date: '2025-04-18', time: '5:00 PM' },
    ],
    transactionHistory: [
      { id: 1, amount: '$50', date: '2025-01-01', status: 'Completed' },
      { id: 2, amount: '$30', date: '2025-03-01', status: 'Completed' },
    ],
  };

  const userImage = `${user1?.firstName
    .split('')
    .at(0)
    ?.toUpperCase()}${user1?.lastName.split('').at(0)?.toUpperCase()}`;

  if (!user1) return null;
  console.log(user1, 'hover.dev');

  return (
    <div className='flex flex-col items-center min-h-screen bg-black pt-30 px-4'>
      <div className='w-full max-w-md bg-gray-900 rounded-2xl shadow-sm p-6 transform transition-all hover:shadow-md'>
        {/* Profile Header */}
        <div className='flex flex-col items-center'>
          <div className='relative bg-blue-200 text-black w-20 flex items-center justify-center h-20 rounded-full overflow-hidden mb-4'>
            {/* <Image
              src={user.avatar}
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            /> */}
            <p>{userImage}</p>
          </div>
          <h2 className='text-2xl font-semibold text-white'>
            {user1.firstName}
          </h2>
          <p className='text-gray-400 text-sm'>{user1.email}</p>
        </div>

        {/* Membership Details */}
        <div className='mt-6 bg-gray-800 rounded-xl p-4'>
          <h3 className='text-sm font-medium text-gray-300 mb-2'>Membership</h3>
          {user1.membershipId ? (
            <div className='text-sm text-gray-400 space-y-1'>
              <p>
                <span className='font-medium'>Plan:</span>{' '}
                {user.membership.plan}
              </p>
              <p>
                <span className='font-medium'>Expiry:</span>{' '}
                {user.membership.expiryDate}
              </p>
              <p>
                <span className='font-medium'>Visits Left:</span>{' '}
                {user.membership.visitsLeft}
              </p>
              <p>
                <span className='font-medium'>Status:</span>
                <span
                  className={`ml-1 ${
                    user.membership.paymentStatus === 'Active'
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}
                >
                  {user.membership.paymentStatus}
                </span>
              </p>
            </div>
          ) : (
            <p className='text-gray-400'>
              {' '}
              Make First step, start Now to become member of AlphaZone.
            </p>
          )}
        </div>

        {/* Class Bookings */}
        <div className='mt-6 bg-gray-800 rounded-xl p-4'>
          <h3 className='text-sm font-medium text-gray-300 mb-2'>
            Upcoming Classes
          </h3>
          {user.bookings.length > 0 ? (
            <ul className='text-sm text-gray-400 space-y-2'>
              {user.bookings.map((booking) => (
                <li key={booking.id} className='flex justify-between'>
                  <span>{booking.className}</span>
                  <span>
                    {booking.date} at {booking.time}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-sm text-gray-500'>No upcoming classes</p>
          )}
        </div>

        {/* Transaction History */}
        <div className='mt-6 bg-gray-800 rounded-xl p-4'>
          <h3 className='text-sm font-medium text-gray-300 mb-2'>
            Transaction History
          </h3>
          {user.transactionHistory.length > 0 ? (
            <ul className='text-sm text-gray-400 space-y-2'>
              {user.transactionHistory.map((transaction) => (
                <li key={transaction.id} className='flex justify-between'>
                  <span>{transaction.amount}</span>
                  <span>
                    {transaction.date} ({transaction.status})
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-sm text-gray-500'>No transactions yet</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className='mt-6 flex space-x-3'>
          <button className='flex-1 py-2 bg-blue-500 text-white rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors'>
            Edit Profile
          </button>
          <button className='flex-1 py-2 bg-green-500 text-white rounded-xl text-sm font-medium hover:bg-green-600 transition-colors'>
            Renew Membership
          </button>
        </div>
      </div>

      <div className='w-full max-w-md mt-6'>
        <RatingSection />
      </div>
    </div>
  );
}

export default ProfilePage;

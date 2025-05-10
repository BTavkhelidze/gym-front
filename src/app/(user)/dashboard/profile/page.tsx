'use client';
import RatingSection from '@/components/Profile/Reitingsection/page';
import { useAuthStore } from '@/store/authStore';
import React from 'react';

function ProfilePage() {
  const user1 = useAuthStore((state) => state.user);
  if (!user1) return null;

  const userImage = `${user1?.firstName
    .split('')
    .at(0)
    ?.toUpperCase()}${user1?.lastName.split('').at(0)?.toUpperCase()}`;

  // Debugging: Log the user1 object to inspect membershipId
  console.log('user1:', user1);

  // Format the endDate for display
  let expiryDate = 'Not available';
  if (user1.membershipId?.endDate) {
    const date = new Date(user1.membershipId.endDate);
    // Check if the date is valid
    if (!isNaN(date.getTime())) {
      expiryDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } else {
      expiryDate = 'Invalid Date';
    }
  }

  // Format the startDate for display
  let startDate = 'Not available';
  if (user1.membershipId?.startDate) {
    const date = new Date(user1.membershipId.startDate);
    // Check if the date is valid
    if (!isNaN(date.getTime())) {
      startDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } else {
      startDate = 'Invalid Date';
    }
  }

  return (
    <div className='flex flex-col items-center min-h-screen bg-black pt-30 px-4'>
      <div className='w-full max-w-md bg-gray-900 rounded-2xl shadow-sm p-6 transform transition-all hover:shadow-md'>
        {/* Profile Header */}
        <div className='flex flex-col items-center'>
          <div className='relative bg-blue-200 text-black w-20 flex items-center justify-center h-20 rounded-full overflow-hidden mb-4'>
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
                {user1.membershipId.membershipPlan || user1.membershipId.status}
              </p>
              <p>
                <span className='font-medium'>Start Date:</span> {startDate}
              </p>
              <p>
                <span className='font-medium'>Expiry:</span> {expiryDate}
              </p>
              <p>
                <span className='font-medium'>Visits Left:</span>{' '}
                {user1.membershipId.visitsLeft === -1
                  ? 'unlimited'
                  : user1.membershipId.visitsLeft}
              </p>
              <p>
                <span className='font-medium'>Status:</span>
                <span
                  className={`ml-1 ${
                    user1.membershipId.status === 'Active'
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}
                >
                  {user1.membershipId.status}
                </span>
              </p>
            </div>
          ) : (
            <p className='text-gray-400'>
              Make the first step, start now to become a member of AlphaZone.
            </p>
          )}
          <p className='text-sm text-green-500 mt-4'>
            To change or pause, please contact to us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
